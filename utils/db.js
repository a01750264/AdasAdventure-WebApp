const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
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

const modelDefiners = [
    require('../models/Jugador'),
    require('../models/Carrera'),
    require('../models/Competencia'),
    require('../models/Partida'),
];

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
};

applyRelations(sequelize);

module.exports = sequelize;