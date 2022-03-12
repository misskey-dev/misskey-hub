import{r as s,o,c as n,a as e,b as c,F as r,d as a,e as i}from"./app.86231a81.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},l=e("h1",{id:"set-up-a-cdn",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set-up-a-cdn","aria-hidden":"true"},"#"),a(" Set up a CDN")],-1),u=a("When publishing your Misskey instance, we strongly recommend using a CDN such as "),p={href:"https://www.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},_=a("Cloudflare"),f=a("."),g=i('<p>Using a CDN has the following advantages</p><ul><li>You can have static content cached, which reduces the load on your server</li><li>The IP address of the server is less exposed, which can mitigate DoS attacks etc.</li></ul><h2 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h2><p>Misskey Web is completely static and does not require a server to run. Therefore the whole Misskey Web can be cached in a CDN. The Misskey API cannot be cached.</p><p>You need to configure the following settings in your CDN</p><ul><li>Cache all requests except <code>/api/*</code>.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>You don&#39;t need to clear the cache when you update Misskey.</p></div>',7);function m(k,x){const t=s("ExternalLinkIcon");return o(),n(r,null,[l,e("p",null,[u,e("a",p,[_,c(t)]),f]),g],64)}var w=d(h,[["render",m]]);export{w as default};