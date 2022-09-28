const router = require("express").Router();
const Message = require("../../models/Message");


// get all messages
router.get("/", async (req, res) => {
    try {
      const messages = await Message.find({});
      res.send(messages);
    } catch (err) {
      console.log(err);
    }
  
  });
module.exports = router;