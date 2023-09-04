import "reflect-metadata";
import { DataSource } from "typeorm";
import { Property, Entry, PropertyType, ListingStatus } from "./entities";
import { __prod__ } from "./constants";

// Initialize PostgreSQL
export const DBContext = new DataSource({
  type: "postgres",
  username: process.env.PG_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  host: process.env.POSTGRES_HOST,
  entities: [Property, Entry, PropertyType, ListingStatus],
  migrations: ["./migrations/*.ts"],
  synchronize: !__prod__,
});
