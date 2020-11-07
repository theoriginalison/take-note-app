// DEPENDENCIES
var path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");

// ROUTING
module.exports = function (app) {

    // GET REQUESTS
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}