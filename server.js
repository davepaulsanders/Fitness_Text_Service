require("dotenv").config();
const express = require("express");
const { MessagingResponse } = require("twilio").twiml;
const db = require("./config/connection");
const app = express();
const Client = require("./models/Client");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Thanks for joining!",
    from: "+19123257761",
    to: "+16095294847",
  })
  .then((message) => console.log(message.sid));

app.get("/response", (req, res) => {
  // This logs the message that was sent!  We want to be able to get this to the account holders phone number!
  // In a local environment, ngrok needs to be running to send replies.  The ngrok forwarding tunnel has to be
  // configured in the twilio console
  //localhost 4040 logs requests when ngrok is running
  console.log(req.query.Body);
  const twiml = new MessagingResponse();

  const message = twiml.message();
  message.body("We got your message! Expect a text back from 555-555-5555");

  res.type("text/xml").send(twiml.toString());
});
db.once("open", async () => {
  try {
    await Client.create({
      firstName: "Dave",
      lastName: "Sanders",
      email: "davepaulsanders@gmail.com",
      phoneNumber: "609-529-4847",
      weightLossGoals: "15 pounds",
    });
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Express server listening on port 3000");
  });
});
