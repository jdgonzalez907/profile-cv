# Usar una imagen ligera de Nginx
FROM nginx:alpine

# Copiar los archivos del proyecto al directorio que Nginx usa para servir contenido
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
