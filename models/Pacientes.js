const mongoose = require('mongoose')
const{ Schema } = mongoose;


//creo el modelo de datos que pa a tener Pacientes
const PacientesSchema = new Schema(
    {
      nombre: { type: String, required: true },
      apellidos: {type: String, required: true},
      hora: String, 
      telefono: Number, 
      description: String,
      nombreMedida: String,
      hora:{type: String, required: true},
      date: {type: Date, default: Date.now }
    })

  //se podrían poner tambien una calve de tipo objeto {} o array []

  // exporto, un modelo de datos llmadao Pacientes con el squema de PacientesSchema,
  // para que lo puedan usar en otros .js
  module.exports = mongoose.model("Pacientes", PacientesSchema);