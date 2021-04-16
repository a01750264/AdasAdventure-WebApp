const Jugador = require('../models/Jugador');
const path = require('path');

exports.getHome = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
};

exports.getAgregarJugador = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', "agregarJugador.html"));
};

exports.getConfirmacion = (request, response)=>{
    response.send("Datos guardados correctamente");
};

exports.getJugadores = (request, response)=>{
    Jugador.findAll()
    .then(jugadores=>{
        var data = [];
        jugadores.forEach(jugador=>{
            data.push(jugador.dataValues);
        });
        console.log(data);
    })
};

exports.getJugadores = (request,response)=>{
    Jugador.findAll()
        .then(registros=>{
            var data=[];
            registros.forEach(registro=>{
                data.push(registro.dataValues);
            });
            console.log(data);
            response.render('../views/tableroEJS.html',{
                personas:data,
                sesion:"Autorizado",
                hora:"14:00"
            });
        })   
};

exports.postAgregarJugador = (request, response)=>{
    console.log(request.body);

    Jugador.create({
        genero: request.body.jugadorGenero,
        user_name: request.body.jugadorUserName,
        nombre: request.body.jugadorNombre,
        apellidoP: request.body.jugadorApellidoP,
        apellidoM: request.body.jugadorApellidoM,
        fecha_nacimiento: request.body.jugadorFecha,
        email: request.body.jugadorEmail,
        password: request.body.jugadorPassword,
        escolaridad: request.body.jugadorEscolaridad,
        carrera: request.body.jugadorCarrera
    }).then(resultado=>console.log("Jugador registrado"))
      .catch(err=>console.log(err));

    response.redirect('/jugador/confirmacion');
};