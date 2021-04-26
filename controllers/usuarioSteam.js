const UsuarioSteam = require('../utils/db').models.usuariosteam;
const path = require('path');

exports.getAgregarUsuarioSteam = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'agregarSteam.html'));
};

exports.getIniciarSesion = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'iniciarSesionSTEAM.html'));
};

exports.postAgregarUsuarioSteam = (request, response)=>{
    console.log(request.body);

    UsuarioSteam.create({
        nombre: request.body.steamNombre,
        apellidoP: request.body.steamApellidoP,
        apellidoM: request.body.steamApellidoM,
        email: request.body.steamEmail,
        password: request.body.steamPswd
    }).then(resultado=>{
        console.log("Usuario Steam creado");
        response.redirect("/home");
    }).catch(err=>console.log(err));
};

exports.postIniciarSesion = (request, response)=>{
    console.log(request.body);

    UsuarioSteam.findAll({
        where: {
            email: request.body.emailUsuario,
            password: request.body.passwordUsuario
        }
    }).then(registros=>{
        var data = [];
        registros.forEach(registro=>{
            data.push(registro.dataValues);
        });
        console.log(data);
        if (registros.length == 0){
            response.send("Revisa que tus datos sean correctos")
        } else {
            response.redirect('/home')
        }
    })
};