export class ImageNotFoundError extends Error {
  readonly _tag = "ImageNotFoundError";
  constructor(message?: string, cause?: unknown) {
    const newMessage = message
      ? "ImageNotFoundError: " + message
      : "ImageNotFoundError: unspecified";
    super(newMessage, { cause });
  }
}
