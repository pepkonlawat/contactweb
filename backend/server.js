var express = require("express");
app = express();

mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");

port = process.env.PORT || 5001;
Contact = require("./models/contactModel");
mongoose.Promise = global.Promise;
url = "mongodb+srv://pepkonlawat:nCj0iQmuawWrCwOC@pepcluster0.b4qorue.mongodb.net/ContactList?retryWrites=true&w=majority";
mongoose.connect(url, function (error) {
  if (error) throw error;
  console.log("Successfully connnected");
});

const { appendFile } = require("fs");
app.use(cors());

var routes = require("./routes/contactRoutes");
routes(app);

app.listen(port);
console.log("Contact started on : " + port);
