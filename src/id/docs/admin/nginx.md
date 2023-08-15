# Pengaturan nginx
1. Buat `/etc/nginx/conf.d/misskey.conf` atau `/etc/nginx/sites-available/misskey.conf` dan salin contoh berikut ke dalam berkas.\
   (Nama berkas tidak harus "misskey".)
2. Sunting sebagai berikut:
   1. Ganti example.tld dengan domain yang telah kamu siapkan.\
     `ssl_certificate` dan `ssl_certificate_key` harus merupakan path ke sertifikat yang didapatkan dari Let's Encrypt.
	 1. Jika menggunakan CDN seperti Cloudflare, hapus empat baris dari "Jika berada di belakan reverse proxy lainnya atau CDN, hapus baris di bawah ini."
3. Jika kamu membuat `/etc/nginx/sites-available/misskey.conf`, buat symlink sebagai `/etc/nginx/sites-enabled/misskey.conf`.\
   `sudo ln -s /etc/nginx/sites-available/misskey.conf /etc/nginx/sites-enabled/misskey.conf`
4. Jalankan `sudo nginx -t` untuk memverifikasi bahwa berkas konfigurasi dapat dimuat secara sukses.
5. Jalankan `sudo systemctl restart nginx` untuk menjalankan ulang nginx.

# Contoh konfigurasi nginx

```nginx
# Untuk WebSocket
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

proxy_cache_path /tmp/nginx_cache levels=1:2 keys_zone=cache1:16m max_size=1g inactive=720m use_temp_path=off;

server {
    listen 80;
    listen [::]:80;
    server_name example.tld;

    # Untuk validasi domain SSL
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

    # Untuk menggunakan sertifikat Let's Encrypt
    ssl_certificate     /etc/letsencrypt/live/example.tld/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.tld/privkey.pem;

    # Untuk menggunakan sertifikat self-signed dari Debian/Ubuntu (Untuk testing atau sebelum menerbitkan sertifikat)
    #ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;
    #ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;

    # Pengaturan protokol SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Ubah sesuaikan batas unggahan
    client_max_body_size 80m;

    # Proxy ke Node
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_redirect off;

        # Jika berada di belakan reverse proxy lainnya atau CDN, hapus baris di bawah ini.
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # Untuk WebSocket
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;

        # Pengaturan Cache
        proxy_cache cache1;
        proxy_cache_lock on;
        proxy_cache_use_stale updating;
        proxy_force_ranges on;
        add_header X-Cache $upstream_cache_status;
    }
}
```
