"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  cid: { type: String, Required: "Please enter" },
  firstname: { type: String, Required: "Please enter" },
  lastname: { type: String, Required: "Please enter" },
  mobile: { type: String, Required: "Please enter" },
  email: { type: String },
  facebook: { type: String },
  imageUrl: {
    type: String,
    default: "https://semantic-ui.com/images/avatar2/large/elyse.png",
  },
});
module.exports = mongoose.model("Contacts", ContactSchema);
