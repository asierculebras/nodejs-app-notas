const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();

router.get("/", (req, res) => {
    res.send('INDEx');
});

//exporto el ficehro.
module.exports = router;