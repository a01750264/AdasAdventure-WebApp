const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jugadorRoutes = require('./routes/Jugador');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/jugador', jugadorRoutes)

const puerto = 8080;

sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa");
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto 8080"));
    })
    .catch(err=>console.log(err));