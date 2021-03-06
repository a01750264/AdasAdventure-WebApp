const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jugadorRoutes = require('./routes/Jugador');
const devRoutes = require('./routes/dev');
const steamRoutes = require('./routes/usuarioSteam');
const partidaRoutes = require('./routes/partida');
const app = express();
const sequelize = require('./utils/db');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/jugador', jugadorRoutes);
app.use('/dev', devRoutes);
app.use('/steam', steamRoutes);
app.use('/partida', partidaRoutes);

app.engine('html',require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/home', (request, response)=>{
    response.sendFile(path.join(__dirname, '.', 'views', 'home.html'));
});

app.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname, '.', 'views', 'iniciarSesion.html'))
});

const puerto = 8080;

sequelize.sync({force:false})
    .then(resultado=>{
        console.log("Conexión exitosa");
        //Lanza el servidor para escuchar peticiones
        app.listen(puerto, ()=>console.log("Servidor en línea en el puerto", puerto));
    })
    .catch(err=>console.log(err));