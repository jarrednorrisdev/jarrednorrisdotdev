export class UserNotFoundError extends Error {
  readonly _tag = "UserNotFoundError";
  constructor() {
    super("User not found");
  }
}
