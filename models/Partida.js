const Sequelize = require('sequelize');

const Partida = (sequelize)=>{
    sequelize.define('partida',{
        'id': {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        'puntuacion':{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        'progreso':{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        'tiempo_jugado':{
            type: Sequelize.FLOAT,
            allowNull: true
        }
    })
}

module.exports = Partida;