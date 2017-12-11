'use strict';
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const User = require('./models/users');

// connect to mongodb
//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
//    .then(x => console.log('Connected to db: ' + x.name))
//    .catch(err => console.log(err));

app.use('/app', express.static(path.join(__dirname + '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Run server
const port = process.env.PORT || 4430;
app.listen(port, () => console.log('Server listening on: ' + port));
