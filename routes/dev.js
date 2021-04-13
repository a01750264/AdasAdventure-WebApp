const express = require('express');
const router = express.Router();
const devController = require('../controllers/dev');

router.get('/admin', devController.getDev);
router.get('/agregarCarrera', devController.getAgregarCarrera);
router.get('/agregarCompetencia', devController.getAgregarCompetencia);
router.post('/agregarCarrera', devController.postAgregarCarrera);
router.post('/agregarCompetencia', devController.postAgregarCompetencia);

module.exports = router;