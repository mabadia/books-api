const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const seedData = require('../seeders/book-seed');

// Seed
router.get('data/seed', (req, res) => {
    Book.inserMany(seedData)
        .then(createdBooks => {
            res.sendStatus(200);
        })
        .catch(e => {
            console.error(e)
        });
});

// Index
router.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.find();
        res.send(foundBooks);
    } catch (e) {
        console.error(e);
    }
});
//Create
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        await Book.create(req.body);
        res.send(200)
    } catch (e) {
        console.error(e);
    }
})

module.exports = router;