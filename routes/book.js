const router = require("express").Router();
const bookController = require("../controllers/bookController");

// /api/books
router
    .route("/")
    .get(bookController.findAll)
    .post(bookController.store);

// /api/books/:id
router
    .route("/:id")
    .get(bookController.findById)
    .delete(bookController.delete);

module.exports = router;