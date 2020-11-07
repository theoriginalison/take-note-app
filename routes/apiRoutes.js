// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// DEPENDENCY
var fs = require("fs");
var path = require("path");
const { v4: uuidv4 } = require('uuid');

// ROUTING
module.exports = function (app) {

    // API GET REQUESTS

    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, notes) {
            res.json(JSON.parse(notes));
        });
    });

    // API POST REQUEST

    app.post("/api/notes", function (req, res) {
        //receive new note to save on the request body
        console.log(req.body);
        const newNote = req.body;
        //req.body needs to be added to the notes and resaved
        //notes is being read by the db.json and needs to be rewritten there
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (err, noteStr) {

            const notes = JSON.parse(noteStr)
            newNote.id = uuidv4();
            notes.push(newNote);
            console.log(notes);
            // res.json(newNote);
            //add it to the db.json file
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
                // notes.push(req.notes);
                res.json(true);
            });
        });

        //return note
        // res.json(notes); maybe here?
    })

    //think of a way to create an ID for the notes, since there's no ID for them, bc you need that for the delete route, like on Line 5; will need to read the file to see what the latest ID is an increment it by 1 (using ++ or +=1); will use lines 38, read it, increment ID, and then respond back, using res.json


    //then create the delete route, which you'll need the ID for
}

