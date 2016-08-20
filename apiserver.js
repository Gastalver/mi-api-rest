// Dependencias
var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;


// URL de la conexión a MongoDB
var url = 'mongodb://localhost:27017/mibasededatos';

// Usamos el métido connect para conectar con el servidor Mongo.
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Conexión con MongoDB realizada correctamente.");
    db.close();
});


// Instancia de Express.
var app = express();


// Middleware

// Para pasar los datos del request en formato application/x-www-form-urlencoded a req.body
app.use(bodyParser.urlencoded({ extended: false }));
// Para pasar los datos del request en formato application/json a req.body
app.use(bodyParser.json());






//Inicio del servidor
app.listen(3000, function () {
    console.log('Servidor API REST funcionando en puerto 3000');
});


