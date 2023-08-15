const express = require('express');
require('dotenv').config();
const cors = require('cors');
const methodOverride = require('method-override');
const app = express();

app.use(cors());

app.get('/', (req,res) =>{
    res.send('hello world');
});

app.get('*', (req, res)=>{
    res.send('error 404. route doesn\'t exist');
});

app.listen(process.env.PORT, ()=>{
    console.log(`app listening on port: ${process.env.PORT}`);
});