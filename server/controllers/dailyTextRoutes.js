const router = require("express").Router();
const Client = require("../models/Client");
const Message = require("../models/Message");
const dailyMessage = require("../dailyMessage");

router.get("/", async (req, res) => {
  const clients = await Client.find({});
  // messages sorted by which day it is supposed to be sent
  const messages = await Message.find({}).sort({ messageDay: 1 });
  try {
    clients.forEach((client) => {
      // send specific daily message to clients
      dailyMessage(client, messages);
    });
    res.send("Messages sent!");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
