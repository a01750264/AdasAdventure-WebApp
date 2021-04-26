const Competencia = require('../utils/db').models.competencia;
const Carrera = require('../utils/db').models.carrera;
const path = require('path')
const { request } = require('express');

exports.getDev = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'dev.html'))
};

exports.getAgregarCompetencia = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'agregarCompetencia.html'));
};

exports.getAgregarCarrera = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'agregarCarrera.html'));
};

exports.getConfirmarCompetencia = (request, response)=>{
    response.send("Competencia agregada")
};

exports.getConfirmarCarrera = (request, response)=>{
    response.send("Carrera agregada")
};

exports.getVerCompetencias = (request, response)=>{
    Competencia.findAll()
    .then(competencias=>{
        var data = [];
        competencias.forEach(competencia=>{
            data.push(competencia.dataValues);
        });
        console.log(data)
        response.render('../views/verCompetencias.html',{
            competencias:data,
        });
    });
};

exports.postAgregarCarrera = (request, response)=>{
    console.log(request.body);

    Carrera.create({
        carrera: request.body.carreraCarrera
    }).then(resultado=>console.log("Carrera creada"))
      .catch(err=>console.log(err));

    response.redirect("/dev/confirmacionCarrera");
};

exports.postAgregarCompetencia = (request, response)=>{
    console.log(request.body);

    Competencia.create({
        competencia: request.body.competenciaCompetencia
    }).then(resultado=>console.log("Competencia creada"))
      .catch(err=>console.log(err));
    
    response.redirect("/dev/confirmacionCompetencia");
};
