const Sequelize = require('sequelize');

const Competencia = (sequelize)=>{
    sequelize.define('competencia', {
        'id':{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        'competencia':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'description':{
            type: Sequelize.STRING(500),
            allowNull: false
        }
    })
}

module.exports = Competencia;