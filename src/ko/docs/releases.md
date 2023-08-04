# 릴리스 노트

미스키 릴리스에 대한 릴리스 노트입니다.

::: tip
최신 정보는 업데이트되지 않았을 수 있습니다. 최신 정보는 [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)(일본어, 영어) 또는 [일본어 Misskey Hub](../docs/releases.md)에서 확인해주세요.
:::

## 13.14.1

### General
- 초대 기능을 개선하였습니다
  * 과거에 발행한 초대 코드를 확인할 수 있게 되었습니다
  * 역할 별로 초대 코드의 발행 수 제한 및 발급 간격, 유효기간 등을 설정할 수 있게 되었습니다
  * 초대 코드를 생성한 유저와 사용한 유저를 확인할 수 있게 되었습니다
- 유저에게 역할을 기간제로 부여하였을 경우, 그 기간을 유저 모더레이션 페이지에서 확인할 수 있게 되었습니다
- identicon 생성을 무효화하여 서버 성능을 향상시킬 수 있게 되었습니다
- 서버의 머신 정보 공개를 옵션으로 변경하여 서버 성능을 향상시킬 수 있게 되었습니다

### Client
- deck UI의 컬럼 메뉴에서 안테나와 리스트 편집 화면을 열 수 있도록
- 드라이브 파일 메뉴에서 이미지를 크롭할 수 있게
- 이미지를 동영상과 같이 간단하게 숨길 수 있도록
- Enhance: 페이지의 노트 삽입에서 여러 개의 미디어가 포함된 노트를 표시할 수 있도록
- 원본 이미지를 유지하지 않고 업로드할 경우, webp로 업로드되도록 (Safari 이외)
- ’본 적이 있는 Renote를 생략하여 표시‘를 활성화한 경우, 자신의 노트에 대한 Renote를 생략하도록
- 개발자 모드 활성화 시, 드라이브의 폴더 및 파일을 우클릭하여 ID를 복사할 수 있도록 변경
- 인용 대상의 ‘더 보기’도 ‘숨기기’할 수 있도록 변경
- 프로필 URL을 복사하는 버튼을 추가プロフィールURLをコピーできるボタンを追加 #11190
- `CURRENT_URL`으로 현재 표시 중인 URL을 가져올 수 있도록 (AiScript)
- 유저의 ContextMenu에서 곧바로 안테나에 추가할 수 있도록 변경
- 팔로우 및 즐겨찾기 등록 중이 아닌 채널을 열 때에 개요 페이지를 먼저 보이도록 변경
- 전체화면 뷰어를 탭한 경우에도, 마우스 클릭 시와 동일하게 전체화면 뷰어를 닫도록 변경
- 오프라인 시의 화면에 새로고침 버튼을 추가
- Renote할 때에 개인별 공개 범위 기본값이 적용되도록 변경
- Deck 모드가 설정된 상태에서, 최상위 경로 외의 페이지에 접근했을 때에 간략화된 UI로 표시할 지의 여부를 선택할 수 있도록 변경
- 역할 설정 화면에서 역할 ID를 확인할 수 있도록
- 컨택스트 메뉴 표시와 관련한 성능 개선
- 팔로잉/팔로워 수 비공개 시의 표시를 개선
- 본문에 특정 MFM이 포함된 경우 자동으로 접어서 보이는 기능을, 답글이나 인용에서도 적용되도록 수정
  - position 이 대상에서 제외되었습니다
- AiScript를 0.15.0로 업데이트
- Fix: 서버 통계가 90도 회전되어 보이는 문제
- Fix: 비 로그인 시에 로그인 정보가 필요한 페이지에 접근할 경우 오류가 발생하는 문제를 해결
- Fix: sparkle 내부의 하이퍼링크를 클릭할 수 없는 문제를 해결
- Fix: ZenUI에서 팝업의 표시 위치가 올바르지 않은 문제를 해결
- Fix: 페이지 이동 시, 이전 페이지의 스크롤 위치가 유지되지 않는 문제를 해결
- Fix: 드라이브의 폴더에 대한 Pagination이 올바르게 작동하지 않는 문제를 해결 (#11180)
- Fix: 긴 문장을 작성할 때에, 미리보기가 화면 표시 영역을 벗어나는 문제를 해결
- Fix: ’시스템 폰트 사용‘ 설정이 올바르게 반영되지 않는 문제를 해결
- Fix: 투표 종료 시의 푸시 알림이 올바르게 표시되지 않는 문제를 해결
- Fix: MasterVolume뿐만 아니라 각종 알림음의 음량 설정이 0일 때에도 HTMLAudioElement.play가 실행되지 않도록 변경

### Server
- JSON.parse 의 호출 횟수를 줄임으로써 스트리밍 성능을 개선
- nsfwjs 의 모델이 중복 로딩되어 메모리가 낭비되는 문제를 해결
- 연합 발송 작업의 성능 개선（Lock 구조 개편 및 Redis 캐시 활용）
- featured 노트의 signedGet 횟수를 줄임
- ActivityPub의 서명용 키의 길이를 2048bit로 변경하여 성능을 개선 (신규 계정부터)
  - 역주: 기존의 서명용 키는 RSA 4096bit 였습니다.
- 리모트 서버의 미디어 캐시를 민감한 파일에 대해서만 무효화하는 옵션을 추가
- Meilisearch에 Index할 노트의 범위를 설정할 수 있도록 변경
  - 역주: default.yml에서 `local`, `global` 또는 호스트 목록으로 지정 가능하며, 지정되지 않을 경우 로컬 노트만 인덱싱됩니다.
- 노트를 내보내기할 때에 파일 상세 설명을 포함하도록
- Port를 통한 접속 외에 Unix socket 지원 추가
- 설정 파일에서 ioredis에서 사용 가능한 모든 옵션을 지정할 수 있도록
- Fix: 내보내기한 커스텀 이모지의 zip 파일 크기가 클 경우 정상적으로 불러와지지 않는 문제를 해결
- Fix: 리모트 서버에 무의미한 ActivityPub 객체를 보내는 문제를 수정
- Fix: 노트 삭제 시 Meilisearch의 인덱스도 함께 삭제
- Fix: 비영어 환경에서 PostgreSQL의 에러 핸들링을 수정
- Fix: 인스턴스 아이콘을 base64로 지정했을 경우의 작동을 수정
- Fix: 로컬의 `Person`을 가리키는 `acct` URI 를 분석할 때 발생하는 버그를 제거
- Fix: 비활성화된 안테나를 다시 활성화하는 방법이 없는 문제를 해결

## 13.13.2
릴리즈 일시: 2023/06/13

### 일반

- 오류 및 404 오류 시 표시되는 이미지를 서버 관리자가 변경할 수 있게 되었어요
- 역할 별 사용자 목록을 비공개로 전환할 수 있게 되었어요
- 사용자 통계 표시 기능 제거 (서버의 부하가 매우 높음)

### 클라이언트

- Fix: 탭이 백그라운드에 있어도 스트림이 중단되지 않도록 수정

### 서버

- Fix: 캐시가 계속 쌓이지 않도록 수정

## 13.13.1
릴리즈 일시: 2023/06/06

### 클라이언트

- Fix: 탭이 활성 상태인 동안 Timeline 등의 스트림이 중단되지 않도록 수정

### 서버

- Fix: api/meta에서 'TypeError: JSON5.parse is not a function' 오류가 발생하는 문제를 해결

## 13.13.0
릴리즈 일시: 2023/06/05

### 일반

- 각 커스텀 이모지마다...
    - 특정 역할의 유저만 사용 가능하도록 설정 가능
    - 각 이모지의 연합 여부를 설정 가능
    - 각 이모지를 민감한 이모지로 설정 가능
    (설정에서 민감한 이모지로 지정된 리액션을 수신하지 않도록 설정할 수 있습니다)
- '타임라인에 노트의 답글을 표시' 설정을 계정에 저장하지 않음
    - 앞으로는 API 호출 및 스트리밍 연결 시에 설정하여야 합니다.
- 리스트를 공개할 수 있게 되었어요

### 클라이언트

- 리액션을 취소하거나 변경할 때 확인 대화 상자를 표시하도록 변경
- 개발자 모드 추가
- AiScript를 0.13.3로 업데이트
- Deck UI를 사용하는 경우 '/' 이외의 접근 시 Zen UI로 표시되도록 변경
    - 메인 컬럼을 설정하지 않은 경우의 문제를 해결
- 해시태그 노트 목록 페이지에서 해당 해시태그로 게시하는 버튼 추가
- 계정 초기 설정 마법사에 돌아가기/나중에 버튼 추가
- 서버에 커스텀 이모지가 많은 경우의 성능 개선
- Fix: URL 미리보기에서 정보를 가져올 수 없을 때의 동작을 해결
- Fix: Safari, Firefox에서 새로 가입할 때 패스워드 매니저에 이메일이 등록되는 동작을 해결
- Fix: 역할 타임라인이 비활성화된 상태에도 게시물이 노출되는 문제를 해결
- Fix: 역할 타임라인에서 모든 게시물이 흐르는 문제를 해결
- Fix: '액세스 토큰 관리' 화면에서 앱 정보가 표시되지 않는 문제를 해결
- Fix: Firefox에서 이모지 선택기의 Tab 키 포커스 문제를 해결
- Fix: 테마 색상에 따라 팔로우 버튼의 가시성이 나빠지는 문제를 해결
    - 새로운 속성 'fgOnWhite'이 추가되었습니다.

### 서버

- bull을 bull-mq로 업그레이드하여 작업 큐 성능을 개선
- 타임라인 등의 스트리밍 성능을 개선
- Fix: 비활성화된 안테나에 액세스할 경우 다시 활성화되도록 해결
- Fix: 공지사항 이미지 URL을 비워 둘 수 없는 문제를 해결
- Fix: i/notifications의 sinceId가 작동하지 않는 문제를 해결
- Fix: page의 핀 해제가 불가능한 문제를 해결

## 13.12.2
릴리즈 일시: 2023/05/12
::: warning
이 버전의 Misskey부터 Meilisearch의 설정에 'index'가 필요합니다.

값으로는 Misskey 서버의 호스트명을 권장합니다(알파벳, 하이픈, 언더스코어만 사용 가능, 예: 'misskey-io')
과거에 생성된 'notes' 인덱스는 '<index 이름>---notes'로 이름 변경이 필요합니다. (예: 'misskey-io---notes')

주의: 지정하지 않을 경우 undefined---notes 와 같이 인덱싱되며, 과거에 생성된 인덱스를 변환하지 않을 경우 이전 게시물이 검색되지 않습니다.
:::

### 일반

- 게시한 콘텐츠를 AI에 의한 수집 및 학습을 경감하는 옵션을 추가

### 클라이언트

- 노트 검색에 특정 사용자를 지정할 수 있도록 변경
- 계정 초기 설정 마법사에 개인 정보 설정 추가
- 리텐션 비율 차트에 꺾은선 그래프 추가
- Fix: 블러 효과를 활성화했을 때 기기가 과부화되는 문제를 해결
- Fix: 페이지에서 이미지 블록에 이미지를 설정할 수 없는 문제를 해결
- Fix: 색상 막대가 답글에 표시되지 않는 문제를 해결
- Fix: 채널 내 검색 상자가 오작동하는 문제를 해결
- Fix: 리텐션 차트의 렌더링 문제를 해결
- Fix: 리액션 효과의 렌더링 문제를 해결

### 서버

- 민감한 단어 등록에 AND, 정규 표현식을 사용 가능
- Fix: 하나의 Meilisearch 서버에 여러 개의 Misskey 서버를 사용할 수 없는 문제를 해결

## 13.12.1
릴리즈 일시: 2023/05/09

- 유저 선택 다이얼로그가 표시되지 않는 문제를 해결
- 모더레이션: 프로필 화면의 모더레이션 노트의 표시를 조정
- 리모트 서버의 정보를 갱신할 수 없는 문제를 해결

## 13.12.0
릴리즈 일시: 2023-05-09

### 중요

- 이 버전부터 서버 요구 사항이 **Node.js 18.16.0**으로 변경됩니다.

### 공통

- **계정 이사(팔로워 이전)** 기능 지원
- 게시물 검색에 **Meilisearch**를 사용
- 회원 가입 이전에 서버 규칙을 간단하게 표시하는 **서버 규칙** 기능 추가
- 유저별로 비공개 노트를 남길 수 있는 **유저 노트** 기능 추가
    - 특정 유저에 대해 나만 볼 수 있는 메모를 남길 수 있습니다.
    (나에게도 남길 수 있습니다.)
    - 프로필 혹은 [유저 메뉴](https://github.com/misskey-dev/misskey/commit/e014c91899ba899fe85ce23ee6d5b2074891a2d9)에서 편집할 수 있습니다.
    데스크톱에서는 사용자명 우측의 버튼을 눌러서 편집도 가능합니다.
- 채널을 대표하는 색상을 설정할 수 있게 되었습니다
    - 설정한 색상은 채널에 게시된 노트에 인디케이터로 나타납니다.
- 채널을 아카이브할 수 있게 되었습니다
    - 아카이브된 채널은 채널 목록이나 검색 결과에 표시되지 않게 되며, 새로운 노트를 작성할 수 없게 됩니다.
- 안테나 내보내기/가져오기가 가능해졌습니다
- 역할 타임라인의 공개 여부를 역할마다 설정할 수 있게 되었습니다
    - 기본값은 비공개입니다. 표시하려면 업데이트 이후 활성화하여 주십시오.
- 특정 역할에 미디어 열람주의를 강제하는 옵션 추가
    - 기존에 업로드한 미디어는 해당되지 않으므로 주의가 필요합니다.
- 유저 별 모더레이션 노트를 각 유저 페이지에서 열람 및 편집할 수 있게 되었습니다
- 커스텀 이모지의 라이선스 정보를 일괄 설정할 수 있게 되었습니다
- 관리자에 의해 지정한 유저명을 예약할 수 있게 되었습니다
- Fix: 팔로우 요청을 처리한 뒤에도 알림창에 계속해서 남는 문제를 해결했습니다

### 클라이언트

- 계정을 새로 생성할 때에 **초기 설정 마법사**를 표시하게 되었습니다
- **채널 내 검색**이 가능하게 되었습니다
- 알림 표시를 사용자화할 수 있게 되었습니다
- 드라이브 파일 목록에서 지정한 파일을 첨부하여 노트를 작성할 수 있게 되었습니다
- 노트 메뉴에서 Renote한 유저 목록을 표시하는 기능 추가
- 이모지 검색 창에서 `:emojiname1::emojiname2:`의 형식으로 검색할 수 있게 되었습니다
- **데이터 절약 모드** 추가
    - 활성화하면 모든 미디어를 숨깁니다
        - 데이터 절약 모드가 켜져 있는 경우, 미디어를 열람하기 전에 파일 크기를 먼저 표시합니다.
        - 데이터 절약 모드로 인해 숨김 처리된 미디어는 열람주의 문구가 표시되지 않습니다.
    - 모든 이미지에 대해 Blurhash 로드를 강제합니다
- 열람주의로 설정된 미디어를 보이기로 변경한 뒤에도 열람주의 알림을 미디어 한 쪽에 계속 표시하도록 변경
- 모더레이션: 첨부된 미디어를 곧바로 열람주의로 지정하는 기능 추가
- 프로필의 ‘추가 정보’의 순서 변경 및 삭제 기능 추가
- 타임라인에서 표시되는 미디어의 상하 비율을 설정할 수 있게 되었습니다.
- 새로운 도전과제 추가
- **AiScript 0.13.2**로 업데이트
- Fix: AiScript API에서 `Mk:dialog` 메서드가 아무 것도 반환하지 않던 것에서 `NULL` 을 반환하도록 수정
- Fix: 1:1 비율이 아닌 리액션의 알림 배지가 한 쪽에 쏠려 있는 문제를 해결 (중앙으로 이동)
- Fix: 리액션에 커서를 올릴 때 사용자 목록에서 고양이귀가 떨어진 것 처럼 보이는 문제 해결
- Fix: 열람주의로 설정된 미디어 위에 표시되는 ‘더보기’ 버튼을 누르기 쉽게

### 서버
- `channel/search`의 쿼리가 비어 있는 경우 모든 채널을 반환합니다
- 환경변수 `MISSKEY_CONFIG_YML` 을 통해 Misskey 설정 파일을 `default.yml` 이외로 변경할 수 있게 되었습니다
- Fix: 특정 상황에서 다른 서버의 정보를 가져올 수 없는 문제를 해결
- Fix: 내보내기했을 때의 파일 확장자가 unknown으로 설정되는 문제를 해결
- Fix: Content-Disposition의 파싱 과정에서 문제가 발생하였을 때에 다운로드가 종료되지 않는 문제 해결
- Fix: `i/update` API에서 `avatarId` 및 `bannerId` 파라미터를 `null`로 지정했음에도 아바타 및 배너가 초기화되지 않는 문제를 해결
- Fix: `.wav`, `.flac` 확장자의 미디어 재생이 불가능한 문제를 해결
    - 새로 업로드한 파일부터 적용됩니다
- Fix: 정지된 유저가 일부 API의 반환값에 포함되는 문제를 해결
- Fix: 서버 메모리 사용량을 산출하는 방법을 `used - buffers - cached` 에서 `total - available` 로 변경
    - 일부 서버 환경에서 메모리 사용량이 올바르게 계산되지 않는 현상 해소

## 13.11.3
릴리즈 일시: 2023/04/13

### 공통

- 지정한 역할을 가진 유저의 노트를 확인할 수 있는 **역할 타임라인** 추가
    - 덱 모드에서 컬럼으로써 추가 가능
- 커스텀 이모지 관련 보완
    - 노트 API 등에 포함되는 emojis(`populateEmoji`의 결과)에서 (프록시된 URL이 아닌) 원래 이모지의 URL을 가리키도록 수정
    - MFM에서 `x3`, `x4` 를 사용하거나, `scale.x/y`의 값이 2.5 이상으로 지정될 경우 원본화질 이모지를 사용하도록 변경
- 간헐적으로 커스텀 이모지로 리액션이 불가능한 문제를 해결

### 클라이언트

- 채널의 ‘고정된 노트’의 순서가 올바르지 않은 문제를 해결

### 서버

- 팔로우 가져오기와 같은 대량의 가져오기 동작이 발생할 경우, 별도의 큐를 사용하도록 변경
- Misskey Web에서 서버측 오류 표시 방식을 개선
- Misskey Web에서 서버측 에러의 로그를 남기도록 변경
- 노트 생성 시 안테나 삽입 과정을 최적화
- 안테나와 역할 타임라인에서 `until` / `since` 프로퍼티가 동작하도록 변경

## 13.11.2
릴리즈 일시: 2023/04/11

### 중요 - 13.11.x에서 업데이트 시
[Can't react with custom emoji リアクションできない · Issue #10502 · misskey-dev/misskey](https://github.com/misskey-dev/misskey/issues/10502#issuecomment-1502790755)

13.11.0 또는 13.11.1에서 13.11.2 이후로 업데이트할 경우, Redis에서 커스텀 이모지의 캐시를 삭제하여야 합니다.

```bash
# example.com은 운영 중인 도메인 이름으로 변경
# Docker 환경에서는 다음 명령으로 Redis CLI 진입 가능
# sudo docker compose run --rm redis redis-cli
redis-cli> del example.com:singlecache:localEmojis
```

### 공통
- 채널 검색용 페이지 추가

### 클라이언트
- 광고를 항상 표시하는 옵션 추가
- 유저 페이지에서 미디어 목록이 표시되지 않는 문제 해결
- Webhook, 연동 어플리케이션 목록에서 컨텐츠가 중복되어 표시되는 문제 해결
- iPhone에서 이모지 선택창이 올바르게 표시되지 않는 문제 해결
- iPhone에서 위젯 드로어의 ‘위젯 편집’ 버튼의 위치를 누르기 쉬운 곳으로 조정
- 노트 작성 폼의 디자인 개선
- Pagination: 갤러리의 인기 게시물이 무한정 나열되는 문제 해결

### 서버
- `channels` / `search` API Endpoint 추가
- API 파라미터 크기 제한을 32kb에서 1mb로 완화
- 푸시 알림 성능 개선
- 로컬 커스텀 이모지의 캐시가 작동하지 않는 문제 해결
- 안테나 노트, 채널 노트, 알림이 올바르게 작동하지 않는 문제 해결
- 로컬 타임라인 Streaming에서 서버 측 에러 로그가 노출되는 문제 해결

### Service Worker
- ‘푸시 알림이나 메시지를 읽은 뒤 푸시 알림을 삭제’ 기능 부활
    - ‘푸시 알림이 갱신되었습니다’를 표시할 때 서버 호스트(주소)와 버전을 같이 보이도, 일정 시간 후 자동으로 없어지지 않도록 변경
- ‘도전과제’의 푸시 알림을 지원
- 푸시 알림의 액션을 통해 기존 클라이언트의 노트 작성 폼을 여는 루틴을 보완
- 대량의 푸시 알림을 지운 때, 알림 하나하나 notifications/mark-all-as-read를 보내는 문제 해결

## 13.11.1
릴리즈 일시: 2023/04/09

::: warning
**리액션 관련 오작동으로 인해 13.11.0 - 13.11.1 로의 업데이트 및 다운그레이드를 권장하지 않습니다.**
만약 이 버전에서 13.11.2 이상으로 업데이트하려는 경우, 다음 링크의 절차에 따라 Redis 캐시를 삭제하여야 합니다.
[중요 - 13.11.x에서 업데이트 시](#_13-11-2)
:::

### 공통
- 과거의 채널 게시물을 확인할 수 있도록 변경

### 클라이언트
- PWA의 이모지 선택기 위치가 시스템 조작부(홈버튼)과 겹치지 않도록 조정
- Pagination 관련 문제 해결
    - 리스트 관리 화면에서 리스트가 무한정 나열되는 문제 해결
    - 자신의 클립이 무한정 나열되는 문제 해결
    - 채널의 즐겨찾기가 무한정 나열되는 문제 해결
    - ‘둘러보기’ 탭의 고정된 유저가 무한정 나열되는 문제 해결
- 채널을 만들 수 없는 문제 해결
- 유저 프리뷰가 표시되지 않는 문제 해결

### 서버
- 간헐적으로 알림 로딩에 실패하는 문제 해결
- 간헐적으로 리액션을 할 수 없는 문제 해결
- ID가 aid 이외로 지정되어있을 때 발생하는 오작동 해결
- 특정 조건 하에 연합 중인 인스턴스로 모든 액티비티 전송이 되지 않는 문제 해결

## 13.11.0
릴리즈 일시: 2023/04/08

### 중요
- 이 버전부터 서버 요구 사항이 **Redis 7.x**로 변경됩니다.
- 업데이트 이후, 알림 및 안테나에 수집된 데이터가 모두 삭제됩니다.

### 공통
- 채널을 즐겨찾기할 수 있는 기능 추가
    - 타임라인의 채널 선택 메뉴 등에서도 즐겨찾기한 안테나를 표시하도록 변경됩니다. 채널을 즐겨찾기에 등록하려면 각 채널의 페이지의 개요 탭에서 ⭐ 버튼을 눌러 주세요.
- 채널에 노트를 고정할 수 있는 기능 추가

### 클라이언트
- 게시 폼의 디자인 개선
- 검색 페이지에서 URL을 입력할 때 '조회' 작업을 수행
    - @lapy 및 http://k.lapy.link/@lapy 등과 같은 방식의 조회가 다시 가능해 졌습니다
- 노트의 리액션을 크게 표시하는 옵션 추가
- 갤러리 목록에서 미디어 표시와 마찬가지로 NSFW 설정을 반영하도록 변경 (마우스 커서를 올려 표시 가능)
- 오브젝트 스토리지 설정 화면 구성을 직관적으로 변경
- 광고/공지사항을 새로 등록할 때에 마구 증식하는 문제 수정
- '냐는 고양이다냥'(isCat)와 관련된 변경사항
    - 'UI에 흐림 효과 사용'을 활성화할 경우 고양이 귀가 프로필 사진 영역을 침범하지 않도록 조정
    - 'UI의 애니메이션 줄이기'를 활성화할 경우 쓰담쓰담 애니메이션을 표시하지 않도록 변경
- 창모드에서 최소화(접기) 기능 추가

### 서버
- PostgreSQL의 레플리케이션을 지원
    - 설정 파일의 dbReplication 및 dbSlaves로 설정할 수 있습니다
- 이벤트용 Redis를 다른 서버로 분리할 수 있도록 변경
- 작업 대기열용 Redis를 다른 서버로 분리할 수 있도록 변경
- 서버의 전반적인 최적화
- 노트 작성 관련 최적화
- 안테나 타임라인 표시 최적화
- 채널 타임라인 표시 최적화
- 알림과 관련된 전반적인 성능 향상
- Webhook의 Content-Type이 `text/plain`으로 되어 있는 문제 수정

## 13.10.3
릴리즈 일시: 2023/03/25

### Changes
- 오브젝트 스토리지의 리전 설정이 필수로 변경되었습니다
  - 리전이 없는 서비스의 경우 us-east-1을 지정하십시오
  - 값이 비어 있을 경우, 설정 파일 또는 환경변수에서 우선 가져옵니다
    - 예시) ~/aws/config, AWS_REGION

### General
- 조건부 역할의 조건으로 '노트 수가 ~ 이하'/'노트 수가 ~ 이상'을 추가
- 리액션을 지원하지 않는 ActivityPub 구현체에서의 Like 액티비티에 대한 처리를 👍에서 ♥로 변경

### Client
- 클립 버튼을 노트 액션에 추가할 수 있도록
- 민감한 단어 목록에 고정된 유저의 ID가 표시되는 문제를 해결

### Server
- 리모트 유저의 차트(통계 자료)를 비활성화하는 옵션을 추가
- 리모트 서버의 차트(통계 자료)를 비활성화하는 옵션을 추가
- 드라이브 차트는 로컬 유저에 대해서만 생성하도록 변경
- 빈 안테나를 생성할 수 없도록 변경

## 13.10.2
릴리즈 일시: 2023/03/22

### Server
- 간헐적으로 커스텀 이모지를 편집 사항을 저장할 수 없는 문제를 해결

### Client
- 드라이브 파일의 메뉴가 정상적으로 동작하지 않는 문제를 해결

## 13.10.1
릴리즈 일시: 2023/03/22

### Client
- Misskey Play의 Play 버튼을 눌렀을 때에 오류가 발생하는 문제를 해결

## 13.10.0
릴리즈 일시: 2023/03/22

### General
- 유저별 Renote 뮤트
- 노트 별로 이모지 리액션을 수신할 지 여부를 설정 가능
- 클립 즐겨찾기
- 노트 검색의 이용 가능 여부를 역할로 제어 (기본값은 꺼짐)
- 역할의 정렬 순서를 관리자가 지정 가능
- 커스텀 이모지에 라이선스 정보를 부여
- 지정한 문자열을 포함한 노트의 공개 범위를 홈 이하로 강제하는 기능 (민감한 단어)
- 사용되지 않는 안테나를 자동으로 정지

### Client
- 설정에서 자신에게 할당된 역할을 확인할 수 있도록
- 광고 목록 페이지 추가
- 드라이브 정리 페이지 추가
- DM을 작성할 때에 멘션을 자동으로 추가하도록
- 팔로우 신청 버튼의 디자인 개선
- 스티커 메모 위젯의 높이를 조절할 수 있게
- AP 오브젝트를 조회하는 기능과 유저/노트를 검색하는 기능을 분리
- 내비게이션 바에 추가할 수 있는 항목에 '프로필'을 추가
- 내비게이션 바 설정에서 드래그&드롭으로 순서 변경
- 작업 대기열에서 모든 큐를 다시 시도하는 기능 추가
- AiScript를 0.13.1으로 갱신
- oEmbed를 지원하는 웹 사이트의 미리보기에 대한 지원 추가
	- YouTube를 oEmbed로 로드하여, 미리보기에서 공유 버튼을 누르면 운영 체제의 공유 화면을 표시
	- ([Firefox에서 Spotify의 미리보기를 열 때에, 미리듣기 구간만 재생되는 문제](https://bugzilla.mozilla.org/show_bug.cgi?id=1792395)가 있습니다)
	- (이미 브라우저에 캐시된 링크에 대해서는 이전의 미리보기가 표시됩니다. 이 경우에는 브라우저의 캐시를 비운 후 다시 시도해 주십시오.)
- 프로필에서 설정한 정보를 삭제할 수 없는 문제를 해결
- 역할에서 광고를 비활성화하면 admin/ads 페이지에서 광고 이미지가 표시되지 않는 문제를 해결
- /api-console 페이지에 접근할 경우 404가 표시되는 문제를 해결
- Safari에서 플러그인이 여러 개 있는 경우, 플러그인이 정상적으로 로드되지 않는 문제를 해결
- Bookwyrm 유저의 프로필 페이지에서 '리모트에서 표시'를 눌러도 반응이 없는 문제를 해결
- 비로그인 시 'Misskey에 대하여' 에서 표시되는 항목을 변경
- PC 버전에서 '설정'과 '제어판'의 링크를 두 번 이상 클릭했을 때 빈 페이지가 표시되는 문제를 해결

### Server
- OpenAPI 엔드포인트 부활
- WebP/AVIF/JPEG의 web 공개 이미지를, 서버 측에서는 JPEG 말고 WebP로 변환
- 애니메이션이 포함된 이미지의 썸네일을 생성
- 활성 유저 수 차트의 기록 상한치를 확장
- Play의 소스 코드 최대 문자수를 2배로 확장
- 액티비티 전송 시 리모트 서버가 410 Gone을 반환할 경우 자동으로 '액티비티 보내지 않기'를 활성화
- avatarBlurHash/bannerBlurHash의 타입을 'string'으로 한정
- 타임라인 로드 시의 성능을 개선
- SMTP 설정 관련 문자수 제한을 완화
- API 상에서 `visibility`를 `followers`로 설정하여 Renote할 경우 연합 및 삭제 등이 정상적으로 동작하지 않는 문제를 해결
- AWS S3에서 파일을 삭제할 때에, NoSuchKey 오류가 발생할 경우 더 이상 진행할 수 없게 되는 문제를 해결
- `disableCache: true`를 설정했을 경우, 이모지 관리 화면 조작할 때 마다 오류가 표시되는 문제를 해결
- 간헐적으로 Retention 분석이 올바르게 작동하지 않는 문제를 해결
- 빈 안테나를 작성할 수 없도록
- 특정 조건에서 신고 열람이 불가능한 문제를 해결
- 커스텀 이모지의 이름에 임의의 문자를 사용할 수 없도록 변경

## 13.9.2
릴리즈 일시: 2023/03/06

### Improvements
- 클립, 채널 페이지에 공유 버튼을 추가
- '채널 타임라인 상단에 글 작성란을 표시' 옵션을 추가
- 브라우저에서 미디어 프록시(/proxy)에서 파일을 저장했을 때에, 되도록 원본 파일명을 유지하도록
- 드라이브에 파일을 'URL에서 업로드'할 때, content-disposition의 filename이 정의되어 있을 경우 파일명으로 우선 사용
- Identicon을 로컬과 리모트 양쪽에서 동일한 패턴으로 생성
  - 이전에 표시된 Identicon과 다른 이미지로 변경됩니다
- 서버의 성능 개선

### Bugfixes
- 역할 권한으로 '일반 유저'를 설정할 수 없는 문제를 해결
- 유저 페이지에서 뱃지가 많을 경우 적절히 줄바꿈하여 표시 @arrow2nd
- fix(client): '발견하기'의 역할 목록에서 조건부 역할을 표시하지 않도록
- macOS에서 Dev Container가 동작하지 않는 문제를 해결 @RyotaK

## 13.9.1
릴리즈 일시: 2023/03/03

### Bugfixes
- 간헐적으로 노트에 첨부된 파일이 표시되지 않는 문제를 해결

## 13.9.0
릴리즈 일시: 2023/03/03

### Improvements
- 기간제 역할
- 안테나의 검색 범위에 CW(내용 경고)를 포함
- 노트 조작부를 커서를 올렸을 때에만 표시하는 옵션을 추가
- 효과음 추가
- enhance(client): MFM x2, scale, position이 포함된 노트를 접은 상태로 표시
- 서버의 성능을 개선

### Bugfixes
- 외부 미디어 프록시를 사용할 때에 아바타 크롭이 불가능한 문제를 해결
- fix(server): 메일 주소를 업데이트할 때에 유효성 검증이 올바르게 수행되지 않는 문제를 해결
- fix(server): 채널 내부에서 뮤트가 올바르게 작동하지 않는 문제를 해결
- 푸시 알림에서 커스텀 이모지 리액션이 표시되지 않는 문제를 해결

## 13.8.1
릴리즈 일시: 2023/02/26

### Bugfixes
- 모바일 환경에서 드로어 메뉴가 표시되지 않는 문제를 해결

## 13.8.0
릴리즈 일시: 2023/02/26

### Improvements
- 채널 내 하이라이트
- 홈 타임라인의 성능 개선
- Renote했을 때의 표시를 개선
- 백그라운드에서 일정 시간이 경과하였을 경우 페이지네이션의 아이템 갱신을 중단
- enhance(client): MkUrlPreview의 닫기 버튼을 보기 쉽게 변경
- 팔로워 해제 다이얼로구 추가
- enhance(client): improve clip menu ux
- 검색 화면의 통합
- enhance(client): 노트 메뉴에서 유저 메뉴로 곧바로 접근 가능하도록
- photoswipe 표시 상태에서 '뒤로가기' 조작 시 이전 화면으로 돌아가지 않도록 변경

### Bugfixes
- Windows 환경에서 swc를 사용할 경우 정상적으로 빌드되지 않는 문제를 해결
- fix(client): Android Chrome에서 PWA로 설치할 수 없는 문제를 해결
- 모르는 유저의 deleteActor 액티비티를 무시하도록 변경
- fix(server): notes/create에서 fileIds 매개변수와 실제로 발견된(사용 가능한) 파일 수가 다른 경우 에러를 표시하도록
- fix(server): notes/create의 유효성 검증이 동작하지 않는 문제를 해결
- fix(server): 오류 발생 시 Stack trace를 반환하지 않도록 변경

## 13.7.5
릴리즈 일시: 2023/02/24

### Note
13.7.0 이전 버전에서 직접 이 버전으로 업데이트할 경우, 알림이 **삭제되지 않습니다.**

### Improvements
- 혼란을 불러올 여지가 있는 '로컬에만'을 '연합하지 않음'으로 변경
- Frontend: 스마트폰 및 태블릿에서 '채널'의 노트 작성 폼을 열었을 때 자동으로 포커스하지 않도록 변경

### Bugfixes
- 모든 알림이 삭제되는 문제를 해결

## 13.7.3
릴리즈 일시: 2023/02/23

### Note
~~13.7.0 이전에서 직접 이 버전으로 업데이트할 경우 모든 알림이 삭제되지 않습니다~~ **삭제됩니다.**

### Improvements

### Bugfixes
- Client: '캐시 비우기' 후 로컬 커스텀 이모지가 표시되지 않는 문제를 해결
- Client: 이전에 알림 설정화면에서 그룹 초대를 활성화해놓은 적이 있는 경우, 알림 표시에 실패하는 문제를 해결
- Client: 알림 설정 화면에 남아 있떤 폐지된 항목 삭제

## 13.7.2
릴리즈 일시: 2023/02/23

### Note
13.7.0 이전에서 업데이트할 경우 모든 알림이 삭제됩니다.

### Improvements
- enhance: make pwa icon maskable
- chore(client): 커스텀 이모지의 표시 크기를 수정

### Bugfixes
- 간헐적으로 마이그레이션에 실패하는 문제를 해결

## 13.7.1
릴리즈 일시: 2023/02/23

### Improvements
- pnpm build에서는 swc를 사용하도록

### Bugfixes
- NODE_ENV=production 환경 변수에서 빌드할 수 없는 문제를 해결

## 13.7.0
릴리즈 일시: 2023/02/22

### Changes
- '대화' 기능이 삭제되었습니다

### Improvements
- Server: URL 미리보기（summaly）는 프록시를 경유해서 표시하도록
- Client: 2단계 인증 설정 UI을 개편
- 보안 키의 이름을 변경할 수 있도록 수정
- enhance(client): Misskey Play의 프리셋에 '퀴즈'를 추가
- 광고 시작 시기를 설정할 수 있도록 변경
- '발견하기'에서 공개 역할의 목록과 그 멤버를 열람할 수 있는 탭 추가
- enhance(client): MFM의 x3, x4가 포함된 노트를 접힌 상태로 표시
- enhance(client): make possible to reload page of window

### Bugfixes
- 유저 검색 다이얼로그에서 로컬 유저에 한정하여 검색할 수 없는 문제를 해결
- fix(client): MkHeader 및 덱 UI의 컬럼에서 채널 목록을 선택했을 때, 최대 5개까지만 표시되는 문제 해결
- 관리 화면에서 광고가 10개 이상 표시되지 않는 문제를 해결
- Moderation note가 저장되지 않은 문제를 해결
- 유저 해시태그 검색이 작동하지 않는 문제를 해결

## 13.6.1
릴리즈 일시: 2023/02/12

### Improvements
- 'UI의 애니메이션을 줄이기' 옵션이 활성화되었을 경우, MkPageHeader의 탭 애니메이션을 무효화
- Backend: ActivityPub 정보가 CORS에 의해 블록되지 않도록 헤더를 추가
- enhance: 요청 빈도 제한을 0%로 설정할 수 있도록 변경
- 채널 내 Renote 버튼을 추가

### Bugfixes
- Client: 유저 페이지에서 활동 그래프를 보지 못하는 문제를 수정

## 13.6.0
릴리즈 일시: 2023/02/11

### Improvements
- MkPageHeaderをごっそり変えた
  * 모바일 환경에서는 헤더가 상하로 분할되어, 하단에 탭을 표시
  * iconOnly인 탭 항목이 활성화된 경우에는 탭 제목을 표시
  * 메인 타임라인에서는 제목을 표시하지 않음
  * 메인 타임라인 및 모바일에서 표시되는 좌측 상단의 아바타를 선택하면 계정 메뉴가 열리도록
- 유저 페이지의 노트 일람을 별도 탭으로 분리
- 조건부 역할도 배지로 표시할 수 있도록
- enhance(client): 역할을 간단하게 부여할 수 있도록 (프로필 화면에서 곧바로 부여 가능)
- enhance(client): 열람한 적이 있는 노트의 Renote는 생략하여 표시하는 옵션 추가
- enhance(client): 다른 유저에게 불편을 끼칠 가능성이 있을 경우, 게시하기 전에 경고를 표시
- 리액션 수가 많을 때, 그 일부만 표시되도록 변경
- 일부 MFM 구문을 opt-out으로 (기본 활성화/필요 시 비활성화 가능하게)

### Bugfixes
- Client: 유저 페이지에서 탭이 거의 보이지 않는 현상을 해소

## 13.5.6
릴리즈 일시: 2023/02/10

### Improvements
- 비로그인 시 MiAuth 인증 화면에 진입했을 경우, MiAuth 페이지임을 알리도록
- /auth/의 UI를 업데이트
- 이용약관 동의 화면의 UI를 조정
- 이미지 자르기 질문을 직관적으로 변경

### Bugfixes
- fix: 오디오 플레이어의 툴팁 일부가 잘려 보이는 문제를 해결

## 13.5.4
릴리즈 일시: 2023/02/09

### Improvements
- Server: UI의 HTML(노트 등의 특별 페이지를 제외)의 캐시 시간을 15초에서 30초로 연장
- i/notifications의 요청 빈도 제한을 완화

### Bugfixes
- fix(client): 보안 향상을 위한 URL 검증
- fix(client): date의 초기값이 정상적으로 적용되지 않는 경우가 있는 문제를 해결

## 13.5.3
릴리즈 일시: 2023/02/09

### Improvements
- Client: 덱 UI에 채널 컬럼을 추가

## 13.5.2
릴리즈 일시: 2023/02/08

### Changes
- '닉네임의 커스텀 이모지 렌더링을 비활성화'에 대한 변경 사항을 취소

### Bugfixes
- Client: register_note_view_interruptor not working
- Client: 로그인 토큰을 재생성할 수 없는 문제를 해결

## 13.5.0
릴리즈 일시: 2023/02/08

### Changes
- perf(client): 닉네임의 커스텀 이모지 렌더링을 비활성화

### Improvements
- Client: disableShowingAnimatedImages의 기본값으로 브라우저의 prefers-reduced-motion 설정을 따르도록
- enhance(client): medialist style을 최적화

### Bugfixes
- Docker health check를 수정
- Client: Chome에서 MkEmojiPicker에 텍스트를 입력할 때, 특정 IME 환경에서 변환 후보 확정 시 그대로 검색이 진행되어버리는 문제를 해결
- fix(mfm): rotate에서 기본 각도가 사용되지 않음
- fix(server): 보안 강화를 위해 ActivityPub의 URL을 검증하도록

## 13.4.0
릴리즈 일시: 2023/02/05

### Improvements
- 역할에 아이콘을 설정하여 유저명 옆에 표시할 수 있도록
- feat: 비로그인 유저를 위한 타임라인 페이지
- 도전과제 '그냥 운이 좋았어'의 달성 확률을 조정
- 태국어 지원 추가

### Bugfixes
- fix(server): 자신의 노트를 즐겨찾기로 등록할 때엔 도전 과제가 달성되지 않도록 수정
- fix(server): clean up file in FileServer
- fix(server): UNIX 도메인 소켓을 거부
- fix(server): 보안을 위해 파일명 및 이모지 이름에 대한 검증을 추가
- fix(client): AiScript에서 입력값 검증을 추가
- fix(client): Webhook 삭제 버튼 추가
- fix(client): 알림 스타일 최적화
- fix(client): MFM 인라인 코드가 길 경우 줄넘김해서 보이도록

## 13.3.3
릴리즈 일시: 2023/02/04

### Bugfixes
- Server: 보안 강화

## 13.3.2
릴리즈 일시: 2023/02/04

### Improvements
- 외부 미디어 프록시 지원을 강화하였습니다
  외부 미디어 프록시의 Fastify 구현체를 만들었습니다
  https://github.com/misskey-dev/media-proxy
- Server: 보안 강화

### Bugfixes
- Client: 보안을 위해 urls 검증 강화

## 13.3.1
릴리즈 일시: 2023/02/04

### Bugfixes
- Client: '움직이는 이미지를 자동재생하지 않음' 옵션이 커스텀 이모지에 적용되지 않던 문제를 해결
- Client: 이모지 자동 완성 창에서 Unicode 이모지가 커스텀 이모지로써 표시되는 문제를 해결
- Client: Vue-plyr의 CORS 문제를 해결
- Client: 보안을 위해 urls 검증 강화

## 13.3.0
릴리즈 일시: 2023/02/03
### Changes
- twitter/github/discord 연동 기능을 삭제하였습니다.
- 해시태그 별 차트(통계 자료)가 삭제되었습니다
- syslog에 대한 지원을 중단하였습니다

### Improvements
- 역할을 통해 광고를 표시하지 않도록 한 경우, 처음부터 광고를 표시하지 않도록 변경

## 13.2.6
릴리즈 일시: 2023/02/01
### Changes
- docker-compose.yml을 docker-compose.yml.example로 변경하였습니다. docker-compose.yml으로 복사한 뒤 사용하여 주십시오.

### Improvements
- 이모지 선택기의 성능을 개선
- AiScript를 0.12.4로 업데이트

### Bugfixes
- Server: 릴레이와 통신할 수 없는 문제를 해결
- Client: 클래식 UI를 사용할 때에, 창 크기에 따라 기본값으로 변경하였다가 복구될 경우 원래대로 돌아가도록 변경 #9669
- Client: Chome에서 검색 다이얼로그에 텍스트를 입력할 때, 특정 IME 환경에서 변환 후보 확정 시 그대로 검색이 진행되어버리는 문제를 해결

## 13.2.4
릴리즈 일시: 2023/01/27
### Improvements
- 리모트 커스텀 이모지를 표시할 때의 성능을 개선
- Default to `animation: false` when prefers-reduced-motion is set
- 리액션 내역을 공개하였을 경우, 로그인하지 않은 상태에서도 열람할 수 있도록 변경
- 블러(흐리기) 설정 최적화
- 커스텀 이모지 캐싱 최적화

### Bugfixes
- fix aggregation of retention
- 대시보드에서 온라인 유저 수가 표시되지 않는 문제를 해결
- 팔로우 신청/팔로우 버튼이 알림에서 사라져 있는 문제를 해결

## 13.2.3
릴리즈 일시: 2023/01/26
### Improvements
- 커스텀 이모지의 변경 사항을 클라이언트에 실시간으로 반영하도록 변경

### Bugfixes
- turnstile-failed: missing-input-secret

## 13.2.2
릴리즈 일시: 2023/01/25
### Improvements
- 서버 성능 개선

### Bugfixes
- 간혹 로그인 시에 요청 한도가 올바르게 적용되지 않는 문제를 해결
- MFM의 position、rotate、scale에서 소숫점을 사용할 수 있도록 변경

## 13.2.1
릴리즈 일시: 2023/01/24
### Improvements
- 디자인 조정
- 서버 성능 개선

## 13.2.0
릴리즈 일시: 2023/01/23
### Improvements
- 서버 기동 시의 onlyServer / onlyQueue 옵션 부활
- 다른 사람의 도전과제를 열람할 때에는 획득 조건을 표시하지 않도록 변경
- 애니메이션을 줄이기 옵션이 켜져 있을 때 리액션 애니메이션도 비활성화하도록 변경
- 커스텀 이모지 일람 페이지의 성능을 개선

### Bugfixes
- Aiscript: button is not defined

## 13.1.7
릴리즈 일시: 2023/01/22

### Improvements
- 새로운 도전 과제를 추가
- MFM에 scale 태그를 추가

## 13.1.4
릴리즈 일시: 2023/01/22

### Improvements
- 새로운 도전 과제를 추가

### Bugfixes
- Client: 번역 데이터를 업데이트할 때에 연속적으로 새로고침되는 문제를 해결

## 13.1.3
릴리즈 일시: 2023/01/22

### Bugfixes
- Client: 커스텀 이모지 리액션의 표시가 올바르지 않은 문제를 해결

## 13.1.2
릴리즈 일시: 2023/01/22

### Bugfixes
- Client: 커스텀 이모지 리액션의 표시가 올바르지 않은 문제를 해결

## 13.1.1
릴리즈 일시: 2023/01/22

### Improvements
- 로컬 커스텀 이모지를 표시할 때의 성능 개선
- Client: 순간적으로 많은 도전 과제를 달성하였을 때에 발생하는 오작동을 개선

### Bugfixes
- Client: 업데이트 시 번역 데이터가 업데이트되지 않는 문제를 해결

## 13.1.0
릴리즈 일시: 2023/01/21

### Improvements
- 도전과제
- Play 프리셋 추가
- Play 스크립트의 글자 수 제한을 완화
- AiScript GUI의 개선
- 리액션 목록 상세 보기를 추가
- 존재하지 않는 커스텀 이모지를 텍스트로 표시하도록 변경
- 미디어를 전체화면으로 표시할 때 대체 텍스트를 표시
- 작업 대기열의 프로세스와 Web서버 프로세스를 분리

### Bugfixes
- play를 삭제할 방법이 없는 문제를 해결
- 로그인하지 않았을 때 노트의 '...' 버튼이 작동하지 않는 문제를 해결
- twitter 연동 시 autwh is not a function 오류가 발생하는 문제를 해결

## 13.0.0

출시일: 2023년 1월 16일

### 요약

- 새로운 기능 (역할 시스템, Misskey Play, 신규 위젯, 신규 차트, 🍪👈 등)
- 백엔드 재작성
- 성능 향상 (백엔드, 프론트엔드)
- 다양한 사용성 개선
- 다양한 UI 개선

### 주요 기능

- 역할
  - 사용자 권한을 종전보다 유연하게 관리할 수 있게 됩니다. 예를 들어, "인스턴스 구독자는 안테나를 30개까지 만들 수 있습니다," "로컬 타임라인은 기본적으로 보이지 않지만, 일부 권한을 가진 분들만 볼 수 있습니다," "초대 전용 인스턴스지만 모든 사용자가 초대를 할 수 있습니다"와 같은 것들을 지정할 수 있습니다. 또한, 여러 조건을 합쳐서 역할 등록을 자동화할 수도 있습니다. "계정을 만든 지 하루가 지나지 않은 사용자는 공개 포스팅을 할 수 없습니다"처럼요.
- Misskey Play
  - Misskey Play는 기존의 페이지를 대체할 새로운 플랫폼입니다. 동적 콘텐츠 (이하 "어플리케이션"이라 합니다)에 특화되어 있으며, 페이지에서보다 훨씬 더 유연한 어플리케이션을 만들 수 있게 도와줍니다.

### 변경 사항

#### 서버 어드민

- Node.js 18.x 이상이 필요합니다.
- PostgreSQL 15.x가 필요합니다.
  - Misskey에서는 아직까지 PostgreSQL 15의 기능을 활용하지 않고 있지만, 향후에 활용하게 될 수 있습니다.
- ElasticSearch의 지원이 삭제되었습니다.
  - 대신, 별도의 검색 제공자를 설정할 수 있도록 하는 매커니즘을 준비하고 있습니다. 이 매커니즘이 추가되면 종전처럼 ElasticSearch를 활용하실 수 있습니다.
- Yarn에서 pnpm으로 마이그레이션했습니다.  
  sudo corepack enable 명령어를 통해 corepack을 활성화하는 것을 권장합니다.
- 서브도메인에 대해서도 인스턴스 차단이 가능합니다.
- 역할 기능이 추가되면서, 여러 기능이 역할 기능에 통합됩니다.
  - 모더레이터 설정이 역할로 통합되었습니다. 업데이트 전 모더레이터 목록을 별도로 기록해 두었다가 수동으로 다시 추가해야 합니다. 업데이트 후에는 모더레이터에 관한 정보가 모두 삭제됩니다.
  - 사일런스가 역할로 통합되었습니다. 기존의 사일런스 기록이 삭제되니 별도로 기록해 두는 것을 추천합니다.
  - 유저별 드라이브 용량 제한이 역할로 통합되었습니다.
  - 인스턴스 기본 드라이브 용량 설정이 역할로 통합되었습니다. 업데이트 후 기본 역할 또는 조건형 역할에서 드라이브 용량을 다시 설정해 주세요.
  - 로컬 타임라인 / 글로벌 타임라인에 포스팅하는 권한이 역할로 통합되었습니다.
- 더이상 Docker가 root로 작동하지 않습니다. Docker를 사용하면서 오브젝트 스트로지를 사용하지 않는다면, chown -hR 991.991 . /files를 실행해 주세요.

#### 사용자

- 노트 주시하기 기능이 삭제되었습니다.
- 투표에 대한 알림이 삭제되었습니다.
- 수식을 노트에 더이상 임베딩할 수 없습니다.
- 동적 페이지를 더이상 만들 수 없습니다.
  - 대신 AiScript를 활용하는 Misskey Play 기능을 통해, 더 유연한 동적 콘텐츠를 만들 수 있게 됩니다.
- AiScript가 0.12.2로 업데이트되었습니다.
  - 0.12.x의 변경사항: https://github.com/syuilo/aiscript/blob/master/CHANGELOG.md#0120
  - 0.12.x 이전 버전의 플러그인 로딩이 불가합니다.
- iOS 15 미만의 환경은 지원되지 않습니다.
- Firefox 110 미만의 환경은 지원되지 않습니다.
  - 109에서는 ContainerQueries 플래그를 활성화하면 문제 없이 사용할 수 있습니다.

#### 앱 개발자

- API: meta 응답은 더이상 emojis 프로퍼티를 포함하지 않습니다.
  - 커스텀 이모지 정보를 얻으려면, emojis 엔드포인트로 요청하세요.
- API: 커스텀 이모지 엔티티는 더이상 url 프로퍼티를 포함하지 않습니다.
  - 이모지를 표시하려면, <인스턴스 호스트>/emoji/<이모지 이름>.webp를 요청하세요.
  - 예: https://p1.a9z.dev/emoji/misskey.webp
  - 리모트: https://p1.a9z.dev/emoji/syuilo_birth_present@mk.f72u.net.webp
- API: user 및 note 엔티티는 더이상 emojis 프로퍼티를 포함하지 않습니다.
- API: user 엔티티는 더이상 avatarColor 및 bannerColor 프로퍼티를 포함하지 않습니다.
- API: instance 엔티티는 더이상 latestStatus, lastCommunicatedAt, latestRequestSentAt 프로퍼티를 포함하지 않습니다.
- API: instance 엔티티의 caughtAt이 firstRetrievedAt으로 명칭이 변경되었습니다.

### 개선된 사항

- Role system @syuilo
- Misskey Play @syuilo
- Introduce retention-rate aggregation @syuilo
- Make possible to export favorited notes @syuilo
- Add per user pv chart @syuilo
- Push notification of Antenna note @tamaina
- AVIF support @tamaina
- Add Cloudflare Turnstile CAPTCHA support @CyberRex0
- Rate limits can now be adjusted per user @syuilo
- Non-moderator users assigned to roles with permissions can now issue instance invitation codes @syuilo
- Non-moderator users with assigned roles can now add, edit, and delete custom emoji @syuilo
- Allow users to set the number of clips and notes within a clip @syuilo
- Allowed to set the number of users in user list and user list @syuilo
- Maximum number of characters for hardword mute @syuilo
- Maximum number of webhooks that can be created @syuilo
- Can set the number of notes that can be pinned @syuilo
- Server: signToActivityPubGet is set to true by default @syuilo
- Server: improve syslog performance @syuilo
- Server: Use undici instead of node-fetch and got @tamaina
- Server: Judge instance block by endsWith @tamaina
- Server: improve note scoring for featured notes @CyberRex0
- Server: Relaxed character limit for survey choices @syuilo
- Server: Relaxed character limit for profile @syuilo
- Server: add rate limits for some endpoints @syuilo
- Server: improve stats api performance @syuilo
- Server: improve nodeinfo performance @syuilo
- Server: delete outdated notifications regularly to improve db performance @syuilo
- Server: delete outdated hard-mutes regularly to improve db performance @syuilo
- Server: delete outdated notes of antenna regularly to improve db performance @syuilo
- Server: improve activitypub deliver performance @syuilo
- Client: use tabler-icons instead of fontawesome to better design @syuilo
- Client: Add new gabber kick sounds (thanks for noizenecio)
- Client: Add link to user RSS feed in profile menu @ssmucny
- Client: Compress non-animated PNG files @saschanaz
- Client: YouTube window player @sim1222
- Client: show readable error when rate limit exceeded @syuilo
- Client: enhance dashboard of control panel @syuilo
- Client: Vite is upgraded to v4 @syuilo, @tamaina
- Client: HMR is available while yarn dev @tamaina
- Client: Implement the button to subscribe push notification @tamaina
- Client: Implement the toggle to or not to close push notifications when notifications or messages are read @tamaina
- Client: show Unicode emoji tooltip with its name in MkReactionsViewer.reaction @saschanaz
- Client: OpenSearch support @SoniEx2 @chaoticryptidz
- Client: Support remote objects in search @SoniEx2
- Client: user activity page @syuilo
- Client: Make widgets of universal/classic sync between devices @tamaina
- Client: add user list widget @syuilo
- Client: Add AiScript App widget
- Client: add profile widget @syuilo
- Client: add instance info widget @syuilo
- Client: Improve RSS widget @tamaina
- Client: add heatmap of daily active users to about page @syuilo
- Client: introduce fluent emoji @syuilo
- Client: add new theme @syuilo
- Client: add new mfm function (position, fg, bg) @syuilo
- Client: show fireworks when visit user who today is birthday @syuilo
- Client: show bot warning on screen when logged in as bot account @syuilo
- Client: AiScript can refer to custom emoji list @syuilo
- Client: improve overall performance of client @syuilo
- Client: ui tweaks @syuilo
- Client: clicker game @syuilo

### 수정된 버그

- Server: Fix @tensorflow/tfjs-core's MODULE_NOT_FOUND error @ikuradon
- Server: Fixed a problem that sentences in quotes are nyaized @kabo2468
- Server: Bug fix for Pinned Users lookup on instance @squidicuzz
- Server: Fix peers API returning suspended instances @ineffyble
- Server: trim long text of note from ap @syuilo
- Server: Ap inbox max payload size limited to 64kb @syuilo
- Server: add limit to number of antennae created @syuilo
- Server: Fixed duplicate error IDs in pages/like @syuilo
- Server: Fixed that summary values are not updated depending on pages/update parameters @syuilo
- Server: Escape SQL LIKE @mei23
- Server: fix problem with certain PNG image uploads failing @usbharu
- Server: fix problem with OGP rendering with URLs of non-public clips @syuilo
- Server: Antenna timeline (streaming) picks up key posts of users not followed @syuilo
- Server: follow request list api pagination @sim1222
- Server: Fixed an issue where an error when drive capacity is exceeded is not properly responded @syuilo
- Client: Fixed a problem that user name is not auto-completed in password manager @massongit
- Client: Fixed a problem that date strings are displayed as custom pictograms @syuilo
- Client: case insensitive emoji search @saschanaz
- Client: Fixed that there is no way to close widget drawer when screen width is narrow @syuilo
- Client: Fixed InApp window sometimes becoming inoperable @tamaina
- Client: use proxied image for instance icon @syuilo
- Client: Fixed an issue where the content cannot be saved in the Webhook edit screen @m-hayabusa
- Client: Fixed issue where blocks cannot be moved in Page edit @syuilo
- Client: update emoji picker immediately on all input @saschanaz
- Client: fixed tooltip of chart may remain on screen @syuilo
- Client: fix wrong link in tutorial @syuilo

### 특히 감사드립니다

- 모든 기여자분들
- 베타 테스트를 위한 인스턴스를 만드신 모든 분들
- 베타 테스트에 참여하신 모든 분들

## 12.119.1

Released at: 2022/12/03

### Bugfixes

- Server: Mitigate AP reference chain DoS vector @skehmatics

## 12.119.0

Released at: 2022/09/10

### Improvements

- Client: Add following badge to user preview popup @nvisser
- Client: mobile twitter url can be used as widget @caipira113
- Client: Improve clock widget @syuilo

### Bugfixes

- Fix an issue that can cause migration failures
- Server: Fix an issue that allows marking others' notification as read @syuilo
- Client: Fix an issue where 'Manage access tokens' and 'Manage Accounts' page is not shown @futchitwo

## 12.118.0

Released at: 2022/08/07

### Improvements

- Client: Preference backups feature
- Client: Add vi-VN language support
- Client: Add unix time widget @syuilo

### Bugfixes

- Server: Fix blocking users from remote instances @xianonn
- Client: Fix webhook page freeze after webhook is first created @syuilo
- Client: Fix broken MiAuth page @syuilo
- Client: Fix an issue where drag-and-drop to the post form doesn't work with some applications @m-hayabusa

## 12.117.1

Released at: 2022/07/19

### Improvements

- Client: UI brushup @syuilo

### Bugfixes

- Server: Fix an issue where upload fails intermittently @acid-chicken
- Client: Fix an issue where reaction picker is shown behind other in-app windows @syuilo
- Client: Fix user information lookup retry feature @xianonn
- Client: Update MFM cheatsheet behavior @syuilo
- Client: Fix an issue that prevents changing 'Receive notifications from this instance' setting @syuilo

## 12.117.0

Released at: 2022/07/18

### Improvements

- Client: Support maximizing windows @syuilo
- Client: Shift-clicking on the link opens it in-app @syuilo
- Client: Ctrl-clicking on the link will force page transition on Deck UI @syuilo
- Client: UI brushup @syuilo

## 12.116.1

Released at: 2022/07/17

### Bugfixes

- Client: Fix an issue that prevents 'Show in page' button from working on Deck UI @syuilo
- Error During Migration Run to 12.111.x

## 12.116.0

Released at: 2022/07/16

### Improvements

- Client: registry editor @syuilo
- Client: UI brushup @syuilo

### Bugfixes

- Error During Migration Run to 12.111.x
- Server: TypeError: Cannot convert undefined or null to object @syuilo

## 12.115.0

Released at: 2022/07/16

### Improvements

- Client: Easier account switching on the Deck @syuilo
- Client: UI brushup @syuilo

## 12.114.0

Released at: 2022/07/15

### Improvements

- Add article order shuffle feature to the RSS ticker @syuilo

### Bugfixes

- Fix an issue that prevents client from booting @syuilo

## 12.113.0

Released at: 2022/07/13

### Improvements

- Support `<plain>` syntax for MFM

### Bugfixes

- Server: Fix crash at startup if TensorFlow is not supported @mei23
- Client: Fix routing of the URL encoded string

## 12.112.3

Released at: 2022/07/09

### Improvements

- Make active email validation configurable

### Bugfixes

- Server: Fix Attempts to update all notifications @mei23

## 12.112.2

Released at: 2022/07/08

### Bugfixes

- Fix Docker doesn't work @mei23  
  Still not working on arm64 environment. (See 12.112.0)

## 12.112.1

Released at: 2022/07/07

same as 12.112.0

## 12.112.0

Released at: 2022/07/07

### Known issues

- Installation is currently not working on arm64 environment. This will be fixed in the next version.

### Changes

- Highlight menu has been merged into the Explore menu.
- Custom Emoji page has been merged into the Instance Information page.
- Federation page has been merged into the Instance Information page.
- Mentions menu has been merged into the Notification menu.
- Direct notes menu has been merged into the Notifications menu.
- You can now access Antennas via the top icon of the Timeline, instead of the main menu.
- You can now access Lists via the top icon of the Timeline, instead of the main menu.

### Improvements

- Server: Allow GET method for some endpoints @syuilo
- Server: Auto NSFW detection @syuilo
- Server: Add rate limit to i/notifications @tamaina
- Client: Improve control panel @syuilo
- Client: Show warning in control panel when there is an unresolved abuse report @syuilo
- Client: Statusbars @syuilo
- Client: Add instance-cloud widget @syuilo
- Client: Add rss-ticker widget @syuilo
- Client: Removing entries from a clip @futchitwo
- Client: Poll highlights in explore page @syuilo
- Client: Improve deck UI @syuilo
- Client: Word mute also checks content warnings @Johann150
- Client: Page reload from menu @syuilo
- Client: Improve emoji picker performance @syuilo
- Client: For notes with specified visibility, show recipients when hovering over visibility symbol. @Johann150
- Client: Make widgets available again on a tablet @syuilo
- Add possibility to leave moderation notes on users @syuilo
- Make possible to delete an account by admin @syuilo
- Improve player detection in URL preview @mei23
- Add Badge Image to Push Notification #8012 @tamaina
- Server: Improve performance
- Server: Supports IPv6 on Redis transport. @mei23  
  IPv4/IPv6 is used by default. You can tune this behavior via `redis.family`.
- Server: Add possibility to log IP addresses of users @syuilo
- Add additional drive capacity change support @CyberRex0

### Bugfixes

- Server: Fix GenerateVideoThumbnail failed @mei23
- Server: Ensure temp directory cleanup @Johann150
- favicons of federated instances not showing @syuilo
- Admin: The checkbox for blocking an instance works again @Johann150
- Client: Prevent access to user pages when not logged in @pixeldesu @Johann150
- Client: Disable some hotkeys (e.g. for creating a post) for not logged in users @pixeldesu
- Client: Ask users that are not logged in to log in when trying to vote in a poll @Johann150
- Instance mutes also apply in antennas etc. @Johann150

## 12.111.1

Released at: 2022/06/13

### Bugfixes

- some fixes of multiple notification read @tamaina
- some GenerateVideoThumbnail failed @Johann150
- Client: fix problem with widget information not being saved in Deck mode @syuilo
- Client: edit screen appears when trying to open gallery posts @futchitwo

## 12.111.0

Released at: 2022/06/11

### Note

- Node.js 16.15.0 or later is required

### Improvements

- Supports Unicode Emoji 14.0 @mei23
- Push notifications for multiple accounts #7667 @tamaina
- Set click and `action` for Push notifications #7667 @tamaina
- Option to discard original image and only keep `WebPublic` one when uploading it to Drive @tamaina
- Server: always remove completed tasks of job queue @Johann150
- Client: allow cropping of images in avatar settings @syuilo
- Client: make emoji stand out more on reaction button @Johann150
- Client: display URL of QR code for TOTP registration @tamaina
- Client: render quote renote CWs as MFM @pixeldesu
- API: `notifications/read` also accepts in arrays #7667 @tamaina
- API: if the query meets the `username` condition, `username` is also `LIKE` searched when searching users @tamaina
- MFM: Allow speed changes in all animated MFMs @Johann150
- The theme color is now better validated. @Johann150
  Your own theme color may be unset if it was in an invalid format.
  Admins should check their instance settings if in doubt.
- Perform port diagnosis at startup only when Listen fails @mei23
- Rate limiting is now also usable for non-authenticated users. @Johann150 @mei23
  Admins should make sure the reverse proxy sets the `X-Forwarded-For` header to the original address.

### Bugfixes

- Server: keep file order of note attachement @Johann150
- Server: fix missing foreign key for reports leading to reports page being unusable @Johann150
- Server: fix internal in-memory caching @Johann150
- Server: prevent crash when processing certain PNGs @syuilo
- Server: Fix unable to generate video thumbnails @mei23
- Server: Fix `Cannot find module` issue @mei23
- Federation: Add rel attribute to host-meta @mei23
- Federation: add id for activitypub follows @Johann150
- Federation: use `source` instead of `_misskey_content` @Johann150
- Federation: ensure resolver does not fetch local resources via HTTP(S) @Johann150
- Federation: correctly render empty note text @Johann150
- Federation: Fix quote renotes containing no text being federated correctly @Johann150
- Federation: remove duplicate br tag/newline @Johann150
- Federation: add missing authorization checks @Johann150
- Client: fix profile picture height in mentions @tamaina
- Client: fix abuse reports page to be able to show all reports @Johann150
- Client: fix settings page @tamaina
- Client: fix profile tabs @futchitwo
- Client: fix popout URL @futchitwo
- Client: correctly handle MiAuth URLs with query string @sn0w
- Client: correct behavior of the function to display new Note on its details page @xianonn
- MFM: more animated functions support `speed` parameter @futchitwo
- MFM: limit large MFM @Johann150

## 12.110.1（2022/04/23）

### Bugfixes

- Fix GOP rendering @syuilo
- Improve performance of antenna, clip, and list @xianonn

## 12.110.0

Released at: 2022/04/11

### Improvements

- Improve webhook @syuilo
- Client: Show loading icon on splash screen @syuilo

### Bugfixes

- API: parameter validation of users/show was wrong
- Federation: fixed problem with direct posts to remote instances not reaching @syuilo

## 12.109.2

Released at: 2022/04/03

### Bugfixes

- API: admin/update-meta was not working @syuilo
- Client: fix issue where meta[name="theme-color"] content was undefined when switching or loading themes @tamaina

## 12.109.1

Released at: 2022/04/02

### Bugfixes

- API: Fixed problem with Renote

## 12.109.0

Released at: 2022/04/02

### Improvements

- Webhooks @syuilo
- Bull Dashboard built in to check and manipulate job queues @syuilo
  - To open the Bull Dashboard, you must relog (log out and log back in) to misskey once with your admin account
- Check that installed Node.js version fulfils version requirement @ThatOneCalculator
- Server: overall performance improvements @syuilo
- Federation: avoid duplicate activity delivery @Johann150
- Federation: limit federation of reactions on direct notes @Johann150
- Client: improved deck handling on touchpad/touchscreen @tamaina

### Bugfixes.

- Email address validation was not working @ybw2016v
- API: fix endpoint endpoint @Johann150
- API: fix admin/meta endpoint @syuilo
- API: improved validation and documentation for endpoints that accept different variants of input @Johann150
- API: `notes/create`: The `mediaIds` property is now deprecated.
  - Use `fileIds` instead, it has the same behaviour.
- Client: fixed problem with URLs not displaying if decodeURIComponent fails due to abnormal URI encoding @tamaina

## 12.108.1

Released at: 2022-03-12

### Bugfixes

- Fixed relay not working @xianonn
- Fixed problem with ulid not working @syuilo
- Fixed a problem that OGP cannot be obtained correctly from outside @syuilo
- Instance can't get the files from other instance when there are items in allowedPrivateNetworks in .config/default.yml @ybw2016v

## 12.108.0

Released at: 2022-03-09

### Note

- Node v16.14.0 or later is required from this version

### Changes

- The ability to set the maximum number of characters in a note has been removed and the default is now a flat 3000 characters @syuilo
- Misskey can no longer terminate HTTPS connections. @Johann150
  - If you did not use a reverse proxy (e.g. nginx) before, you will probably need to adjust your configuration file and set up a reverse proxy. The https configuration key is no longer recognized!

### Improvements

- Instance default theme can be set @syuilo
- Allow mute to set expiration date @syuilo
- Create a notification when a survey is closed @syuilo
- Allow up to 16 profile fields to be saved @syuilo
- Add Pub&Sub to federation chart @syuilo
- Add Active to federation chart @syuilo
- Queries to databases that take longer than 10 seconds by default will be aborted @syuilo
  - You can change the timeout period by setting `statement_timeout` in the configuration file `db.extra`
- Client: display instance icon on splash screen @syuilo

### Bugfixes

- Client: Fixed reaction picker height sometimes remains low and does not return @syuilo
- Client: Fixed username autocomplete not working properly @syuilo
- Client: Fixed difficulty in editing widgets with touch operation @xianonn
- Client: Fixed register_note_view_interruptor() not working @syuilo
- Client: iPhone X or later(?) Fixed: Fixed page content not being fully displayed on iPhone X or later(?) @tamaina
- Client: Fix image caption on mobile @nullobsi

## 12.107.0

Released at: 2022/02/12

### Improvements

- Client: add theme @syuilo

### Bugfixes

- API: fixed internal error in stats API @syuilo
- Client: Fixed soft mute sometimes causing everything to match @tamaina
- Client: take screen safe area into account of the device @syuilo
- Client: Fixed issue with sidebar post button not showing in some environments @syuilo

## 12.106.3

Released at: 2022/02/11

### Improvements

- Client: adjust margins on smart phones @syuilo

### Bugfixes

- Client: fixed issue with note details not showing @syuilo

## 12.106.2

Released at: 2022/02/11

### Bugfixes

- Client: Fixed an issue where deleted notes did not automatically disappear from the timeline @syuilo
- Client: Fixed an issue where the number of reactions may be incorrect @syuilo
- Fixed problem with migration not working in some environments @syuilo

## 12.106.1

Released at: 2022/02/11

### Bugfixes

- Client: fixed problem with word mute not saving @syuilo

## 12.106.0

Released at: 2022/02/11

### Improvements

- Improve federation chart @syuilo
- Client: Allow to set the size of the reaction picker @syuilo
- Client: Relaxed reaction picker width and height restrictions @syuilo
- Docker: Update to Node v16.13.2 @mei23
- Update dependencies

### Bugfixes

- validate regular expressions in word mutes @Johann150

## 12.105.0

Released at: 2022/02/09

### Improvements

- Allow to set the theme color of the instance @syuilo

#### Bugfixes

- Fixed migration failure in some environments @syuilo

## 12.104.0

Released at: 2022/02/09

### Note

Please run `npm run clean` before building.

Due to the large scale of migration in this release, migration may take some time for some instances.
If the migration does not finish, you can delete all **records** in the table starting with `__chart__` (do not delete the table itself) and try again, although the chart information will be reset.

### Improvements

- Chart engine enhancements @syuilo
  - Reduced table size
  - Added number of notes with attachments to notes/instance/perUserNotes chart
  - Added new entry to activeUsers chart
  - Added new entry to federation chart
  - Added apRequest chart
  - network chart eliminated
- Client: Enable to see the chart on own instance info page @syuilo
- Client: Allow manual specification of device type @syuilo
- Client: updated UI icons @syuilo
- Client: self-hosting UI icons @syuilo
- Review NodeInfo user and post count content @xianonn

### Bugfixes

- Client: Fixed "There is a new note" display remains when switching timeline type @tamaina
- Client: fix UI size issue @tamaina
- Client: Setting instance information of notes to always show breaks the timeline @Johann150
- Client: Fixed an issue where the cursor position was not correct when replying depending on the environment @syuilo
- Client: Fixed a problem that switching the display range of instances does not work in the control panel users and files @syuilo
- Client: Fixed no update notification dialog @syuilo
- Client: Follows/Followers Visibility changes won't be saved unless clicking on an other checkbox @Johann150
- API: Fix API cast @mei23
- Add instance favicon where it's missing @solfisher
- Fixed problems with periodic resync of charts not working @syuilo

## 12.103.1

Released at: 2022/02/02

### Bugfixes

- Client: Fixed an issue with tooltip display position being incorrect.

## 12.103.0

Released at: 2022/02/02

### Improvements

- Client: Allow instance information to be reacquired from the coalition instance page.

### Bugfixes

- Client: Fixed an issue where images are hidden when reactions are updated after displaying NSFW images of a post.
- Client: Fixed problem with "Clip" page not opening
- Client: Fixed Trends widget not working
- Client: Fixed Federation widget not working
- Client: Fixed emoji picker not opening in reaction settings
- Client: Fixed issue with inclusion of mentions on DM page
- Client: hashtag retention field in submission form not working
- Client: Fixed side view not working
- Client: ensure that specified users does not get duplicates
- Add `img-src` and `media-src` directives to `Content-Security-Policy` for files and media proxy

## 12.102.1

Released at: 2022/01/27

### Bugfixes

- Fixed problem with chat not displaying

## 12.102.0

Released at: 2022/01/27

### Note

After the update, some custom emoji may not be displayed. In this case, batch exporting the emoji from the emoji management page and then batch importing them again from the control panel will fix the problem.

⚠ It is not compatible with zips exported prior to 12.102.0. Please update before exporting.

### Changes

- Room functionality has been removed.
  - It will be restored as a separate repository at a later date.
- Reversi function has been removed.
  - It will be restored as a separate repository at a later date.
- Chat UI has been removed.
- The number of files that can be attached to a note has been increased to 16.
- SVG custom emoji are now converted to PNGs for display

### Improvments

- Custom emoji batch editing function
- Batch import of custom emoji
- Posting form now allows temporary switching of posting accounts
- Unifying Misskey-specific IRIs in JSON-LD `@context`.
- Improved client performance
- Security Improvements

### Bugfixes

- Fixed handling of upload errors

## 12.101.1

Released at: 2021/12/29

### Bugfixes

- Fixed SVG emoji not displaying
- Fixed a case where the extension of exported emoji is false.

## 12.101.0

Released at: 2021/12/29

### Improvements

- Client: Improved accuracy of note previews
- Client: Improvement of MFM sparkle effect
- Client: Design adjustments
- Security Improvements

### Bugfixes

- Client: Fixed some components being hidden behind the scenes
- Fix html blockquote conversion

## 12.100.2

Released at: 2021/12/18

### Bugfixes

- Client: Fixed issue where Deck column increases/decreases were not properly reflected until page was reloaded.
- Client: Fixed some components being hidden behind the scenes
- Client: Fixed heavy load on custom emoji list page

## 12.100.1

Released at: 2021/12/17

### Bugfixes

- Client: Design coordination
- Client: Improved display of various menus and reaction picker on mobile

## 12.100.0

Released at: 2021/12/17

### Improvements

- Client: Improved display of various menus and reaction picker on mobile

### Bugfixes

- Client: Fixed some components hiding in the background

## 12.99.3

Released at: 2021/12/14

### Bugfixes

- Client: Fixed problem with autocomplete being hidden behind dialogs

## 12.99.2

Released at: 2021/12/14

## 12.99.1

Released at: 2021/12/14

## 12.99.0

Released at: 2021/12/14

### Improvements

- Added a user-level instance mute in user settings
- Added option to not include muted users in follow export
- Added option to not include unused accounts in follow export
- Custom emoji export function
- Chart performance improvements
- Allowed to exit from a group

### Bugfixes

- Client: Fixed a problem that prevented some functions from working when using a display with touch functionality and mouse operation.
- Client: Fixed an issue where clip settings could not be edited.
- Client: Fixed a problem with menus etc. being hidden behind windows

## 12.98.0

Released at: 12/03/2021

### Improvements

- API: /antennas/notes API now allows filtering by date
- Client: Confirmation dialog box when voting on a survey
- Client: Renote note detail page to the original note page.
- Client: Image popups can be closed by clicking on them.
- Client: Design adjustments
- Ability to remove followers

### Bugfixes

- Client: fixed the issue of tabs being displayed on the UI even when LTL and GTL are disabled
- Client: Fixed problem with incorrect error message for incorrect password in login
- Client: Corrected the order of users in the Reaction tooltip and Renote tooltip.
- Client: Fixed problem with master volume of sound not being saved correctly.
- Client: Fixed an inoperability issue in some environments when notifications are displayed.
- Client: Fixed problem with tooltips when tapped on mobile
- Client: Fixed an issue where, when replying to a note in a remote instance, if the target note contained a mentions to a user in that remote instance, it was sometimes passed on as a mentions to the local user in the reply text.
- Client: Fixed a problem in the image viewer where only a portion of the top image is displayed when the entire image is displayed.
- API: Fixed an internal error when retrieving users depending on conditions

### Changes

- Client: Moderator badge no longer displayed in notes

## 12.97.0 (2021-11-19)

### Improvements

- client: auto-folding also applies to renotes
- client: improved display of long threads
- client: also apply MFM to translations, so that it retains the formatting (line breaks, etc.) of the original text.
- client: add a confirmation dialog before deleting an account

### Bugfixes

- client: fixed an issue where "All" in user search did not work
- client: fixed the style of the Reaction List and Renote List tooltips

::: warning
Older releases are not translated yet. If you can, please edit this page to add them from the Japanese changelog on [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md).
:::
