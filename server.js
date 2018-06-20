const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

// MongoDB
var url = process.env.MONGOLAB_URL;
var db;

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err)
    db = database.db('crud-express-example')

    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

// Handlers


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})