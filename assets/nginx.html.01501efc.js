import{e as n}from"./app.916da0fd.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="nginx-configuration-example" tabindex="-1"><a class="header-anchor" href="#nginx-configuration-example" aria-hidden="true">#</a> Nginx configuration example</h1><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token comment"># Sample nginx configuration for Misskey</span>
<span class="token comment">#</span>
<span class="token comment"># 1. Replace example.tld to your domain</span>
<span class="token comment"># 2. Copy to /etc/nginx/sites-available/ and then symlink from /etc/nginx/sites-enabled/</span>
<span class="token comment">#    or copy to /etc/nginx/conf.d/</span>

<span class="token comment"># For WebSocket</span>
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
    <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:ssl_session_cache:10m</span><span class="token punctuation">;</span>

    <span class="token comment"># To use Let&#39;s Encrypt certificate</span>
    <span class="token directive"><span class="token keyword">ssl_certificate</span>     /etc/letsencrypt/live/example.tld/fullchain.pem</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/letsencrypt/live/example.tld/privkey.pem</span><span class="token punctuation">;</span>

    <span class="token comment"># To use Debian/Ubuntu&#39;s self-signed certificate (For testing or before issuing a certificate)</span>
    <span class="token comment">#ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;</span>
    <span class="token comment">#ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;</span>

    <span class="token comment"># SSL protocol settings</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-RSA-AES128-SHA:AES128-SHA</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,2);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
