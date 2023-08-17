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
            console.error(e);
            res.sendStatus(500);
        });
});

// Index
router.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.find();
        res.send(foundBooks);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
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
        res.sendStatus(500);
    }
})
// update 
router.put('/:id', async (req, res)=>{
    try{
        await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.sendStatus(201);
    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
});
//Destroy
router.delete('/:id', async (req, res)=>{
    try{
        await Book.findByIdAndDelete(req.params.id, { new: true });
        res.sendStatus(201);
    } catch(e){
        console.error(e);
        res.sendStatus(500);
    }
});

module.exports = router;