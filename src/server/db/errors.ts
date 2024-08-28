import { DrizzleError } from "drizzle-orm";

export class DrizzleQueryError extends DrizzleError {
  readonly _tag = "DrizzleQueryError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "DrizzleQueryError: " + message
      : "DrizzleQueryError: unspecified";
    super({ message: newMessage, cause });
  }
}
