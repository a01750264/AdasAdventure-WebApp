const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (request, response)=>{
    response.sendFile(path.join(__dirname, 'views'))
});

const puerto = 8080;

app.listen(puerto, ()=>console.log("Servidor en línea en el puerto:", puerto))