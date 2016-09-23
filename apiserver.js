// Dependencias
var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;


// URL de la conexión a MongoDB
var url = 'mongodb://localhost:27017/gestion';


// Instancia de Express.
var app = express();


// Middleware

// Para pasar los datos del request en formato application/x-www-form-urlencoded a req.body
app.use(bodyParser.urlencoded({ extended: false }));
// Para pasar los datos del request en formato application/json a req.body
app.use(bodyParser.json());

// Almacenamos toda la colección solicitada en req.nombreColeccion
app.param('nombreColeccion', function (req,res,next,nombreCol) {

    // Usamos el método connect para conectar con el servidor Mongo.
    MongoClient.connect(url, function (err, db) {

        assert.equal(null, err);

        if (err) {
            console.log("Problema al conectar con el Servidor MongoDB")
            return next()
        }
        else {

            console.log("Conexión con Servidor MongoDB realizada correctamente.");

                if (db.collection(nombreCol)) {
                    req.coleccion = db.collection(nombreCol);
                    console.log(req.coleccion);
                    return next();
                }
                else {
                    console.log("La colección " + nombreCol + " no existe");
                    return next();
                };
        };

    });
});

// Request Handlers del Front-End
app.get("/", function(req,res,next){
    res.send("<html><head></head><body><p>Front-End</p></body></html>");
});

// Request Handlers de la API
app.get("/api", function(req,res,next){
    res.send("<html><head></head><body><p>Indique la colección con el formato /api/nombreColeccion por favor</p></body></html>");
});

app.get("/api/:nombreColeccion", function (req,res,next) {
    console.log("Hola, has usado un parametro, concretamente " + req.params.nombreColeccion + " ¿o no?");
    res.send("<html><head></head><body><p>Ha pedido la colección /api/" + req.params.nombreColeccion + "</p><p>Esto es lo que contiene:</p>" +  "<p></p></body></html>");
});







//Inicio del servidor
app.listen(3000, function () {
    console.log('Servidor API REST funcionando en puerto 3000');
});


