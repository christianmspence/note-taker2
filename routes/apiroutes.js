const router = require('express').Router();
const { notes } = require("../db/db.json");
const { createNewNote } = require("../controllers/index");
const { v4: uuidv4 } = require('uuid');

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    console.log(notes);
    res.json(results);

});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;