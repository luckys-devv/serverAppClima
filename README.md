# 🌦️ Backend Clima 

Este es un simple backend que estoy realizando para una aplicacion para consultar sobre el clima. Lo estoy desarrollando en **Node.JS** y espero desplegarlo en **Vercel**. 

El frontend de la app lo estoy realizando en Delphi FMX 12.2 (en desarrollo proximo a subir)

## 🚀 Características

- Estoy usando la API gratuita de Open-Meteo. 
- Backend realizado en **NodeJS**, utilizando **ExpressJS**    
- Frontend por desarrollarse en **Delphi FMX 12.2**    
- Por Desplegar en **Vercel**.

## 📖 API Características

- No requiere API_KEY 
- Es necesario buscar por latitud y longitud 
- Donde obtengo los siguientes datos:  
    - Temperatura actual 
    - Temperatura maxima y minima 
    - Probabilidad de lluvia 
    - Velocidad del viento 
    - Prevision del tiempo para 5 dias posteriores
- Documentacion: https://open-meteo.com/en/docs.


## 🌐 Endpoints disponibles

- /api/clima?lat=-31.42&lng=-64.18 

## 🖥️ Tegnologias 

- Node.Js
- Express.js
- Vercel (Despliegue) -> Por hacer

## 🔄 Flujo del back

- El user hace la peticion api/climaNew?lat=-31.42&lng=-64.18
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


## ❓ Ayuda

Si necesitas que te explique o tienes una sugerencia para mejorarlo, puedes contactarme. 