const Partida = require('../utils/db').models.partida;
const Jugador = require('../utils/db').models.jugador;
const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

exports.getPartidas = (request, response)=>{
    Partida.findAll()
    .then(partidas=>{
        var data = [];
        partidas.forEach(partida => {
            data.push(partida.dataValues);
        });
        console.log(data);
    })
}

exports.getTiempoTotal = (request, response)=>{
    Jugador.findAll({
        where: {
            user_name: request.params.usuario
        }
    }).then(jugadores=>{
        jugadores.forEach(jugador=>{
            sequelize.query('SELECT SUM(tiempo_jugado) from partida where jugadorId=' + jugador.id, {
                type: Sequelize.QueryTypes.SELECT
            }).then(resultado=>{
                console.log(resultado);
                response.send(resultado);
            }).catch(err=>console.log(err));
        })
    }).catch(err=>console.log(err));
}

exports.postAgregarPartida = (request, response)=>{
    Jugador.findAll({
        where: {
            user_name: request.body.usuario
        }
    }).then(jugadores=>{
        jugadores.forEach(jugador=>{
            Partida.create({
                puntuacion: request.body.puntuacion,
                progreso: request.body.progreso,
                tiempo_jugado: request.body.tiempo,
                jugadorId: jugador.id,
                competenciumId: request.body.competencia
            })
        })
        response.send("Partida creada correctamente");
    }).catch(err=>{
        console.log(err);
        response.send("f");
    })
}