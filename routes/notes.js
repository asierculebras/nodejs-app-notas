const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();

// me traigo el modelo de datos de mongoose
const Pacientes = require('../models/Pacientes')


// Get de añadir una nuecva Notes
router.get("/notes/add", (req, res) => {
    res.render('notes/new-notes');
});

//ruta para capturar el POST de la nota y lepongo la parabra async por que dentro hay cosas que pueden llevar datos y quiero que se ejecute otras cosas mientras.
//esas tareas asincronas se realizan.
router.post("/notes/new-note", async (req, res) =>{0
    console.log('lo que se ha enviado es ',req.body)
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
        //creo un objeto newNotes con un schema de datos mongoose Pacientes con los datos antes capturados. 
        const newNote = new Pacientes({nombre, apellidos, telefono, description, nombreMedida, hora})
        console.log('el nuevo objeto creado enla base de datos es: ',newNote)
        //guardo los datos en la base de datos. como esto es asincrono le pongo await
        await newNote.save().then (
            console.log('paciente guardado')
            )
        res.redirect('/notes')
    }
})

// Get All Notes
router.get("/notes", (req, res) => {
    res.send('Pacientes de la base de datos (queda por cambiar la el nombre de la ruta)');
});

//exporto el ficehro.
module.exports = router;