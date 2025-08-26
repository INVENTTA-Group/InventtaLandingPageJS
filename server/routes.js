import { createServer } from "http";
import { z } from "zod";
import { db } from "./db.js";
import { contacts } from "../shared/schema.js"; // Drizzle schema
import sendMail from "./mailer.js";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid Phone Number"),
  businessVertical: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app) {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Store in DB (example with SQL)
      // ✅ Drizzle insert
      await db.insert(contacts).values({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        businessVertical: validatedData.businessVertical || null,
        message: validatedData.message,
      });
      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM system

      await sendMail({
        to: "borado9406@jobzyy.com",
        subject: `New Inquiry from ${validatedData.firstName} ${validatedData.lastName}`,
        text: `
          Name: ${validatedData.firstName} ${validatedData.lastName}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone}
          Business Vertical: ${validatedData.businessVertical || "N/A"}
          Message:
          ${validatedData.message}
        `
      });

      res.json({
        stored: true,
        emailed: true,
        message: "Stored successfully in database."
      });
      
      console.log("Contact form submission:", validatedData);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          stored : false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else if (!(error instanceof z.ZodError)) {
      console.error("SendMail error:", error);
      res.status(500).json({ stored: true, emailed: false, message: "Email send failed." });
    }
      
      else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          stored: false,
          emailed: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}