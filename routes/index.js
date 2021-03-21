const router = require("express").Router();
const bookAPI = require("./book.js");


// API routes
router.use("/api", bookAPI);

module.exports = router;