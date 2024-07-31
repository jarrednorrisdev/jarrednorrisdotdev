export class UserNotSignedInError extends Error {
  readonly _tag = "UserNotSignedInError";
  constructor() {
    super("User not signed in");
  }
}
