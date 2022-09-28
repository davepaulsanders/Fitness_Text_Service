const router = require("express").Router();
const Client = require("../models/Client");
const Message = require("../models/Message");
const dailyMessage = require("../dailyMessage");

router.get("/", async (req, res) => {
  const clients = await Client.find({});
  const messages = await Message.find({});
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
