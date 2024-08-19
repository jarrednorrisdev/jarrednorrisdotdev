import { drizzle, type VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import { Context, Layer } from "effect";
import { sql } from "@vercel/postgres";
import * as schema from "~/server/db/schema";

export const db = drizzle(sql, { schema });

export class DatabaseService extends Context.Tag("@jnd/DatabaseService")<
  DatabaseService,
  VercelPgDatabase<typeof schema>
>() {}

export const DatabaseServiceLive = Layer.succeed(DatabaseService, db);
