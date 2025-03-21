const express = require("express");
const router = express.Router();
const { getClima } = require("../controllers/climaController"); // Obtenemos la funcion de controller.js

// Ruta para obtener el clima
router.get("/clima", getClima); // Con esta ruta traeme dicha funcion

module.exports = router; // Exportamos para que pueda usarse de otro archivo.
