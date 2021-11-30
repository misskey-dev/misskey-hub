# Set up a CDN
When publishing your Misskey instance, we strongly recommend using a CDN such as [Cloudflare](https://www.cloudflare.com/).

Using a CDN has the following advantages
- You can have static content cached, which reduces the load on your server
- The IP address of the server is less exposed, which can mitigate DoS attacks etc.

## Caching
Misskey Web is completely static and does not require a server to run. Therefore the whole Misskey Web can be cached in a CDN.
The Misskey API cannot be cached.

You need to configure the following settings in your CDN
- Cache all requests except `/api/*`.

::: tip
You don't need to clear the cache when you update Misskey.
::::
