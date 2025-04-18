import User from "../models/User";

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.send(`${newUser.name} criado(a) com sucesso`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      console.log({
        userLogged: {
          email: req.userEmail,
          id: req.userId,
        },
      });
      const users = await User.findAll();
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.json(user);
    } catch {
      return res.json(null);
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

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      const newData = await user.update(req.body);

      return res.json(newData);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
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

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      await user.destroy();

      return res.json(`User ${user.name} deleted.`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
