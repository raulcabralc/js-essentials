const Contact = require("../models/ContactModel");

exports.index = (req, res, next) => {
  res.render("contact", {
    contact: {},
  });
};

exports.register = async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.register();

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(() => {
        res.redirect("/contact/index");
      });
      return;
    }

    req.flash("success", "Contact created.");
    req.session.save(() => {
      res.redirect(`/contact/${contact.contact._id}`);
    });
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};

exports.editIndex = async (req, res, next) => {
  if (!req.params.id) {
    return res.render("404");
  }

  const contact = await Contact.searchById(req.params.id);
  if (!contact) return res.render("404");

  res.render("contact", { contact });
};
