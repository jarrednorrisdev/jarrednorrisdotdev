export class ClerkAuthError extends Error {
  readonly _tag = "ClerkAuthError";
  constructor() {
    super("There was an error with the Clerk authentication service");
  }
}
