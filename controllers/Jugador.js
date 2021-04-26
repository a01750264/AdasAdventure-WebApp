const Jugador = require('../utils/db').models.jugador;
const Carrera = require('../utils/db').models.carrera;
const path = require('path');

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
                error:request.query.error,
                sesion:"Autorizado",
                hora:"14:00"
            });
        })
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

exports.getIniciarSesion = (request, response)=>{
    response.render('../views/iniciarSesionJugador.html',{
            error:request.query.error});
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
    }).then(resultado=>{
        console.log("Jugador registrado")
        response.redirect('/home')
    }).catch(err=>{
        console.log(err)
        response.redirect('/jugador/agregarJugador?error=1')
    });
};

exports.postIniciarSesion = (request, response)=>{
    console.log(request.body);

    Jugador.findAll({
        where: {
            user_name: request.body.usuarioUsuario,
            password: request.body.passwordUsuario
        }
    }).then(registros=>{
        var data = [];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        console.log(data);
        if (registros.length == 0){
            response.send("Revisa que tus datos sean correctos")
        } else {
            response.send("Bienvenid@")
        }
    })
};

exports.postIniciarSesionApp = (request, response)=>{
    console.log(request.body);

    Jugador.findAll({
        where: {
            user_name: request.body.usuarioUsuario,
            password: request.body.passwordUsuario
        }
    }).then(registros=>{
        var data = [];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        console.log(data);
        if (registros.length == 0){
            response.redirect("/jugador/iniciarSesion?error=1")
        } else {
            response.redirect('/home')
        }
    })
};