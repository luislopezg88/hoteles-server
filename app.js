var express = require('express');

var app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
})

app.listen(5000, () => {
    console.log('Express server corriendo en el puerto 5000: \x1b[32m%s\x1b[0m', ' Online')
})