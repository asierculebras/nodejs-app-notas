//módulo qwue requiere mongoose
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  //le metouna promesa que cuando se conecte a la base, que lande un mensaje y si no que lance el error
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));