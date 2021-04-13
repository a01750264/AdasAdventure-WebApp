const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Carrera = sequelize.define('carrera', {
    'id':{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    'carrera':{
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = Carrera;