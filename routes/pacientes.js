const express = require("express");

//un objeto que me facilita la creación de rutas
const router = express.Router();

// me traigo el modelo de datos de mongoose
const Pacientes = require('../models/Pacientes')


// Get de añadir una nuevo paciente 
router.get("/pacientes/add", (req, res) => {
    res.render('pacientes/new-pacientes');
});

//ruta para capturar el POST del form del paciente y lepongo la parabra async por que dentro hay cosas que pueden llevar datos y quiero que se ejecute otras cosas mientras.
//esas tareas asincronas se realizan.
router.post("/pacientes/new-pacientes", async (req, res) =>{0
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
        res.render( 'pacientes/new-pacientes',{
            errors,nombre,apellidos,telefono,description,nombreMedida,hora
        })
    } else{
        //creo un objeto newPacientes con un schema de datos mongoose Pacientes con los datos antes capturados. 
        const newPacientes = new Pacientes({nombre, apellidos, telefono, description, nombreMedida, hora})
        //guardo los datos en la base de datos. como esto es asincrono le pongo await
        await newPacientes.save().then (
            console.log('Nuevo Paciente guardado, el paciente es: ',newPacientes)
            )
        res.redirect('/pacientes')
    }
})

// Get All Pacientes
router.get("/pacientes", async (req, res) => {
    const pacientes = await Pacientes.find().lean()
    console.log('LOS PACIETES SON',pacientes)
    res.render('pacientes/todos-pacientes', {pacientes})
});

//exporto el ficehro.
module.exports = router; 