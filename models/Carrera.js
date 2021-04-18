const Sequelize = require('sequelize');

const Carrera = (sequelize)=>{
    sequelize.define('carrera', {
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
    })
}

module.exports = Carrera;