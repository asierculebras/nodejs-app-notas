const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();

router.get("/users", (req, res) => {
    res.send('USER');
});

//exporto el ficehro.
module.exports = router;