const express = require('express');
const router = express.Router();
const devController = require('../controllers/dev');

router.get('/admin', devController.getDev);
router.get('/agregarCarrera', devController.getAgregarCarrera);
router.get('/agregarCompetencia', devController.getAgregarCompetencia);
router.get('/confirmacionCompetencia', devController.getConfirmarCompetencia);
router.get('/confirmacionCarrera', devController.getConfirmarCarrera);
router.get('/verCompetencias', devController.getVerCompetencias);
router.get('/tableau', devController.getTableau);
router.get('/verCarreras', devController.getVerCarreras);
router.get('/download', devController.getGame);
router.post('/agregarCarrera', devController.postAgregarCarrera);
router.post('/agregarCompetencia', devController.postAgregarCompetencia);

module.exports = router;