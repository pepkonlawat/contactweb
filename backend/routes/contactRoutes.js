"use strict";
module.exports = function (app) {
  var contact = require("../controllers/contactController");
  app
    .route("/contacts")
    .get(contact.listAllContacts)
    .post(contact.createAContact);
  app
    .route("/contacts/:contactId")
    .get(contact.getAContact)
    .post(contact.updateAContact)
    .delete(contact.deleteAContact);
};
