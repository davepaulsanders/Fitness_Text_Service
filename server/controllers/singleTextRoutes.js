const router = require("express").Router();
const singleText = require("../singleText");
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  const { message, selectedGroup } = req.body;
  // add message to database
  try {
    const messageSent = await Message.create(message);

    if (messageSent) {
      //send message to client
      selectedGroup.forEach((client) => {
        singleText(message, client.phoneNumber);
      });
    }
    res.send(messageSent);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
