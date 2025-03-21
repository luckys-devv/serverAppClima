const express = require("express"); // Manejamos las peticiones HTTP
const cors = require("cors"); // Permitimos que nuestro front haga peticiones

const app = express();
app.use(cors());
app.use(express.json());

// Importamos las rutas del clima
const climaRoutes = require("./routes/climaRoutes");
app.use("/api", climaRoutes); // Prefijo "/api" para mantener orden

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



