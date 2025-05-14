const express = require("express"); // Manejamos las peticiones HTTP
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, '..', 'public')));


// Importamos las rutas del clima
const climaRoutes = require("./routes/climaRoutes");
app.use("/api", climaRoutes); // Prefijo "/api" para mantener orden

const PORT = 3000;
app.listen(PORT, () => {
    
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});



