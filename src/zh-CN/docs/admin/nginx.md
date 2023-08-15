# 配置 Nginx
1. 创建 `/etc/nginx/conf.d/misskey.conf` 或 `/etc/nginx/sites-available/misskey.conf` 并复制下面的示例配置到该文件.\
   (文件名可以自定义，不一定强制为"misskey")
2. 修改示例配置中的如下内容:
   1. 将“example.tld”替换为自己的域名，请注意不只有一处.\
     `ssl_certificate` and `ssl_certificate_key` 应当是从  Let's Encrypt 或自己上传的 SSL 证书的绝对路径。
	 2. 若使用 CDN，例如 Cloudflare, 移除 "If it's behind another reverse proxy or CDN, remove the following."后面的四行（4 lines）。
3. 如果创建了 `/etc/nginx/sites-available/misskey.conf`, 那么需要创建一个为 `/etc/nginx/sites-enabled/misskey.conf` 的 symlink：\
   `sudo ln -s /etc/nginx/sites-available/misskey.conf /etc/nginx/sites-enabled/misskey.conf`
4. 输入 `sudo nginx -t` 命令来验证配置文件是否有效。
5. 输入 `sudo systemctl restart nginx` 命令来重启 Nginx。

# Nginx 示例配置

```nginx
# For WebSocket
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=cache1:16m max_size=1g inactive=720m use_temp_path=off;

server {
    listen 80;
    listen [::]:80;
    server_name example.tld;

    # For SSL domain validation
    root /var/www/html;
    location /.well-known/acme-challenge/ { allow all; }
    location /.well-known/pki-validation/ { allow all; }
    location / { return 301 https://$server_name$request_uri; }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.tld;

    ssl_session_timeout 1d;
    ssl_session_cache shared:ssl_session_cache:10m;
    ssl_session_tickets off;

    # To use Let's Encrypt certificate
    ssl_certificate     /etc/letsencrypt/live/example.tld/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.tld/privkey.pem;

    # To use Debian/Ubuntu's self-signed certificate (For testing or before issuing a certificate)
    #ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;
    #ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;

    # SSL protocol settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Change to your upload limit
    client_max_body_size 80m;

    # Proxy to Node
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_redirect off;

        # If it's behind another reverse proxy or CDN, remove the following.
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # For WebSocket
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # Cache settings
        proxy_cache cache1;
        proxy_cache_lock on;
        proxy_cache_use_stale updating;
        proxy_force_ranges on;
        add_header X-Cache $upstream_cache_status;
    }
}
```
