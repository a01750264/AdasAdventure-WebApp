const express = require('express');
const router = express.Router();
const steamController = require('../controllers/usuarioSteam');

router.get('/agregarUsuario', steamController.getAgregarUsuarioSteam);
router.get('/iniciarSesion', steamController.getIniciarSesion);
router.post('/agregarUsuario', steamController.postAgregarUsuarioSteam);
router.post('/iniciarSesion', steamController.postIniciarSesion)

module.exports = router;