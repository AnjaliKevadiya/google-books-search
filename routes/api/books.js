const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// endpoint "/api/books" to find all books
router.route("/").get(bookController.findAll).post(bookController.create);

// endpoint "/api/books/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
