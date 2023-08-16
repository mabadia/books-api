const mongoose = require('mongoose');

const { model, Schema } = mongoose;



const booksSchema = new Schema({
    id:Number,
    title: String,
    description: String,
    year: Number,
    quantity: String,
    imageURL: String,
});

const Book = model('Books', booksSchema)
module.exports = Book;