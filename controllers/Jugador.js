const Jugador = require('../models/Jugador');
const path = require('path');

exports.getHome = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
};

exports.getAgregarJugador = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', "formulario.html"));
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
}

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