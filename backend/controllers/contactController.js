"use strict";

var mongoose = require("mongoose");
Contact = mongoose.model("Contacts");

exports.listAllContacts = function (req, res) {
  var query = { sort: { cid: 1 } };
  Contact.find({}, null, query, function (err, contact) {
    if (err) throw err;
    console.log(contact);
    res.json(contact);
  });
};
exports.createAContact = function (req, res) {
  var newContact = new Contact(req.body);
  console.log(req.body);
  newContact.save(function (err, contact) {
    if (err) throw err;
    res.json(contact);
  });
};
exports.getAContact = function (req, res) {
  console.log(req.params.cid);
  Contact.findById(req.params.cid, function (err, contact) {
    if (err) throw err;
    res.json(contact);
  });
};

exports.updateAContact = function (req, res) {
  console.log(req.params.cid);
  var newContact = {};
  newContact = req.body;
  Contact.findByIdAndUpdate(
    req.params.cid,
    newContact,
    { new: true },
    function (err, contact) {
      if (err) throw err;
      console.log(contact);
      res.json(contact);
    }
  );
};

exports.deleteAContact = function (req, res) {
  console.log(req.params.cid);
  Contact.findByIdAndRemove(req.params.cid, function (err, contact) {
    if (err) throw err;
    const response = {
      message: "Delete Contact id : " + req.params.cid,
      id: contact.cid,
    };
    res.json(response);
  });
};
