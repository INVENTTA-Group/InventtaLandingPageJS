// server/mailer.js
import 'dotenv/config';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export default async function sendMail({ to, subject, text }) {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: "borado9406@jobzyy.com",
    subject,
    text
  });
}
