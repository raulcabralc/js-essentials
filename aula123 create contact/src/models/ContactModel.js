const mongoose = require("mongoose");
const validator = require("validator");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: false,
    default: "",
  },
  number: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: false,
    default: "",
  },
  createdIn: {
    type: Date,
    default: Date.now,
  },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async register() {
    this.validate();

    if (this.errors.length > 0) {
      this.contact = null;
      return;
    }

    this.contact = await ContactModel.create(this.body);
  }

  validate() {
    this.cleanUp();

    if (this.body.email && !validator.isEmail(this.body.email)) {
      this.errors.push("Invalid Email.");
    }
    if (!this.body.name) {
      this.errors.push("Name is a required field.");
    }
    if (!(this.body.email || this.body.number)) {
      this.errors.push("Add at least one contact method. (Email or Number)");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      name: this.body.name,
      surname: this.body.surname,
      email: this.body.email,
      number: this.body.number,
    };
  }

  static async searchById(id) {
    if (typeof id !== "string") return;
    const user = await ContactModel.findById(id);
    return user;
  }
}

module.exports = Contact;
