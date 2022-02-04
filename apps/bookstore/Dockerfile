FROM nginx:stable-alpine
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
COPY  dist/apps/bookstore/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

