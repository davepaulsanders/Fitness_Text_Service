const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  username: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;

  next(user);
  // Store hash in the database

  //   bcrypt.genSalt(10, (err, salt) => {
  //       const hash = bcrypt.hash(user.password, salt, function (err, hash) {
  // });
  // });
});
const User = model("User", userSchema);
module.exports = User;
