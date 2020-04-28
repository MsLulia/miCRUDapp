const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//importar rutas
const customerRoutes = require('./routes/customer');

//configurar express, puerto, motor de plantilla y vistas
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //motor de plantillas
app.set('views', path.join(__dirname, 'views')); //carpeta de vistas

//funciones antes de peticiones
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3334963',
  password: 'lRxedSAaBM',
  database: 'sql3334963',
  port: '3306'
}, 'single'));
//rutas
app.use('/', customerRoutes);
//static files
app.use(express.static(path.join(__dirname, 'public')));
//inicio server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
