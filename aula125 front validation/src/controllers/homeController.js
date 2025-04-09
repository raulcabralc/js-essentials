const Contact = require("../models/ContactModel");

exports.index = async (req, res, next) => {
  const contacts = await Contact.searchContacts();

  console.log();
  console.log("Rendering Home Page...");
  console.log();
  res.render("index", { contacts });
  console.log("Home Page Rendered");
  console.log();
  next();
};
