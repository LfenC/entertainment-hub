# Etapa 1: Construcción
FROM node:18 AS build

# Configura el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist/entertainment-hub /usr/share/nginx/html
COPY --from=build /app/dist/entertainment-hub/browser/favicon.ico /usr/share/nginx/html/
# Expone el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
