const Sequelize = require('sequelize');

const UsuarioSteam = (sequelize)=>{
    sequelize.define('usuariosteam',{
        'id': {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        'nombre':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'apellidoP':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'apellidoM':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'email':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
        'password':{
            type: Sequelize.STRING(50),
            allowNull: false
        },
    })
}

module.exports = UsuarioSteam;