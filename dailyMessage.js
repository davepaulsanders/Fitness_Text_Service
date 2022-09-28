require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);

module.exports = function (client, messages) {
  const { phoneNumber, daysElapsed, firstName } = client;

  console.log(phoneNumber);
  console.log(messages[daysElapsed - 1]);
  if (messages[daysElapsed - 1]) {
    twilioClient.messages
      .create({
        body: messages[daysElapsed - 1].messageText,
        from: "+19123257761",
        to: `+1${phoneNumber}`,
      })
      .then((message) => console.log(message.sid));
  }
};
