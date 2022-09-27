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

app.post("/welcome/sms/reply/", (req, res) => {
  console.log(req);
  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.type("text/xml").send(twiml.toString());
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
