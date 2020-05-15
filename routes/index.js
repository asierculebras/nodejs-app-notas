const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();


router.get("/", (req, res) => {
    //envío como respuesta el fichero index.hbs (y no hace falta poner la extensión .hbs por uqe lo he configurado en app.js)
    res.render('index');
});

router.get("/about", (req, res) => {
    res.render('about');
});

//exporto el ficehro.
module.exports = router;