const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            dbData = JSON.parse(data);
            res.send(dbData);
        });
    });
}