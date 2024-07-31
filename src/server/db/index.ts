import { drizzle, type VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import { Context } from "effect";
import { sql } from "@vercel/postgres";
import * as schema from "~/server/db/schema";

export const db = drizzle(sql, { schema });

export class DatabaseService extends Context.Tag("@jnd/DbService")<
  DatabaseService,
  VercelPgDatabase<typeof schema>
>() {}

export const LiveDatabseServiceContext: Context.Context<DatabaseService> =
  Context.empty().pipe(Context.add(DatabaseService, db));
