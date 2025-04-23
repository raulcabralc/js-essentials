import multer from "multer";
import multerConfig from "../config/multer";

import Photo from "../models/Photo";

const upload = multer(multerConfig).single("photoMultipart");

class PhotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { student_id } = req.body;
      try {
        await Photo.create({
          originalname,
          filename,
          student_id,
        });

        return res.json(`Photo added to id ${student_id}.`);
      } catch {
        return res.status(400).json({
          errors: ["Student id isn't registered."],
        });
      }
    });
  }
}

export default new PhotoController();
