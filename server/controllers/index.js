const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const dailyTextRoutes = require("./dailyTextRoutes");

router.use("/api", apiRoutes);
router.use("/dailytext", dailyTextRoutes);

module.exports = router;
