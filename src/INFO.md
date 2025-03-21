- El user hace la peticion  http://localhost:3000/api/climaNew?lat=-31.42&lng=-64.18
- Express.js recibe la request y se la manda a ClimaRoutes.js
- climaRoutes.js detecta la ruta y execute la funcion getClima() de climaController.js
- climaController.js hace la peticion a la API, obtiene el dato y lo devuelve.

📁 index.js
✅ Configura el servidor Express.
✅ Importa y usa climaRoutes.js.

📁 routes/climaRoutes.js
✅ Define la ruta /api/clima.
✅ Solo redirige la petición a climaController.js.

📁 controllers/climaController.js
✅ Llama a la API de Open-Meteo.
✅ Procesa y devuelve la respuesta JSON.


- Si quisieras agregar mas endpoint (Seguimos la misma estructura)

📁 index.js
✅ Importa routes/climaRoutes.js y las usa en /api.

📁 routes/climaRoutes.js
✅ Define dos rutas:

/api/clima → Clima
/api/airquality → Calidad del aire

📁 controllers/climaController.js
✅ getClima() obtiene el clima.
✅ getAirQuality() obtiene calidad del aire.