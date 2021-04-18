const Jugador = require('../utils/db').models.jugador;
const Carrera = require('../utils/db').models.carrera;
const path = require('path');

exports.getHome = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
};

// exports.getAgregarJugador = (request, response)=>{
//     response.sendFile(path.join(__dirname, '..', 'views', "agregarJugador.html"));
// };

exports.getAgregarJugador = (request, response)=>{
    Carrera.findAll()
        .then(carreras=>{
            var data = [];
            carreras.forEach(carrera=>{
                data.push(carrera.dataValues);
            });
            console.log(data);
            response.render('../views/agregarJugador.html',{
                carreras:data,
                sesion:"Autorizado",
                hora:"14:00"
            });
        })
};

exports.getConfirmacion = (request, response)=>{
    response.redirect('/jugador/tablero')
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
            response.render('../views/tableroJugadores.html',{
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
        carreraId: request.body.jugadorCarrera
    }).then(resultado=>console.log("Jugador registrado"))
      .catch(err=>console.log(err));

    response.redirect('/jugador/confirmacion/');
};