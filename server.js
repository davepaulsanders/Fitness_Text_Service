require("dotenv").config();
const express = require("express");
const { MessagingResponse } = require("twilio").twiml;

const app = express();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+19123257761",
    to: "+16095294847",
  })
  .then((message) => console.log(message.sid));

app.get("/response", (req, res) => {
  // This logs the message that was sent!  We want to be able to get this to the account holders phone number!
  // In a local environment, ngrok needs to be running to send replies.  The ngrok forwarding tunnel has to be
  // configured in the twilio console

  console.log(req.query.Body);
  const twiml = new MessagingResponse();

  const message = twiml.message();
  message.body("The Robots are coming! Head for the hills!");
  message.media(
    "https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg"
  );

  res.type("text/xml").send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
