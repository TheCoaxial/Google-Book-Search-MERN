const Book = require("../models");

// Define controller Methods

module.exports = {
    findAll : function(req, res) {
        Book.find(req.query)
          .sort({ title: 1 })
          .then(bookModel => res.json(bookModel))
          .catch(err => res.status(422).json(err));
    },

    findById : function(req, res) {
        Book.findById(req.params.id)
          .then(bookModel => res.json(bookModel))
          .catch(err => res.status(422).json(err));
    },

    store : function(req,res) {
        Book.create(req.body)
          .then(bookModel => res.json(bookModel))
          .catch(err => res.status(422).json(err));
    }, 

    delete : function(req,res) {
        Book.findById({ _id: req.params.id })
          .then(bookModel => bookModel.remove())
          .then(bookModel => res.json(bookModel))
          .catch(err => res.status(422).json(err));
    }
};