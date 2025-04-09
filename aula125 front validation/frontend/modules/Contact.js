export default class Contact {
  constructor(formContact) {
    this.form = document.querySelector(formContact);
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
    const nameInput = element.querySelector('input[name="name"]');
    const numberInput = element.querySelector('input[name="number"]');
    const emailInput = element.querySelector('input[name="email"]');
    let error = false;

    if (!nameInput.value) {
      this.createError(nameInput, "You must register the name of the contact");
      error = true;
    }

    if (!(numberInput.value || emailInput.value)) {
      this.createError(
        numberInput,
        "You must register at least one contact method"
      );
      this.createError(
        emailInput,
        "You must register at least one contact method"
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
