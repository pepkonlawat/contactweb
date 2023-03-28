"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  cid: { type: String, Required: "Please enter" },
  firstname: { type: String, Required: "Please enter" },
  lastname: { type: String, Required: "Please enter" },
  email: { type: String },
  mobile: { type: String, Required: "Please enter" },
  facebook: { type: String },
  imageUrl: {
    type: String,
    default: "https://nightswinger.github.io/vue-fomantic-ui/views/card",
  },
});
module.exports = mongoose.model("Contacts", ContactSchema);
