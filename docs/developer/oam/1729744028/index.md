---
title: "运维 - Nginx"
---

## 配置SSL证书

这篇文档只讲怎么配置，至于如何安装Nginx，请自行必应或者阅读其他人的部署文档。

### 1. 下载证书

首先，你需要下载SSL证书，通常是`.crt`和`.key`文件。

### 2. 配置Nginx

打开Nginx的配置文件，通常是`/etc/nginx/nginx.conf`, 如果是Docker部署的，需自行寻找，找到`http`块，在`server`块中添加以下内容。

并且需要注意将 `example.com` 替换为你自己的域名,`example.com_bundle.pem`和`example.com_bundle.key`修改为你下载的证书文件路径。

```conf
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 443 ssl;
        server_name example.com;



        ssl_certificate /root/example.com_nginx/example.com_bundle.pem;
        ssl_certificate_key /root/example.com_nginx/example.com.key;

        # ssl验证相关配置
        ssl_session_timeout  5m;    #缓存有效期
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    #加密算法
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;    #安全链接可选的加密协议
        ssl_prefer_server_ciphers on;   #使用服务器端的首选算法

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }


    server {
        listen 80;
        server_name example.com;

        return 307 https://$server_name$request_uri;
    }

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

> [!TIP]
> 这里需要注意一下，`ssl_certificate`和`ssl_certificate_key`这两个配置项，需要填写你下载的证书的路径。
> 
> 而且必须是绝对路径，不能使用相对路径，证书文件在服务器的哪个位置，就写它的绝对路径。
> 


> [!CAUTION]
> 但是如果你是Docker部署的Nginx，那么必须确保证书已经正确映射到了容器内部，并且将配置路径设置为容器内的路径，而不是宿主机路径。
> 
> 【Docker这里我踩过坑,所以特别提醒一下】