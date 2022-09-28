const router = require("express").Router();
const clientRoutes = require("./clientRoutes");
const messageRoutes = require("./messageRoutes");

// all routes for CRUD operations on collections
router.use("/clients", clientRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
