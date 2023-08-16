const express = require('express');
require('dotenv').config();
const cors = require('cors');
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose')

app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
});

app.get('/', (req,res) =>{
    res.send('hello world');
});
const booksController =require('./controllers/booksController');
app.use('/books', booksController);

app.get('*', (req, res)=>{
    res.send('error 404. route doesn\'t exist');
});

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port: ${process.env.PORT}`);
});