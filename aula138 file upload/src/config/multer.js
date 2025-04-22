import multer from "multer";
import { extname, resolve } from "path";

const random = Math.round(Math.random() * 1000 + 4000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `IMG_${Date.now()}_${random}${extname(file.originalname)}`);
    },
  }),
};
