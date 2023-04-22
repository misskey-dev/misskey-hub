import{_ as s,o as n,c as a,e}from"./app.416405da.js";const i={},t=e(`<h1 id="nginx-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#nginx-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> Nginx \uC124\uC815</h1><ol><li><code>/etc/nginx/conf.d/misskey.conf</code> \uB610\uB294 <code>/etc/nginx/sites-available/misskey.conf</code> \uD30C\uC77C\uC744 \uB9CC\uB4E4\uACE0 \uB2E4\uC74C \uC608\uC2DC\uB97C \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.<br> (\uD30C\uC77C \uC774\uB984\uC774 \uAD73\uC774 &quot;misskey&quot;\uC77C \uD544\uC694\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.)</li><li>\uB2E4\uC74C\uACFC \uAC19\uC774 \uC218\uC815\uD574 \uC8FC\uC138\uC694: <ol><li>example.tld\uB97C \uBBF8\uB9AC \uC900\uBE44\uD574 \uB454 \uB3C4\uBA54\uC778\uC73C\uB85C \uBCC0\uACBD\uD574\uC8FC\uC138\uC694.<br><code>ssl_certificate</code>\uC640 <code>ssl_certificate_key</code>\uB294 Let&#39;s Encrypt\uB85C\uBD80\uD130 \uBC1B\uC740 \uC778\uC99D\uC11C \uACBD\uB85C\uC5EC\uC57C \uD569\uB2C8\uB2E4.</li><li>Cloudflare\uC640 \uAC19\uC740 CDN\uC744 \uD65C\uC6A9\uD558\uACE0 \uC788\uB2E4\uBA74, &quot;If it&#39;s behind another reverse proxy or CDN, remove the following.&quot;\uC73C\uB85C\uBD80\uD130 4\uC904\uC744 \uC9C0\uC6CC\uC8FC\uC138\uC694.</li></ol></li><li><code>/etc/nginx/sites-available/misskey.conf</code> \uD30C\uC77C\uC744 \uB9CC\uB4E4\uC5C8\uB2E4\uBA74, symlink\uB85C <code>/etc/nginx/sites-enabled/misskey.conf</code>\uC5D0 \uC5F0\uACB0\uD574\uC8FC\uC138\uC694.<br><code>sudo ln -s /etc/nginx/sites-available/misskey.conf /etc/nginx/sites-enabled/misskey.conf</code></li><li><code>sudo nginx -t</code>\uB97C \uC2E4\uD589\uD574 \uC124\uC815 \uD30C\uC77C\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uB85C\uB4DC\uB418\uB294\uC9C0 \uD655\uC778\uD574\uC8FC\uC138\uC694.</li><li><code>sudo systemctl restart nginx</code>\uB97C \uC2E4\uD589\uD574 nginx\uB97C \uC7AC\uC2E4\uD589\uD574\uC8FC\uC138\uC694.</li></ol><h2 id="nginx-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#nginx-\u1109\u1165\u11AF\u110C\u1165\u11BC-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> Nginx \uC124\uC815 \uC608\uC2DC</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># For WebSocket</span>
<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> upgrade</span><span class="token punctuation">;</span>
    &#39;&#39;      <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">proxy_cache_path</span> /tmp/nginx_cache levels=1:2 keys_zone=cache1:16m max_size=1g inactive=720m use_temp_path=off</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> [::]:80</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.tld</span><span class="token punctuation">;</span>

    <span class="token comment"># For SSL domain validation</span>
    <span class="token directive"><span class="token keyword">root</span> /var/www/html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /.well-known/acme-challenge/</span> <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">allow</span> all</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /.well-known/pki-validation/</span> <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">allow</span> all</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span> <span class="token directive"><span class="token keyword">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> [::]:443 ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.tld</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">1d</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:ssl_session_cache:10m</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_session_tickets</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>

    <span class="token comment"># To use Let&#39;s Encrypt certificate</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/letsencrypt/live/example.tld/fullchain.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/letsencrypt/live/example.tld/privkey.pem</span><span class="token punctuation">;</span>

    <span class="token comment"># To use Debian/Ubuntu&#39;s self-signed certificate (For testing or before issuing a certificate)</span>
    <span class="token comment">#ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;</span>
    <span class="token comment">#ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;</span>

    <span class="token comment"># SSL protocol settings</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_stapling</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_stapling_verify</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment"># Change to your upload limit</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">80m</span></span><span class="token punctuation">;</span>

    <span class="token comment"># Proxy to Node</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:3000</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>

        <span class="token comment"># If it&#39;s behind another reverse proxy or CDN, remove the following.</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto https</span><span class="token punctuation">;</span>

        <span class="token comment"># For WebSocket</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token variable">$connection_upgrade</span></span><span class="token punctuation">;</span>

        <span class="token comment"># Cache settings</span>
        <span class="token directive"><span class="token keyword">proxy_cache</span> cache1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_lock</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_cache_use_stale</span> updating</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_force_ranges</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> X-Cache <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[t];function p(l,o){return n(),a("div",null,c)}var r=s(i,[["render",p],["__file","nginx.html.vue"]]);export{r as default};
