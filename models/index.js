const Book = require("./book");

Book = require("./book");

module.exports = Book;

// Other than being able to just require the folder /models instead of /models/book.js,
// since I only have a single model I don't think the index is strictly necessary
// But if I ever add more models this will be useful + better to stick with
// convention