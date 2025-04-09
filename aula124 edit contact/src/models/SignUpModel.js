const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const SignUpSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const SignUpModel = mongoose.model("SignUp", SignUpSchema);

class SignUp {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return;

    await this.userExists();

    if (this.errors.length > 0) return;

    this.safePass();

    this.user = await SignUpModel.create(this.body);
  }

  async userExists() {
    const userUsername = await SignUpModel.findOne({
      username: this.body.username,
    });
    const userEmail = await SignUpModel.findOne({
      email: this.body.email,
    });
    if (userUsername) {
      this.errors.push("This username is already registered");
    }
    if (userEmail) {
      this.errors.push("This email is already registered");
    }
  }

  safePass() {
    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
  }

  validate() {
    this.cleanUp();
    if (this.body.username.length < 3 || this.body.username.length > 12) {
      this.errors.push("Username must be 3 to 12 characters long.");
    }

    if (!validator.isEmail(this.body.email)) {
      this.errors.push("Invalid Email.");
    }

    if (this.body.password.length < 3 || this.body.password.length > 15) {
      this.errors.push("Password must be 3 to 15 characters long.");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      username: this.body.username,
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = { SignUp, SignUpModel };
