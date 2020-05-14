const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();



router.get("/users/signin", (req, res) => {
    res.send('Ingresando en la app')
});

router.get("/users/signup", (req, res) => {
    res.send('registrate en la app')
});

//exporto el ficehro.
module.exports = router;