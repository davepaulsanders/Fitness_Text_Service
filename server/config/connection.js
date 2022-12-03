const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/etc/secrets/.env") });
// options object no longer required, its default is what we want
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-text");
module.exports = mongoose.connection;
