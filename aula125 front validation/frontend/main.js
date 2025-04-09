import "core-js/stable";
import "regenerator-runtime/runtime";
import SignUp from "./modules/SignUp";
import Contact from "./modules/Contact";

const signup = new SignUp(".form-signup");
const contact = new Contact(".form-contact");

signup.init();
contact.init();

console.log("Front end working!");
