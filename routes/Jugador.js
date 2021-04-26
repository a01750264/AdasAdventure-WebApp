const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/Jugador');

router.get('/verJugadores', jugadorController.getJugadores);
router.get('/agregarJugador', jugadorController.getAgregarJugador);
router.get('/tablero', jugadorController.getJugadores);
router.get('/iniciarSesion', jugadorController.getIniciarSesion);
router.post('/iniciarSesion', jugadorController.postIniciarSesion);
router.post('/iniciarSesionWeb', jugadorController.postIniciarSesionApp);
router.post('/agregarJugador', jugadorController.postAgregarJugador);

module.exports = router;