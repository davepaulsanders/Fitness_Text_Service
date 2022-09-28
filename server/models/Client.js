const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  firstName: {
    type: "String",
    required: "true",
  },
  lastName: {
    type: "String",
    required: "true",
  },
  email: {
    type: "String",
    required: "true",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email address",
    ],
    unique: true,
  },
  phoneNumber: {
    type: "String",
    required: "true",
    unique: true,
  },
  weightLossGoals: {
    type: "String",
    required: "true",
  },
  daysElapsed: {
    type: "Number",
    required: "true",
    default: 1,
  },
  spendTotal: {
    type: "Number",
    required: "true",
    default: 0,
  },
});

const Client = model("Client", clientSchema);

module.exports = Client;