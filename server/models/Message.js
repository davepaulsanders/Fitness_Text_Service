const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  messageText: {
    type: "String",
    required: true,
  },
  messageDay: {
    type: "Number",
  },
  mediaLink: {
    type: "String",
  },
});

const Message = model("Message", messageSchema);

module.exports = Message;
