var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, notes) {
            res.json(JSON.parse(notes));
        });
    });

    app.post("/api/notes", function (req, res) {
        console.log(req.body);
        const newNote = req.body;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, noteStr) {

            const notes = JSON.parse(noteStr)
            newNote.id = uuidv4();
            notes.push(newNote);
            console.log(notes);
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
                res.json(true);
            });
        });
    })

    app.delete("/api/notes/:id", function (req, res) {
        const deleteNote = req.params.id;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, noteStr) {
            const notes = JSON.parse(noteStr);
            for (let i = 0; i < notes.length; i++) {
                let note = notes[i];
                if (note.id === deleteNote) {
                    notes.splice(i, 1);
                };
            };
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
                res.json(true);
            });
        });

    });
}

