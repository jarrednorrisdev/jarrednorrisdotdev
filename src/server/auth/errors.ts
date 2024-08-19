export class UserNotFoundError extends Error {
  readonly _tag = "UserNotFoundError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "UserNotFoundError: " + message
      : "UserNotFoundError: unspecified";
    super(newMessage, { cause });
  }
}

export class AccountNotFoundError extends Error {
  readonly _tag = "AccountNotFoundError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "AccountNotFoundError: " + message
      : "AccountNotFoundError: unspecified";
    super(newMessage, { cause });
  }
}

export class UserNotSignedInError extends Error {
  readonly _tag = "UserNotSignedInError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "UserNotSignedInError: " + message
      : "UserNotSignedInError: unspecified";
    super(newMessage, { cause });
  }
}

export class PasswordEncryptError extends Error {
  readonly _tag = "PasswordEncryptError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "PasswordEncryptError: " + message
      : "PasswordEncryptError: unspecified";
    super(newMessage, { cause });
  }
}

export class PasswordDecryptError extends Error {
  readonly _tag = "PasswordDecryptError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "PasswordDecryptError: " + message
      : "PasswordDecryptError: unspecified";
    super(newMessage, { cause });
  }
}

export class MissingPasswordHashError extends Error {
  readonly _tag = "MissingPasswordHashError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "MissingPasswordHashError: " + message
      : "MissingPasswordHashError: unspecified";
    super(newMessage, { cause });
  }
}

export class IncorrectPasswordError extends Error {
  readonly _tag = "IncorrectPasswordError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "IncorrectPasswordError: " + message
      : "IncorrectPasswordError: unspecified";
    super(newMessage, { cause });
  }
}

export class EmailAlreadyRegisteredError extends Error {
  readonly _tag = "EmailAlreadyRegisteredError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "EmailAlreadyRegisteredError: " + message
      : "EmailAlreadyRegisteredError: unspecified";
    super(newMessage, { cause });
  }
}

export class UsernameAlreadyExistsError extends Error {
  readonly _tag = "UsernameAlreadyExistsError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "UsernameAlreadyExistsError: " + message
      : "UsernameAlreadyExistsError: unspecified";
    super(newMessage, { cause });
  }
}

export class CreateSessionError extends Error {
  readonly _tag = "CreateSessionError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "CreateSessionError: " + message
      : "CreateSessionError: unspecified";
    super(newMessage, { cause });
  }
}

export class ValidateSessionError extends Error {
  readonly _tag = "ValidateSessionError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "ValidateSessionError: " + message
      : "ValidateSessionError: unspecified";
    super(newMessage, { cause });
  }
}

export class GetSessionCookieError extends Error {
  readonly _tag = "GetSessionCookieError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "GetSessionCookieError: " + message
      : "GetSessionCookieError: unspecified";
    super(newMessage, { cause });
  }
}

export class NotAuthenticatedError extends Error {
  readonly _tag = "NotAuthenticatedError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "NotAuthenticatedError: " + message
      : "NotAuthenticatedError: unspecified";
    super(newMessage, { cause });
  }
}

