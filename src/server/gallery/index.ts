import "server-only";
import { Context } from "effect";
import { type AuthService, LiveAuthServiceContext } from "~/server/auth";
import { type DatabaseService, LiveDatabaseServiceContext } from "~/server/db";

export const LiveGalleryServiceContext: Context.Context<
  AuthService | DatabaseService
> = Context.merge(LiveAuthServiceContext, LiveDatabaseServiceContext);
