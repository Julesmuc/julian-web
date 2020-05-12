FROM nginx:alpine
EXPOSE 8081
COPY ./public-html/ /usr/share/nginx/html