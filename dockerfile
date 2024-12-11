# Imagen base para la compilación de Angular
FROM node:20 AS build

# Crear un directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . /app

# Construir la aplicación para producción
RUN npm run build --prod

# Imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos de Angular generados en la etapa de build
COPY --from=build /app/dist/frontend/browser/ /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando de inicio de Nginx
CMD ["nginx", "-g", "daemon off;"]
