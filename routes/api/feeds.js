const router = require("express").Router();
const feedController = require("../../controllers/feedController");

// Matches with "/api/feed"
router.route("/")
  .get(feedController.findAll)
  .post(feedController.create);

// Matches with "/api/feed/:id"
router
  .route("/:id")
  .get(feedController.findById)
  .put(feedController.update)
  .delete(feedController.remove);

module.exports = router;
