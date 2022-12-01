// automated scheduling npm package
const cron = require("node-cron");

// models
const Client = require("./models/Client");

exports.incrementClient = async () => {
  await Client.updateMany({}, { $inc: { daysElapsed: 1 } });
};
