import{_ as i,o as t,c,a as n,b as o,w as l,d as s,e as a,r as p}from"./app.b215b85c.js";const d={},r=n("h1",{id:"configurazione-di-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configurazione-di-nginx","aria-hidden":"true"},"#"),s(" Configurazione di Nginx")],-1),u=n("li",null,[s("Crea il file "),n("code",null,"/etc/nginx/conf.d/misskey.conf"),s(" oppure "),n("code",null,"/etc/nginx/sites-available/misskey.conf"),s(" copiaci dentro il contenuto dell'esempio. (il nome del file pu\xF2 cambiare)")],-1),k=s("Modifica come segue: "),v=n("li",null,[s("Sostituisci "),n("code",null,"example.tld"),s(" col nome del tuo dominio."),n("br"),n("code",null,"ssl_certificate"),s(" e "),n("code",null,"ssl_certificate_key"),s(" dovrebbero essere i percorsi ai file ottenuti con Let's Encrypt.")],-1),m=s("Se usi una "),b=s("CDN come Cloudflare"),_=s(`, elimina 4 linee partendo da: "If it's behind another reverse proxy or CDN, remove the following."`),y=a("<li>Se hai creato il file <code>/etc/nginx/sites-available/misskey.conf</code>, crea anche il symlink <code>/etc/nginx/sites-enabled/misskey.conf</code> usando il seguente comando:<br><code>sudo ln -s /etc/nginx/sites-available/misskey.conf /etc/nginx/sites-enabled/misskey.conf</code></li><li>Esegui <code>sudo nginx -t</code> per verificare che la configurazione sia ok.</li><li>Esegui <code>sudo systemctl restart nginx</code> per ricaricare Nginx.</li>",3),h=a(`<h1 id="esempio-di-configurazione-nginx" tabindex="-1"><a class="header-anchor" href="#esempio-di-configurazione-nginx" aria-hidden="true">#</a> Esempio di configurazione Nginx</h1><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># For WebSocket</span>
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
        <span class="token directive"><span class="token keyword">add_header</span> X-Cache <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(w,g){const e=p("RouterLink");return t(),c("div",null,[r,n("ol",null,[u,n("li",null,[k,n("ol",null,[v,n("li",null,[m,o(e,{to:"/it/docs/admin/cdn.html"},{default:l(()=>[b]),_:1}),_])])]),y]),h])}var S=i(d,[["render",f],["__file","nginx.html.vue"]]);export{S as default};
