import{_ as e,o as r,c as a,e as s}from"./app.75bd2b4e.js";const t={},n=s(`<h1 id="kubernetes-truenas\u3092\u4F7F\u3063\u305Fmisskey\u69CB\u7BC9" tabindex="-1"><a class="header-anchor" href="#kubernetes-truenas\u3092\u4F7F\u3063\u305Fmisskey\u69CB\u7BC9" aria-hidden="true">#</a> Kubernetes/TrueNAS\u3092\u4F7F\u3063\u305FMisskey\u69CB\u7BC9</h1><p>\u3053\u306E\u30AC\u30A4\u30C9\u3067\u306F\u3001Kubernetes \u3068 HelmChart\u3092\u4F7F\u7528\u3057\u305FMisskey\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002</p><div class="custom-container danger"><i class="fas fa-times"></i><p>\u4E00\u5EA6\u4F7F\u7528\u3092\u59CB\u3081\u305F\u30B5\u30FC\u30D0\u30FC\u306E\u30C9\u30E1\u30A4\u30F3\u30FB\u30DB\u30B9\u30C8\u540D\u3067\u306F\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u4F5C\u308A\u76F4\u3055\u306A\u3044\u3067\u304F\u3060\u3055\u3044\uFF01</p></div><h2 id="truecharts-\u3068-truenas-scale" tabindex="-1"><a class="header-anchor" href="#truecharts-\u3068-truenas-scale" aria-hidden="true">#</a> TrueCharts \u3068 TrueNAS Scale</h2><p>Misskey\u306EHelmCharts\u306FTrueNAS Scale\u3067\u4F7F\u7528\u3059\u308B\u305F\u3081\u306ETrueCharts\u3067\u516C\u958B\u3055\u308C\u3066\u3044\u307E\u3059\u304C\u3001HelmCharts\u3068\u3057\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><p><a href="https://truecharts.org/charts/description_list" target="_blank" rel="noopener noreferrer">TrueCharts</a> \u306E\u30B5\u30A4\u30C8\u306B\u306F\u5229\u7528\u53EF\u80FD\u306A\u3059\u3079\u3066\u306ECharts\u3084\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u65B9\u6CD5\u306A\u3069\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u307E\u305F\u3001\u4E0D\u660E\u306A\u70B9\u304C\u3042\u308C\u3070TrueCharts\u306E<a href="https://discord.gg/Ax9ZgzKx9t" target="_blank" rel="noopener noreferrer">Discord</a>\u30B5\u30FC\u30D0\u30FC\u3067\u8CEA\u554F\u3092\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><p>\u73FE\u5728\u3001Misskey\u306F<em>incubator</em> train\u3067\u9032\u884C\u4E2D\u3067\u3059\u3002</p><p>::: \u524D\u63D0\u6761\u4EF6</p><ul><li>TrueNAS Scale \u307E\u305F\u306F</li><li>Kubernetes\u30AF\u30E9\u30B9\u30BF\u30FC\u3068Helm</li></ul><p>:::</p><h2 id="truenas-scale" tabindex="-1"><a class="header-anchor" href="#truenas-scale" aria-hidden="true">#</a> TrueNAS Scale</h2><p><a href="https://truecharts.org/manual/guides/Adding-TrueCharts/" target="_blank" rel="noopener noreferrer">TrueCharts Guide</a>\u306E\u624B\u9806\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044\u3002</p><p><em>incubator</em> train\u3092\u8FFD\u52A0\u3057\u3001Misskey\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002</p><p>\u8A2D\u5B9A\u306E URL \u306E\u6B04\u306F\u5FC5\u305A\u5909\u66F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>TrueCharts\u306F\u30C7\u30D5\u30A9\u30EB\u30C8\u3067Traefik\u3092\u4F7F\u7528\u3057\u3066\u30B5\u30FC\u30D3\u30B9\u3092HTTPS\u3067\u5916\u90E8\u306B\u516C\u958B\u3057\u307E\u3059\u304C\u3001\u624B\u52D5\u3067\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u4ED6\u306E\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><h2 id="helm\u3092\u4F7F\u7528\u3057\u3066\u624B\u52D5\u3066\u3099\u69CB\u7BC9" tabindex="-1"><a class="header-anchor" href="#helm\u3092\u4F7F\u7528\u3057\u3066\u624B\u52D5\u3066\u3099\u69CB\u7BC9" aria-hidden="true">#</a> Helm\u3092\u4F7F\u7528\u3057\u3066\u624B\u52D5\u3067\u69CB\u7BC9</h2><p>TrueNAS Scale\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u306FHelm\u3092\u4F7F\u7528\u3057\u3066\u3001Misskey\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>values.yaml\u306E <code>misskey:</code> \u306E <code>url:</code> \u3092\u5FC5\u305A\u66F8\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u4ED6\u306E\u500B\u6240\u306F\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u66F8\u304D\u63DB\u3048\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u3053\u306EChart\u3067\u306F\u73FE\u5728Misskey\u30B3\u30F3\u30C6\u30CA\u5185\u3067TLS\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30B5\u30FC\u30D0\u30FC\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u4FDD\u8B77\u3057\u305F\u3044\u5834\u5408\u306F\u30EA\u30D0\u30FC\u30B9\u30D7\u30ED\u30AD\u30B7\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u63A8\u5968\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install misskey TrueCharts/misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="misskey-\u306E\u30A2\u30C3\u30D5\u309A\u30AF\u3099\u30EC\u30FC\u30C8\u3099" tabindex="-1"><a class="header-anchor" href="#misskey-\u306E\u30A2\u30C3\u30D5\u309A\u30AF\u3099\u30EC\u30FC\u30C8\u3099" aria-hidden="true">#</a> Misskey \u306E\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9</h2><p>Misskey \u3092\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u3059\u308B\u306B\u306F\u3001TrueNAS Scale \u306B\u5185\u8535\u3055\u308C\u3066\u3044\u308B\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001kubernetes \u3092\u624B\u52D5\u3067\u5B9F\u884C\u3057\u3066\u3044\u308B\u5834\u5408\u306F <a href="https://helm.sh/docs/helm/helm_repo_update/" target="_blank" rel="noopener noreferrer">helm repo update</a> \u307E\u305F\u306F <a href="https://helm.sh/docs/helm/helm_upgrade/" target="_blank" rel="noopener noreferrer">helm upgrade</a> \u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u53EF\u80FD\u6027\u3082\u8003\u3048\u3001\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u524D\u306B\u30C7\u30FC\u30BF\u3092\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3059\u308B\u3053\u3068\u3092\u5F37\u304F\u304A\u52E7\u3081\u3057\u307E\u3059\u3002</p>`,25),i=[n];function h(l,d){return r(),a("div",null,i)}var c=e(t,[["render",h],["__file","kubernetes.html.vue"]]);export{c as default};
