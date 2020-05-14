const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();

router.get("/", (req, res) => {
    res.send('INDEx');
});

router.get("/about", (req, res) => {
    res.send('ABOUT');
});

//exporto el ficehro.
module.exports = router;