const express = require('express'); //requiero el modulo express
const app = express(); //tomo la ejecucion de express()

app.listen(3030,()=>console.log("El servidor esta funcionando en: http://localhost:3030/")) //levantamos el servidor

const rutaHome = require('./routes/home'); //requiero el modulo main
const rutaSucursales = require('./routes/sucursales');
const rutaMarcas = require('./routes/marcas');
const rutaAutos = require('./routes/autos');

app.use('/',rutaHome);
app.use('/sucursales',rutaSucursales);
app.use('/marcas',rutaMarcas);
app.use('/autos',rutaAutos);
// app.use('*',rutaHome);