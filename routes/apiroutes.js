const router = require('express').Router();
const { notes } = require("../db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    console.log(notes);
    res.json(results);

});

module.exports = router;