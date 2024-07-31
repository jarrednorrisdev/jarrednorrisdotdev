export class ImageNotFoundError extends Error {
  readonly _tag = "ImageNotFoundError";
  constructor() {
    super("Image not found");
    this.name = "ImageNotFoundError";
  }
}
