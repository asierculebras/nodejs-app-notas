const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();



router.get("/users/signin", (req, res) => {
    res.render('users/signin');
});

router.get("/users/signup", (req, res) => {
    res.render('users/signup');
});

//exporto el ficehro.
module.exports = router;