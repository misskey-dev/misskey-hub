# CDN 설정하기
Misskey 인스턴스를 공개할 때, 저희는 [Cloudflare](https://www.cloudflare.com)와 같은 CDN 서비스를 사용하는 것을 추천합니다.

CDN을 활용하면 이러한 장점이 있습니다:
- 정적 콘텐츠를 캐시해, 서버의 부하를 줄여줍니다.
- 서버의 IP 주소가 덜 노출되어, DoS 공격과 같은 공격에 더 안전합니다.

## 캐싱
Misskey Web은 완전히 정적이며 서버 없이도 작동합니다. Misskey Web 클라이언트는 모두 CDN에 캐싱할 수 있습니다.  
Misskey API는 캐싱할 수 없습니다.

다음 설정을 CDN에 구성해야 합니다:
- `/api/*`를 제외한 모든 요청을 캐싱

::: tip
Misskey를 업데이트할 때, 모든 캐시를 삭제할 필요는 없습니다.
::::
