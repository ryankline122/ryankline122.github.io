FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80