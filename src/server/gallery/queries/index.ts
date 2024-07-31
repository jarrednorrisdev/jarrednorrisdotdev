import {
  deleteImageById,
  liveDeleteImageById,
} from "~/server/gallery/queries/deleteImageById";
import { liveDeleteImageByIdAction } from "./liveDeleteImageByIdAction";
import {
  getAllImages,
  liveGetAllImages,
  liveGetAllImagesAction,
} from "~/server/gallery/queries/getAllImages";
import {
  getUserImagesById,
  liveGetUserImagesById,
  liveGetUserImagesByIdAction,
} from "~/server/gallery/queries/getUserImagesById";
import {
  getImageById,
  liveGetImageById,
  liveGetImageByIdAction,
} from "~/server/gallery/queries/getImageById";
import {
  getOtherUserImages,
  liveGetOtherUserImages,
  liveGetOtherUserImagesAction,
} from "~/server/gallery/queries/getOtherUserImages";

export { deleteImageById, liveDeleteImageById, liveDeleteImageByIdAction };
export { getAllImages, liveGetAllImages, liveGetAllImagesAction };
export {
  getUserImagesById,
  liveGetUserImagesById,
  liveGetUserImagesByIdAction,
};
export { getImageById, liveGetImageById, liveGetImageByIdAction };
export {
  getOtherUserImages,
  liveGetOtherUserImages,
  liveGetOtherUserImagesAction,
};
