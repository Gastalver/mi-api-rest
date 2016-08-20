#API REST basada en Express y MongoDB
A la vista de la rápida evolución de Node, Express y Mongo me propongo crear mi propio ejemplo de servidor API REST tomando como referencia las últimas versiones de todos los paquetes y su documentación oficial.
## Notas de Desarrollo
### Dependencias.
#### `express ^4.14.0`
Paquete para crear más fácilmente un servidor basado en la clase `http`de `node`.
De la versión 3.x a la versión 4.x se producen muchos cambios. Hay que tenerlo presente si se consulta cualquier fuente que utilice express.
#### `body-Parser ^1.15.2`
Fue excluido de Express a partir de la versión 4.x por lo tanto es un paquete que hay que incluir expresamente como dependencia.
 Su finalidad es extraer el cuerpo de la petición HTTP y ponerlo a disposición de la aplicación en la propiedad `req.body`, debidamente formateado, para manipularlo con el middleware.
 En esta aplicación sólamente usaremos dos métodos: 
 `app.use(bodyParser.urlencoded({ extended: false }));` Para pasar los datos del request en formato application/x-www-form-urlencoded a req.body
 `app.use(bodyParser.json());` para pasar los datos del request en formato application/json a req.body.
 
 *Más información en el archivo README.md en `\node_modules\body-parser` o en [www.npmjs.com/package/body-parser](https://www.npmjs.com/package/body-parser).*
#### `assert: ^1.4.1`
Este módulo se usa para escribir unidades de tests de la aplicación.
 *Más información en el archivo README.md en `\node_modules\assert` o en [www.npmjs.com/package/assert](https://www.npmjs.com/package/assert).*
#### `mongodb ^2.2.7`
Es el driver oficial de `MongoDB` para `node`. A partir de la versión 2.1.11 hay cambios importantes. Tengase en cuenta si se consulta cualquier otra fuente que utilice este driver.

## Instrucciones de uso
### 0. Prerrequisitos.
Es necesario que en la máquina exista `node` y una instancia del servidor `MongoDB` en funcionamiento (`mongod`).
No es necesario crear una base de datos. Si no existe, el servidor la creará, por defecto con el nombre `mibasededatos` y con una única colección llamada `micoleccion`.
Si se desea disfrutar de reinicio automático del servidor cada vez que se hagan cambios en el código, es necesario tener instalado con carácter global `nodemonitor`, para ello ejecutar:
```
npm install -g nodemon
```
### 1. Instalación
 Lo primero que hay que hacer es clonar el repositorio con el comando:
  ```
  git clone https://github.com/Gastalver/mi-api-rest.git
  ```
   Luego, situados en el directorio raíz de la aplicación, instalar las dependencias con el comando:
   ```
   npm install
   ```
### 2. Opciones de inicio
El archivo `package.json` contiene dos scripts de inicio distintos. 
`start` ejecuta directamente en node el archivo principal apiserver.js
`monitoriza` lo ejecuta por medio de `nodemon`, de modo que se reiniciará automáticamente con cada cambio de código.