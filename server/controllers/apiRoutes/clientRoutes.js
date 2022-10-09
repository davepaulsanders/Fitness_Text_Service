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

router.put("/", async (req, res) => {
  try {
    const client = await Client.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    res.send(client);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.send(client);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/", async (req, res) => {
  try {
    const client = await Client.deleteOne({ _id: req.body.id });

    res.send(client);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
