import 'dotenv/config';
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import path from 'path';

const connectionString = process.env.POSTGRES_URI;

if (!connectionString) {
  console.error("POSTGRES_URI is not set in the environment");
  process.exit(1);
}

const sql = postgres(connectionString, { 
  ssl: "require",
  max: 1,
  onnotice: (notice) => {
    console.log('Postgres Notice:', notice);
  }
});

const db = drizzle(sql);

async function runMigrate() {
  console.log("Running migrations...");
  
  try {
    await migrate(db, { 
      migrationsFolder: path.resolve('./migrations') 
    });
    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration error:", error);
  } finally {
    await sql.end();
  }
}

runMigrate().catch(console.error);