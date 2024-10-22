# Usar una imagen de Node.js como base
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que usará la aplicación (8080 en este caso)
EXPOSE 8081

# Comando para correr la aplicacion
CMD ["node", "app.js"]
