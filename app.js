const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req, res, next) => {
    return res.json({"hamada":"hamada"})
});

const password = 'pnc123456789';

const MONGO_URI = "mongodb+srv://PNC-EG:pnc123456789@cluster0.9ndqb3n.mongodb.net/pnc-test"

mongoose
    .connect(MONGO_URI)
    .then(result => {
        console.log('Connect...');
        app.listen(8000);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = app
