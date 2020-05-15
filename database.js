//módulo qwue requiere mongoose
const mongoose = require("mongoose");

//configuraciones para poder crear y usar lo datos y que no de muchos datos.
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  //le meto una promesa que cuando se conecte a la base, que lande un mensaje y si no que lance el error
  .then(db => console.log("DB is now connected"))
  .catch(err => console.error(err));