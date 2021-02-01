const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// endpoint "/api/books" to find all books
router.route("/").get(bookController.findAll).post(bookController.create);
