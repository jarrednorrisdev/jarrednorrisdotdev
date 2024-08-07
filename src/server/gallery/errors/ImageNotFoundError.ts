export class ImageNotFoundError extends Error {
  readonly _tag = "ImageNotFoundError";
  constructor(message?: string) {
    super(message);
  }
}
