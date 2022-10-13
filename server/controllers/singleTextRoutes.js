const router = require("express").Router();
const singleText = require("../singleText");
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  const { message, selectedGroup } = req.body;
  try {
    const messageSent = await Message.create(message);
    res.send(messageSent);
  } catch (err) {
    res.send(err);
  }

  // add message to database

  // send message to client
  // selectedGroup.forEach((client) => {
  //   singleText(message, client.phoneNumber);
  // });
});

module.exports = router;
