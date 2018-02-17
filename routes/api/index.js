const router = require("express").Router();
const feedRoute = require("./feeds");

// Book routes
router.use("/feeds", feedRoute);

module.exports = router;
