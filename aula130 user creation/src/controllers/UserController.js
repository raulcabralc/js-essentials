import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.send(`${newUser.name} criado(a) com sucesso`);
    } catch (error) {
      res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
