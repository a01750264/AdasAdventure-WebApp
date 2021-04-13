const Sequelize = require('sequelize');
const sequelize = new Sequelize('proyectoWeb','sa','Password1234$',{
    dialect: 'mssql',
    dialectOptions:{
        options:{
            useUTC: false,
            dateFirst: 1
        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

module.exports = sequelize;