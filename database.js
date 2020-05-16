//módulo qwue requiere mongoose para conectarse a la base de datos
//para inicializar la base de datos tengo que hacer mongod (en Windows) y 
// sudo service mongod start en linux.
const mongoose = require("mongoose");

//configuraciones para poder crear l base de datos y usar lo datos y que no de muchos datos.
// se pone mongodb:// para el protocolo 
//localhost por que está inicializada en mi ps en localhost
//y por último / el nombre que le quiero dar a la base de datos
//o si no coje la local, pone otra almacenada en una variable, que será para el despliegue de Heroku
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/notes-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  //le meto una promesa que cuando se conecte a la base, que lande un mensaje y si no que lance el error
  .then(db => {
    if (!process.env.MONGODB_URI)
    console.log("DB is now connected to mongodb://localhost/notes-db-app" )
    else{
      console.log("DB is now connected to " ,process.env.MONGODB_URI )
    }
  })
  .catch(err => console.error(err));