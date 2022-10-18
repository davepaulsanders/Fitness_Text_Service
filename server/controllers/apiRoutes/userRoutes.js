const router = require("express").Router();
const User = require("../../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  const payload = {
    user_id: user._id,
    username: user.username
  }
  // create token and send back
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  res.send({ userToken: `Bearer ${token}` });
});
module.exports = router;
