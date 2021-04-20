const UsuarioSteam = require('../utils/db').models.usuariosteam;
const path = require('path');

exports.getAgregarUsuarioSteam = (request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'agregarSteam.html'));
};

exports.postAgregarUsuarioSteam = (request, response)=>{
    console.log(request.body);

    UsuarioSteam.create({
        nombre: request.body.steamNombre,
        apellidoP: request.body.steamApellidoP,
        apellidoM: request.body.steamApellidoM,
        email: request.body.steamEmail,
        password: request.body.steamPswd
    }).then(resultado=>console.log("Usuario Steam creado"))
      .catch(err=>console.log(err));

    response.send("Registro exitoso");
};