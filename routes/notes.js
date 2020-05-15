const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();


// Get add a Notes
router.get("/notes/add", (req, res) => {
    res.render('notes/new-notes');
});

// Get All Notes
router.get("/notes", (req, res) => {
    res.send('NOTES');
});

//exporto el ficehro.
module.exports = router;