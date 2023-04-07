# Skonfiguruj CDN

Tworząc instancję Misskey radzimy skorzystać z usługi CDN jak na przykład [Cloudflare](https://www.cloudflare.com/).

Używająć CDNa pozwala

- Buforować statyczne materiały co obniża wykorzystanie serwera
- Adres IP twojego serwera jest mniej widoczny co może ograniczyć ataki typu DoS itp.

## Buforowanie

Misskey Web jest kompletnie statycznie i nie wymaga serwera do działania. Więc cała zawartość Misskey Web może być zbuforowana na CDNie.
API Misskey nie może być buforowane

Musisz więc na swoim CDNie skonfigurować następujące opcje

- Buforuj wszystkie żądania poza żądaniami `/api/*`. ( Cache all requests except `/api/*`.)

::: tip
Nie musisz czyścić pamięci podręcznej/bufora aktualizując Misskey.
::::
