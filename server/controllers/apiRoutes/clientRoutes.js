const router = require("express").Router();
const Client = require("../../models/Client");

// get all clients
router.get("/", async (req, res) => {
  try {
    const clients = await Client.find({});
    res.send(clients);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
