import axios from "axios";


const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    // Get all books
    getBooks: function() {
        return axios.get("/books");
    },

    // Get the book with the given id
    getCertainBook: function(id) {
        return axios.get("/books/" + id);
    },

    // Deletes Specific book 
    deleteBook: function(id) {
        return axios.delete("/books/" + id);
    },

    // Save book
    saveBook: function(BookData) {
        return axios.post("/books", BookData);
    },

    // search Google books
    search: function(title) {
        return axios.get(BASEURL + title); 
    }
};