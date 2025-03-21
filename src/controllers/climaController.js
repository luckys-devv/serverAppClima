const axios = require("axios");

const getClima = async (req, res) => {
    
    try {
        const { lat, lng } = req.query;

        if (!lat || !lng) {
            return res.status(400).json({ error: "Se requieren latitud y longitud" });
        }

        const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

        const response = await axios.get(API_URL);
        res.json(response.data);

    } catch (error) {
        console.error("Error obteniendo el clima:", error.message);
        res.status(500).json({ error: "Error al obtener el clima" });
    }
};

module.exports = { getClima };
