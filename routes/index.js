const router = require("express").Router();
const bookAPI = require("./book.js");


// API routes
router.use("/books", bookAPI);

module.exports = router;