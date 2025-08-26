// server/db.js
import 'dotenv/config'; 
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "../shared/schema.js";

// Load env vars
const connectionString = process.env.POSTGRES_URI;
if (!connectionString) {
  throw new Error("POSTGRES_URI environment variable is not set");
}

// Connect using postgres.js
const client = postgres(connectionString, { 
  ssl: "require", 
  onnotice: (notice) => {
    console.log('Postgres Notice:', notice);
  },
  error: (error) => {
    console.error('Postgres Connection Error:', error);
  }
});

// Create Drizzle DB instance
export const db = drizzle(client, { schema });

// Optional: Add a clean connection close method
export const closeConnection = () => client.end();