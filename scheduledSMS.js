const cron = require("node-cron");

exports.initScheduledSMS = () => {
    const scheduledSMS = CronJob.schedule("* 9 * * 0-7", () => {
      // SMS logic will go here
    });
  
    scheduledSMS.start();
  }