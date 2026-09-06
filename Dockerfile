FROM nginxinc/nginx-unprivileged:1.30-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=101:101 index.html /usr/share/nginx/html/index.html
COPY --chown=101:101 css /usr/share/nginx/html/css
COPY --chown=101:101 js /usr/share/nginx/html/js
COPY --chown=101:101 image /usr/share/nginx/html/image
COPY --chown=101:101 movie /usr/share/nginx/html/movie

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

