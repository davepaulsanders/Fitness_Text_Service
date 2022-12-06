// automated scheduling npm package
const cron = require("node-cron");

// models
const Client = require("./models/Client");

exports.incrementClient = () => {
  const incrementClientDay = cron.schedule("0 0 * * *", async () => {
    await Client.updateMany({}, { $inc: { daysElapsed: 1 } });
  });

  incrementClientDay.start();
  console.log("Incrementing clients daysElapsed service started...");
};
