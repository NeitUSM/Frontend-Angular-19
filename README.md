# Proyecto Frontend con conexión a backend

## Descripción
Este es un proyecto frontend creado con el proposito de consumir -de manera básica- los enpoints de una API desarrollada en el backend en NodeJS. También cuenta con la opción de dockerizar el proyecto, permitiendo que exista una comunicación entre frontend - API - backend - base de datos en una red interna de Docker. 

## ¡Importante!
- El correcto funcionamiento del proyecto depende del repositorio **Node-MySQL-API**, donde están desarrolladas las conexiones del backend y la base de datos, adicionalmente, están los endpoints que consume el frontend. Se recomienda realizar las instalaciones de dicho repositorio antes de correr este proyecto.
- Para el completo funcionamiento de la aplicación web se debe realizar la instalación de las siguientes dependencias. Estas, fueron instaladas desde las páginas oficiales en Ubuntu.

### Dependencias
Las siguientes dependencias estarán asignadas con la versión con la que fue desarrollada la aplicación:
1. **Docker v.27.3.1**
2. **Docker-compose v.1.29.2**
3. **Node v.20**
4. **Angular v.19**

## ¿Cómo ejecutar la aplicación web?
1. Abrir el directorio raíz en la terminal
2. Ejecutar el comando **npm install** para instalar las dependencias
3. Ejecutar el comando **ng serve --o**

## ¿Cómo genero el contenedor en Docker y ejecuto la aplicación web?
Se explicará tomando en cuenta que los contenedores de la base de datos y el backend están corriendo, y funcionan correctamente.
1. Abrir el directorio raíz en la terminal
2. Ejecutar el comando **npm run build --prod** para generar los directorios y archivos en **./dist/frontend/browser/**
3. Construir la imagen con **sudo build -t angular-frontend .**
4. Construir el contenedor corriendo la imagen con **sudo docker run --rm -d -p 80:80 --name angular-frontend --network node-angular-mysql angular-frontend**
5. Ingresar en el navegador web a **localhost:80**

## Tecnologías utilizadas
- **Creación de contenedores**: Docker.
- **Contenedor del proyecto**: Angular y nginx.
- **Proyecto realizado en**: Angular 19.
