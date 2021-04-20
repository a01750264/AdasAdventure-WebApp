const express = require('express');
const router = express.Router();
const devController = require('../controllers/dev');

router.get('/admin', devController.getDev);
router.get('/agregarCarrera', devController.getAgregarCarrera);
router.get('/agregarCompetencia', devController.getAgregarCompetencia);
router.get('/confirmacionCompetencia', devController.getConfirmarCompetencia);
router.get('/confirmacionCarrera', devController.getConfirmarCarrera);
router.get('/usuarioSteam', devController.getUsuarioSteam);
router.post('/agregarCarrera', devController.postAgregarCarrera);
router.post('/agregarCompetencia', devController.postAgregarCompetencia);
router.post('/usuarioSream', devController.postUsuarioSteam);

module.exports = router;