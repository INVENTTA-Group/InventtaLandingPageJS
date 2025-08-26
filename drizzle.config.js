import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./shared/schema.js",
  out: "./migrations",
  dbCredentials: {
    url: process.env.POSTGRES_URI || "",
  },
});