'use strict';
require('dotenv').config();
const fs = require('fs');

const DATABASE_PATH = process.env.SERVER_FOLDER + '/databases/database.json';

let database;

function fulfillDatabase() {
    if (!database) {
        database = JSON.parse(fs.readFileSync(DATABASE_PATH));
    }
    return database;
}

function getCategories() {
    fulfillDatabase();
    return database.categories;
}

module.exports = {
    get: fulfillDatabase,
    getCategories
}
