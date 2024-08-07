import { DrizzleError } from "drizzle-orm/errors";

export class DrizzleQueryError extends DrizzleError {
  readonly _tag = "DrizzleQueryError";
  constructor(message?: string, cause?: unknown) {
    super({ message, cause });
  }
}
