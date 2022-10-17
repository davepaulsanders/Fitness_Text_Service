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
// get all messages
router.put("/", async (req, res) => {
  try {
    const message = await Message.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true, runValidators: true }
    );

    res.send(message)
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
