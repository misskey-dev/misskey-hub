# 设置CDN
我们推荐使用 [Cloudflare](https://www.cloudflare.com/) 来作为 Misskey 的 CDN。

使用 CDN 的好处
- CDN 可以缓存服务器中的静态内容，减少服务器中的存储占用。
- CDN 可以在大部分情况中隐藏服务器的真实 IP 地址，减少服务器被 DoS攻击的概率。

## 缓存内容
Misskey Web 是完全静态的，甚至不需要服务器来实时运行，所以整个 Misskey Web 可以完全存储在 CDN 中。
但是，Misskey 的 API 不能被缓存。

你需要在 CDN 服务提供商中配置如下信息
- 缓存所有除了 `/api/*` 的请求。

::: tip
当更新 Misskey 时，不用清理缓存。
::::
