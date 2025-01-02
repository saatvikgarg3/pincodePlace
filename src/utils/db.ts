import process from 'node:process';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';
// const url = process.env.DB_URL
// console.log(url,"****url");

if (!process.env.DB_URL) {
  console.error('DB_URL environment variable is missing!');
  process.exit(1); // Exit the process if DB_URL is not found
}
export const db = drizzle(postgres(process.env.DB_URL));
