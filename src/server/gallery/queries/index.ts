import {
  deleteImageById,
  liveDeleteImageById,
} from "~/server/gallery/queries/deleteImageById";
import { liveDeleteImageByIdAction } from "./liveDeleteImageByIdAction";
import {
  getAllImages,
  liveGetAllImages,
} from "~/server/gallery/queries/getAllImages";
import {
  getUserImagesById,
  liveGetUserImagesById,
} from "~/server/gallery/queries/getUserImagesById";
import {
  getImageById,
  liveGetImageById,
} from "~/server/gallery/queries/getImageById";
import {
  getOtherUserImages,
  liveGetOtherUserImages,
} from "~/server/gallery/queries/getOtherUserImages";

export { deleteImageById, liveDeleteImageById, liveDeleteImageByIdAction };
export { getAllImages, liveGetAllImages };
export { getUserImagesById, liveGetUserImagesById };
export { getImageById, liveGetImageById };
export { getOtherUserImages, liveGetOtherUserImages };
