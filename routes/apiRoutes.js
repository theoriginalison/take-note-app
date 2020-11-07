// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// DEPENDENCY
var fs = require("fs");
var path = require("path");

// ROUTING
module.exports = function (app) {

    // API GET REQUESTS

    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function (notes) {
            res.json(notes);
        });
    });

    // API POST REQUEST

    //think of a way to create an ID for the notes, since there's no ID for them, bc you need that for the delete route, like on Line 5; will need to read the file to see what the latest ID is an increment it by 1 (using ++ or +=1); will use lines 38, read it, increment ID, and then respond back, using res.json


    //then create the delete route, which you'll need the ID for
}

