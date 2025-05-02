import multer from "multer";
import { extname, resolve } from "path";

const random = Math.round(Math.random() * 1000 + 4000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("File must be an image."));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, cb) => {
      cb(null, `IMG_${Date.now()}_${random}${extname(file.originalname)}`);
    },
  }),
};
