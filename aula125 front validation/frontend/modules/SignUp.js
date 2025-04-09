import validator from "validator";

export default class SignUp {
  constructor(formSignUp) {
    this.form = document.querySelector(formSignUp);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.validate(event);
    });
  }

  validate(event) {
    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    const element = event.target;
    const usernameInput = element.querySelector('input[name="username"]');
    const emailInput = element.querySelector('input[name="email"]');
    const passInput = element.querySelector('input[name="password"]');
    let error = false;

    if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
      this.createError(
        usernameInput,
        "Username must have between 3 and 12 characters"
      );
      error = true;
    }

    if (!validator.isEmail(emailInput.value)) {
      this.createError(emailInput, "Invalid email");
      error = true;
    }
    if (passInput.value.length < 3 || passInput.value.length > 15) {
      this.createError(
        passInput,
        "Password must have between 3 and 15 characters"
      );
      error = true;
    }

    if (!error) {
      element.submit();
    }
  }

  createError(field, message) {
    const div = document.createElement("div");
    div.innerHTML = message;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}
