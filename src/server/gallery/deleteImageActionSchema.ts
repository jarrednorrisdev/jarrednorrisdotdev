import { z } from "zod";

export const deleteImageSchema = z.object({
  imageId: z.number(),
});
