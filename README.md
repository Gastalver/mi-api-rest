#API REST basada en Express y MongoDB
A la vista de la rápida evolución de Node, Express y Mongo me propongo crear mi propio ejemplo de servidor API REST tomando como referencia las últimas versiones de todos los paquetes y su documentación oficial.
##NOTAS
### 0. Prerrequisitos.
Es necesario que en la máquina exista una instancia del servidor MongoDB en funcionamiento.
No es necesario crear una base de datos en la misma. Si no existe, el servidor la creará, por defecto con el nombre `mibasededatos` y con una única colección llamada `micoleccion`.
### 1. Instalación
 Lo primero que hay que hacer es clonar el repositorio con el comando:
  ```
  git clone https://github.com/Gastalver/mi-api-rest.git
  ```
   Luego, situados en el directorio raíz de la aplicación, instalar las dependencias con el comando:
   ```
   npm install
   ```
