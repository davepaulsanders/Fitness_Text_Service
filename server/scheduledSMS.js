const cron = require("node-cron");
const dailyMessage = require("./dailyMessage");
const Client = require("./models/Client");
const Message = require("./models/Message");

exports.initScheduledSMS = () => {
  const scheduledSMS = cron.schedule("*/1 * * * *", async () => {
    const clients = await Client.find({});
    // messages sorted by which day it is supposed to be sent
    const messages = await Message.find({}).sort({ messageDay: 1 });
    console.log("sending daily messages...");

    try {
      clients.forEach((client) => {
        // send specific daily message to clients
        dailyMessage(client, messages);
      });
      res.send("messages sent!");
    } catch (err) {
      console.log(err);
    }
  });

  scheduledSMS.start();
};
