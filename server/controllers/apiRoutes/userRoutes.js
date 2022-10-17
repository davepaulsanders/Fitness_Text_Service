const router = require("express").Router();
const User = require("../../models/User");
router.post("/", async (req, res) => {
  
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
