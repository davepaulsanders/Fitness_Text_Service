const router = require("express").Router();
const Client = require("../models/Client");
const Message = require("../models/Message");
const dailyMessage = require("../dailyMessage");

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find({});
    const messages = await Message.find({});

    clients.forEach((client) => {
      dailyMessage(client, messages);
    });

    res.send("Success");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
