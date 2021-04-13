const Competencia = require('../models/Competencia');
const Carrera = require('../models/Carrera');

exports.getDev = (request, response)=>{
    response.sendFile(path.join(__dirname, 'views', 'dev.html'))
};

exports.getAgregarCompetencia = (request, respoonse)=>{
    response.sendFile(path.join(__dirname, 'views', 'competencia.html'));
};

exports.getAgregarCarrera = (request, respoonse)=>{
    response.sendFile(path.join(__dirname, 'views', 'carrera.html'));
};

exports.postAgregarCarrera = (request, response)=>{
    console.log(request.body);

    Carrera.create({
        carrera: request.body.carreraCarrera
    }).then(resultado=>console.log("Carrera creada"))
      .catch(err=>console.log(err));

    response.redirect("/dev/confirmacionCarrera");
}

exports.postAgregarCompetencia = (request, response)=>{
    console.log(request.body);

    Competencia.create({
        competencia: request.body.competenciaCompetencia
    }).then(resultado=>console.log("Competencia creada"))
      .catch(err=>console.log(err));
    
    response.redirect("/dev/confirmacionCarrera");
}