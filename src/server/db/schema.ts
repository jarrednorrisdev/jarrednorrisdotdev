// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
  (name) => `jarrednorrisdotdev_${name}`,
);

export const userTable = createTable("user", {
  id: uuid("id").primaryKey(),
  email: varchar("email").unique().notNull(),
  emailVerified: timestamp("email_verified"),
});

export const sessionTable = createTable("session", {
  id: varchar("id").primaryKey(),
  userId: uuid("user_id")
    .references(() => userTable.id, { onDelete: "cascade" })
    .notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const accountTypeEnum = ["username", "google", "github"] as const;

export const accountTable = createTable("accounts", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id")
    .references(() => userTable.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
  accountType: varchar("account_type", { enum: accountTypeEnum }).notNull(),
  username: varchar("username").unique(),
  githubId: varchar("github_id").unique(),
  googleId: varchar("google_id").unique(),
  passwordHash: varchar("password_hash"),
  salt: varchar("salt"),
});

export const profileTable = createTable("profile", {
  id: uuid("id").primaryKey(),
  userId: uuid("user_id")
    .references(() => userTable.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
  displayName: varchar("display_name"),
  imageId: varchar("image_id"),
  image: varchar("image"),
  bio: varchar("bio").notNull().default(""),
});

export const imageTable = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 256 }).notNull(),
    userId: uuid("user_id")
      .references(() => userTable.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => ({
    nameIndex: index("images_name_idx").on(table.name),
    urlIndex: index("images_url_idx").on(table.url),
    createdAtIndex: index("images_created_at_idx").on(table.createdAt),
  }),
);

export type Image = typeof imageTable.$inferSelect;
export type Profile = typeof profileTable.$inferSelect;
export type Account = typeof accountTable.$inferSelect;
export type User = typeof userTable.$inferSelect;
