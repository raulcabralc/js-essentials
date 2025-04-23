import Student from "../models/Student";
import Photo from "../models/Photo";

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll({
        attributes: [
          "id",
          "name",
          "surname",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"],
          [Photo, "id", "DESC"],
        ],
        include: {
          model: Photo,
          attributes: ["url", "filename"],
        },
      });
      res.json(students);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      res.json(`Student ${student.name} created.`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const student = await Student.findByPk(id, {
        attributes: [
          "id",
          "name",
          "surname",
          "email",
          "age",
          "weight",
          "height",
        ],
        include: {
          model: Photo,
          attributes: ["url", "filename"],
        },
      });

      if (!student) {
        return res.status(400).json({
          errors: ["Student is not registered in the system."],
        });
      }

      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Student is not registered in the system."],
        });
      }
      if (!req.body) {
        return res.json(`No changes made to student ${student.name}.`);
      }
      await student.update(req.body);
      return res.json(`Student ${student.name} updated.`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Missing ID."],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Student is not registered in the system."],
        });
      }

      await student.destroy();
      return res.json(`Student ${student.name} deleted.`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((error) => error.message),
      });
    }
  }
}

export default new StudentController();
