const express = require('express');
const path = require('path');
//motor de plantillas de express
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
//guardar los datos de los usuarios en una constante.
const session = require('express-session');




/* ####   INIZIALIZATIONS   ####*/ 
const app = express();
require('./database');






/* ####   SETTINGS   ####*/ 

    // añado a app el servidor, 3000 si el navegador nom eda uno por defecto.
app.set('port', process.env.PORT || 3000);
    //le digo a app donde está la carpeta views.
app.set('views', path.join(__dirname, 'views'));
    //de digo a app la configuración del motor de  plantillas que vamos a usar en nuestra aplicación.
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  }));
    // le digo a app que motor de voy a usar en este caso el que he defiino antes en engine -> hbs
app.set('view engine', '.hbs');
    



/* ####   MIDDLEWARES   ####*/ 

    //sirve para poder recibir inromación de los formularios.
app.use(express.urlencoded({extended: false}));
    //para que los formularios puedan enviar mas cosas qeu no sean GET y POST si no tambn mas cosas.
app.use(methodOverride('_method'));
    //Las propiedades de la sesión del usuario con la clave de encripcación secret.
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    }));





/* ####   ROUTES   ####*/ 

    //con esto le hago saber a mi server donde están las rutas de mi aplicación. y los requiero.
app.use(require( path.join(__dirname, 'routes/index')));
app.use(require(path.join(__dirname, 'routes/users')));
app.use(require(path.join(__dirname, 'routes/notes')));





/* ####   STATIC FILES   ####*/ 
//le digo donde estan los resursos del servidor
app.use(express.static(path.join(__dirname, 'public')));



/* ####   SERVER LISTENER   ####*/ 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});