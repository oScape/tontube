'use strict';
require('dotenv').config();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const BDD = require('./lib/wrapperDatabases').get();
const port = process.env.PORT || 4430;
const User = require('./models/users');

const app = express();

// connect to mongodb
//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
//    .then(x => console.log('Connected to db: ' + x.name))
//    .catch(err => console.log(err));

app.use('/app', express.static(path.join(__dirname + '/dist')));

app.get('/api/youtubers', (req, res) => {
    res.send(BDD.youtubers);
});

app.get('/api/categories', (req, res) => {
    res.send(BDD.categories);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Run server
module.exports =  app.listen(port, () => console.log('Server listening on: ' + port));
