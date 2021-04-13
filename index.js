const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jugadorRoutes = require('./routes/Jugador');
const devRoutes = require('./routes/dev');
const app = express();
const sequelize = require('./utils/db');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/jugador', jugadorRoutes);
app.use('/dev', devRoutes);

app.engine('html',require('ejs').renderFile);

app.set('view engine', 'ejs');

const puerto = 8080;

sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa");
        //Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(err=>console.log(err));