const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Jugador = sequelize.define('jugador', {
    'id':{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    'genero':{
        type: Sequelize.CHAR,
        allowNull: true,
    },
    'user_name':{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    'nombre':{
        type: Sequelize.STRING(40),
        allowNull: false
    },
    'apellidoP':{
        type: Sequelize.STRING(15),
        allowNull: false
    },
    'apellidoM':{
        type: Sequelize.STRING(15),
        allowNull: false
    },
    'fecha_nacimiento':{
        type: Sequelize.DATE,
        allowNull: false
    },
    'email':{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    'password':{
        type: Sequelize.STRING(15),
        allowNull: false
    },
    'escolaridad':{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    'carrera':{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Jugador;