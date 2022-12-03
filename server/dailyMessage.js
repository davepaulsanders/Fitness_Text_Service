const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/etc/secrets/.env") });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);
const addName = require("./addName");
module.exports = function (client, messages) {
  const { phoneNumber, daysElapsed, firstName } = client;

  // if there is a message for the day the client is currently on
  if (messages[daysElapsed - 1]) {
    const textNameCheck = addName(
      client,
      messages[daysElapsed - 1].messageText
    );
    // send them that particular message
    twilioClient.messages
      .create({
        body: textNameCheck,
        from: "+19123257761",
        to: `+1${phoneNumber}`,
      })
      .then((message) => console.log(message.sid));
  }
};
