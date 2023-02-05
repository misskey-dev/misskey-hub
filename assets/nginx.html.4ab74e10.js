import{_ as s,o as n,c as a,e}from"./app.3fa41763.js";const i={},t=e(`<h1 id="nginx\u306E\u8A2D\u5B9A" tabindex="-1"><a class="header-anchor" href="#nginx\u306E\u8A2D\u5B9A" aria-hidden="true">#</a> Nginx\u306E\u8A2D\u5B9A</h1><ol><li><code>/etc/nginx/conf.d/misskey.conf</code>\u3082\u3057\u304F\u306F<code>/etc/nginx/sites-available/misskey.conf</code>\u3092\u4F5C\u6210\u3057\u3001\u4E0B\u306E\u8A2D\u5B9A\u4F8B\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002<br> \uFF08\u30D5\u30A1\u30A4\u30EB\u540D\u306Fmisskey\u3067\u306A\u304F\u3066\u3082\u69CB\u3044\u307E\u305B\u3093\u3002\uFF09</li><li>\u6B21\u306E\u3088\u3046\u306B\u7DE8\u96C6\u3057\u307E\u3059\u3002 <ol><li>example.tld\u3092\u81EA\u5206\u304C\u7528\u610F\u3057\u305F\u30C9\u30E1\u30A4\u30F3\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002<br><code>ssl_certificate</code>\u3068<code>ssl_certificate_key</code>\u306FLet&#39;s Encrypt\u3067\u53D6\u5F97\u3057\u305F\u8A3C\u660E\u66F8\u306E\u30D1\u30B9\u306B\u306A\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002</li><li>Cloudflare\u306A\u3069\u306ECDN\u3092\u4F7F\u3046\u5834\u5408\u306F\u3001\u300CIf it&#39;s behind another reverse proxy or CDN, remove the following.\u300D\u304B\u30894\u884C\u3092\u524A\u9664\u3057\u307E\u3059\u3002</li></ol></li><li><code>/etc/nginx/sites-available/misskey.conf</code>\u3092\u4F5C\u6210\u3057\u305F\u5834\u5408\u306F\u3001<code>/etc/nginx/sites-enabled/misskey.conf</code>\u3068\u3057\u3066\u30B7\u30F3\u30DC\u30EA\u30C3\u30AF\u30EA\u30F3\u30AF\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002<br><code>sudo ln -s /etc/nginx/sites-available/misskey.conf /etc/nginx/sites-enabled/misskey.conf</code></li><li><code>sudo nginx -t</code> \u3067\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u304C\u6B63\u5E38\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002</li><li><code>sudo systemctl restart nginx</code> \u3067nginx\u3092\u518D\u8D77\u52D5\u3057\u307E\u3059\u3002</li></ol><h2 id="\u8A2D\u5B9A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8A2D\u5B9A\u4F8B" aria-hidden="true">#</a> \u8A2D\u5B9A\u4F8B</h2><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># For WebSocket</span>
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
