const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Competencia = sequelize.define('competencia', {
    'id':{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    'competencia':{
        type: Sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = Competencia;