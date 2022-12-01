const express = require("express");
const { MessagingResponse } = require("twilio").twiml;
const db = require("./config/connection");
const controllers = require("./controllers");
const cors = require("cors");
const passport = require("passport");
const { incrementClient } = require("./incrementClientDay");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(controllers);
require("./middleware/passportJWT");
app.use(passport.initialize());
app.get("/response", (req, res) => {
  // This logs the message that was sent!  We want to be able to get this to the account holders phone number!
  // In a local environment, ngrok needs to be running to send replies.  The ngrok forwarding tunnel has to be
  // configured in the twilio console
  // localhost 4040 logs requests when ngrok is running
  console.log(req.query.Body);

  const twiml = new MessagingResponse();
  const message = twiml.message();
  message.body("We got your message! Expect a text back from 555-555-5555");

  res.type("text/xml").send(twiml.toString());
});

db.once("open", async () => {
  // start scheduled SMS process

  //scheduledSMS.initScheduledSMS();
  incrementClient();
  app.listen(3001, () => {
    console.log("Express server listening on port 3000");
  });
});
