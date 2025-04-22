import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async create(req, res) {
    const student = await Student.create(req.body);
    res.json(student);
  }
}

export default new StudentController();
