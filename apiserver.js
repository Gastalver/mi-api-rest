// Dependencias
var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;


// URL de la conexión a MongoDB
var url = 'mongodb://localhost:27017/mibasededatos';

// Usamos el método connect para conectar con el servidor Mongo.
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Conexión con Servidor MongoDB realizada correctamente.");
    db.close();
});


// Instancia de Express.
var app = express();


// Middleware

// Para pasar los datos del request en formato application/x-www-form-urlencoded a req.body
app.use(bodyParser.urlencoded({ extended: false }));
// Para pasar los datos del request en formato application/json a req.body
app.use(bodyParser.json());

app.param("api", function (req,res,next,coleccion) {
    req.coleccion = MongoClient.collection(coleccion);
    return(next);
    });

// Request Handlers del Front-End
app.get("/", function(req,res,next){
    res.send("<html><head></head><body><p>Front-End</p></body></html>");
});

// Request Handlers de la API
app.get("/api", function(req,res,next){
    res.send("<html><head></head><body><p>Indique la colección con el formato /api/nombreColeccion por favor</p></body></html>");
});

app.get("api/:coleccion", function (req,res,next) {
    res.send("<html><head></head><body><p>Ha pedido la colección /api/" + req.coleccion + "</p></body></html>");
});


// Recuperar todos los registros de la colección. (Modelo Mongo)

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
}





//Inicio del servidor
app.listen(3000, function () {
    console.log('Servidor API REST funcionando en puerto 3000');
});


