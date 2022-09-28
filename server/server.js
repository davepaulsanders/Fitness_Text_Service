const express = require("express");
const { MessagingResponse } = require("twilio").twiml;
const db = require("./config/connection");
const app = express();
const Client = require("./models/Client");
const Message = require("./models/Message");
const controllers = require("./controllers");



app.use(controllers)


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
  try {
    // dropping in case schemas have changed
    await db.dropCollection("clients");
    await db.dropCollection("messages");
    await Client.create({
      firstName: "Dave",
      lastName: "Sanders",
      email: "davepaulsanders@gmail.com",
      phoneNumber: "6095294847",
      weightLossGoals: "15 pounds",
    });

    await Message.create({
      messageText: "This is the first day message",
      messageDay: 1,
    });
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Express server listening on port 3000");
  });
});
