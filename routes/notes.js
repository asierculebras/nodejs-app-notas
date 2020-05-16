const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();


// Get de añadir una nuecva Notes
router.get("/notes/add", (req, res) => {
    res.render('notes/new-notes');
});

//ruta para capturar el POST de la nota
router.post("/notes/new-note", (req, res) =>{0
    console.log(req.body)
    //meto en una constante cada uno de los valores que el form me devuelve.
    const {nombre, apellidos, telefono, description, nombreMedida, hora} = req.body
    //creo una variable con lo errores que puede haber
    const errors = []
    if (!nombre) {
        errors.push({text: 'Por favor pon el nombre del Paciente.'})
    }
    if (!apellidos){
        errors.push({text: 'Por favor completa sus Apellidos.'})
    }
    if (!hora){
        errors.push({text: 'Por favor añade una hora a la medición, en caso contrario no funcionará.'})
    }
    // si se detecta un error vuelves a la pag de formulario pero con los errores y los datos.
    if (errors.length > 0){
        res.render( 'notes/new-notes',{
            errors,nombre,apellidos,telefono,description,nombreMedida,hora
        })
    } else{
    res.send('ok')
    }
})

// Get All Notes
router.get("/notes", (req, res) => {
    res.send('NOTES');
});

//exporto el ficehro.
module.exports = router;