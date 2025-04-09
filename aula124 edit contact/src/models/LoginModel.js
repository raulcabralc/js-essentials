const bcryptjs = require("bcryptjs");
const { SignUpModel } = require("./SignUpModel");

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    if (this.errors.length > 0) return;
    this.user = await SignUpModel.findOne({
      email: this.body.email,
    });

    if (!this.user) {
      this.errors.push(
        `User does not exist. Don't have an account? <a href="/signup">Sign Up</a>`
      );
      return;
    }

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push("Invalid password.");
      this.user = null;
      return;
    }

    if (this.errors.length > 0) return;
  }
}

module.exports = Login;
