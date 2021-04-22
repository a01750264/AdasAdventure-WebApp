const Partida = require('../utils/db').models.partida;
const Jugador = require('../utils/db').models.jugador;

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

exports.postAgregarPartida = (request, response)=>{
    Jugador.findAll({
        where: {
            user_name: request.body.jugador
        }
    }).then(jugadores=>{
        jugadores.forEach(jugador=>{
            Partida.create({
                puntuacion: request.body.puntuacion,
                progreso: request.body.nivel,
                tiempo_jugado: request.body.playTime,
                jugadorId: jugador.id,
                comptenciumId: 1
            })
        })
    })
}