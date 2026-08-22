// 1. Importamos la herramienta Express
const express = require('express');
const app = express();

// 2. Definimos el puerto por donde escuchará nuestro servidor
const PORT = 3000;

// 3. Creamos nuestra primera ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor del Sistema de Ventas de Accesorios Silvia funcionando!');
});

// 4. Encendemos el motor
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
});