const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/Jugador');

router.get('/verJugadores', jugadorController.getJugadores);
router.get('/agregarJugador', jugadorController.getAgregarJugador);
router.get('/confirmacion', jugadorController.getConfirmacion);
router.get('/tablero', jugadorController.getJugadores)
router.post('/agregarJugador', jugadorController.postAgregarJugador);

module.exports = router;