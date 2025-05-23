import multer from "multer";
import multerConfig from "../config/multer";
const upload = multer(multerConfig).single("photoMultipart");

class PhotoController {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new PhotoController();
