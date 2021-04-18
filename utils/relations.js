function applyRelations(sequelize){
    console.log(sequelize.models);
    const Jugador = sequelize.models.jugador;
    const Competencia = sequelize.models.competencia;
    const Carrera = sequelize.models.carrera;
    const Partida = sequelize.models.partida;

    Partida.belongsTo(Jugador);
    Partida.belongsTo(Competencia);

    Jugador.belongsTo(Carrera);
}

module.exports = {applyRelations};