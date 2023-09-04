import "reflect-metadata";
import { DataSource } from "typeorm";
import { Property, Entry, PropertyType, ListingStatus } from "./entities";

// Initialize PostgreSQL
export const DBContext = new DataSource({
  type: "postgres",
  username: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  host: process.env.POSTGRES_HOST,
  synchronize: true,
  entities: [Property, Entry, PropertyType, ListingStatus],
});
