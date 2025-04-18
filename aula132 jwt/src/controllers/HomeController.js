import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Raul",
      surname: "Cabral",
      email: "raulcabralc@gmail.com",
      age: 18,
      weight: 70,
      height: 1.8,
    });
    res.json({
      newStudent,
    });
  }
}

export default new HomeController();
