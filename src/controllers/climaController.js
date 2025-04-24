const axios = require("axios");

const getClima = async (req, res) => {

  try {
    
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res
        .status(400)
        .json({ error: "Debe ingresar datos en latitud o longitud" });
    }

    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

    const response = await axios.get(API_URL);

    if (!response.data) {
      throw new Error("La respuesta desde la API, esta sin datos");
    }

    res.json(response.data);

  } catch (error) {

    if (error.response) {
      res.status(error.response.status).json({
        error: "La API ha generado un error",
        details: error.response.data,
      });
    } else if (error.request) {
      res.status(503).json({
        error: "La solicitud ha generado un error de conexion con la API",
        details: error.request.data,
      });
    } else {
      res.status(500).json({ error: "Error interno en el servidor" });
    }

  }
};

module.exports = { getClima };
