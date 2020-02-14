FROM openresty/openresty:alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN rm /usr/local/openresty/nginx/conf/nginx.conf.default
COPY nginx/nginx.conf /usr/local/openresty/nginx/conf/
COPY nginx/main.conf /etc/nginx/conf.d
COPY lib/prometheus.lua /usr/local/openresty/luajit/lib

RUN nginx -t
