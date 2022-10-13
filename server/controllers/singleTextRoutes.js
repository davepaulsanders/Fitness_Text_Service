const router = require("express").Router();
const singleText = require("../singleText");
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  const { message, selectedGroup } = req.body;
  selectedGroup.forEach((client) => {
    singleText(message, client.phoneNumber);
  });
});

module.exports = router;
