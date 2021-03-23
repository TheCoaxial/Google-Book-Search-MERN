const router = require("express").Router();
const bookController = require("../controllers/bookController");

// /books
router
    .route("/")
    .get(bookController.findAll)
    .post(bookController.store);

// /books/:id
router
    .route("/:id")
    .get(bookController.findById)
    .delete(bookController.delete);

module.exports = router;