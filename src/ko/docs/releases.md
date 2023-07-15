# 릴리스 노트

미스키 릴리스에 대한 릴리스 노트입니다.

::: tip
최신 정보는 업데이트되지 않았을 수 있습니다. 최신 정보는 [GitHub](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)(일본어, 영어) 또는 [일본어 Misskey Hub](../docs/releases.md)에서 확인해주세요.
:::

## 13.13.1
リリース日: 2023/06/06

### Client
- Fix: タブがアクティブな間はstreamが切断されないように

### Server
- Fix: api/metaで`TypeError: JSON5.parse is not a function`エラーが発生する問題を修正

## 13.13.0
リリース日: 2023/06/05

### General
- カスタム絵文字ごとにそれをリアクションとして使えるロールを設定できるように
- カスタム絵文字ごとに連合するかどうか設定できるように
- カスタム絵文字ごとにセンシティブフラグを設定できるように
- センシティブなカスタム絵文字のリアクションを受け入れない設定が可能に
- タイムラインにフォロイーの行った他人へのリプライを含めるかどうかの設定をアカウントに保存するのをやめるように
	- 今後はAPI呼び出し時およびストリーミング接続時に設定するようになります
- リストを公開できるようになりました

### Client
- リアクションの取り消し/変更時に確認ダイアログを出すように
- 開発者モードを追加
- AiScriptを0.13.3に更新
- Deck UIを使用している場合、`/`以外にアクセスした際にZen UIで表示するように
	- メインカラムを設置していない場合の問題を解決
- ハッシュタグのノート一覧ページから、そのハッシュタグで投稿するボタンを追加
- アカウント初期設定ウィザードに戻るボタンを追加
- アカウントの初期設定ウィザードにあとでボタンを追加
- サーバーにカスタム絵文字の種類が多い場合のパフォーマンスの改善
- Fix: URLプレビューで情報が取得できなかった際の挙動を修正
- Fix: Safari、Firefoxでの新規登録時、パスワードマネージャーにメールアドレスが登録されていた挙動を修正
- Fix: ロールタイムラインが無効でも投稿が流れてしまう問題の修正
- Fix: ロールタイムラインにて全ての投稿が流れてしまう問題の修正
- Fix: 「アクセストークンの管理」画面でアプリの情報が表示されない問題の修正
- Fix: Firefoxにおける絵文字ピッカーのTabキーフォーカス問題の修正
- Fix: フォローボタンがテーマのカラースキームによって視認性が悪くなる問題を修正
  - 新しいプロパティ `fgOnWhite` が追加されました

### Server
- bullをbull-mqにアップグレードし、ジョブキューのパフォーマンスを改善
- ストリーミングのパフォーマンスを改善
- Fix: 無効化されたアンテナにアクセスがあった際に再度有効化するように
- Fix: お知らせの画像URLを空にできない問題を修正
- Fix: i/notificationsのsinceIdが機能しない問題を修正
- Fix: pageのピン留めを解除することができない問題を修正

## 13.12.2
リリース日: 2023/05/12

## NOTE
Meilisearchの設定に`index`が必要になりました。値はMisskeyサーバーのホスト名にすることをお勧めします(アルファベット、ハイフン、アンダーバーのみ使用可能)。例: `misskey-io`
過去に作成された`notes`インデックスは、`<index名>---notes`にリネームが必要です。例: `misskey-io---notes`

### General
- 投稿したコンテンツのAIによる学習を軽減するオプションを追加

### Client
- ユーザーを指定してのノート検索が可能に
- アカウント初期設定ウィザードにプライバシー設定を追加
- リテンション率チャートに折れ線グラフを追加
- Fix: ブラーエフェクトを有効にしている状態で高負荷になる問題を修正
- Fix: Pageにおいて画像ブロックに画像を設定できない問題を修正
- Fix: カラーバーがリプライには表示されないのを修正
- Fix: チャンネル内の検索ボックスが挙動不審な問題を修正
- Fix: リテンションチャートのレンダリングを修正
- Fix: リアクションエフェクトのレンダリングの問題を修正

### Server
- センシティブワードの登録にAnd、正規表現が使用できるようになりました。
- Fix: ひとつのMeilisearchサーバーを複数のMisskeyサーバーで使えない問題を修正

## 13.12.1
リリース日: 2023/05/09

### Client
- プロフィール画面におけるモデレーションノートの表示を調整
- Fix: 一部ダイアログが表示されない問題を修正
- Fix: MkUserInfoのフォローボタンが変な位置にある問題を修正

### Server
- Fix: リモートサーバーの情報が更新できない問題を修正
- Fix: 13.11を経験しない状態で13.12にアップデートした場合ユーザープロフィール関連の画像が消失する問題を修正

## 13.12.0
リリース日: 2023/05/09

### NOTE
- Node.js 18.6.0以上が必要になりました

### General
- アカウントの引っ越し（フォロワー引き継ぎ）に対応
- Meilisearchを全文検索に使用できるようになりました
- 新規登録前に簡潔なルールをユーザーに表示できる、サーバールール機能を追加
- ユーザーへの自分用メモ機能
  * ユーザーに対して、自分だけが見られるメモを追加できるようになりました。  
    （自分自身に対してもメモを追加できます。）
  * ユーザーメニューから追加できます。  
    （デスクトップ表示ではusernameの右側のボタンからも追加可能）
- チャンネルに色を設定できるようになりました。各ノートに設定した色のインジケーターが表示されます。
- チャンネルをアーカイブできるようになりました。
	* アーカイブすると、チャンネル一覧や検索結果に表示されなくなり、新たな書き込みもできなくなります。
- アンテナのエクスポート・インポートができるようになりました
- ロールタイムラインをロールごとに表示するかどうかの選択できるようになりました。
	* デフォルトがオフになるので、ロールタイムラインを表示する場合はオンにしてください。
- ロールに強制的にNSFWを付与するポリシーを追加
	* アップロード済みのファイルはNSFWにならない為注意してください。
- モデレーションノートがユーザーのプロフィールページからも閲覧および編集できるようになりました。
- カスタム絵文字のライセンスを複数でセットできるようになりました。
- 管理者が予約ユーザー名を設定できるようになりました。
- Fix: フォローリクエストの通知が残る問題を修正

### Client
- アカウント作成時に初期設定ウィザードを表示するように
- チャンネル内検索ができるように
- チャンネル検索ですべてのチャンネルの取得/表示ができるように
- 通知の表示をカスタマイズできるように
- ドライブのファイル一覧から直接ノートを作成できるように
- ノートメニューからRenoteしたユーザーの一覧を見れるように
- コントロールパネルのカスタム絵文字ページおよびaboutのカスタム絵文字の検索インプットで、`:emojiname1::emojiname2:`のように検索して絵文字を検索できるように
  * 絵文字ピッカーから入力可能になります
- データセーバーモードを追加
  * 画像が全て隠れた状態で表示されるようになります
- 閲覧注意設定された画像は表示した状態でもそれが閲覧注意だと分かる表示をするように
- モデレーターはノートに添付された画像上から直接NSFW設定できるように
- プロフィール設定「追加情報」の項目の削除と並び替えができるように
- 新しい実績を追加
- AiScriptを0.13.2に更新
- Fix: AiScript APIのMk:dialogで何も返していなかったのをNULLを返すように修正
- Fix: 1:1ではない画像のリアクション通知バッジが左や上に寄ってしまっていたのを中央に来るように修正
- Fix: リアクションをホバーした時のユーザーリストで猫耳が切れてしまっていた問題を修正
- Fix: NSFWメディアの上に表示された｢もっと見る｣ボタンが押しづらい問題を修正

### Server
- channel/searchのqueryが空の場合に全てのチャンネルを返すように変更
- 環境変数MISSKEY_CONFIG_YMLで設定ファイルをdefault.ymlから変更可能に
- Fix: 他のサーバーの情報が取得できないことがある問題を修正
- Fix: エクスポートデータの拡張子がunknownになる問題を修正
- Fix: Content-Dispositionのパースでエラーが発生した場合にダウンロードが完了しない問題を修正
- Fix: API: i/update avatarIdとbannerIdにnullを渡した時、画像がリセットされない問題を修正
- Fix: .wav, .flacが再生できない問題を修正（新しくアップロードされたファイルのみ修正が適用されます）
- Fix: 凍結されたユーザーが一部APIのレスポンスに含まれる問題を修正
- Fix: メモリの使用量を`used - buffers - cached`ではなく`total - available`で求めるように（環境によって正常に計測できていなかったため）

## 13.11.3
リリース日: 2023/04/13

### General
- 指定したロールを持つユーザーのノートのみが流れるロールタイムラインを追加
	- Deckのカラムとしても追加可能
- カスタム絵文字関連の改善
  * ノートなどに含まれるemojis（populateEmojiの結果）は（プロキシされたURLではなく）オリジナルのURLを指すように
  * MFMでx3/x4もしくはscale.x/yが2.5以上に指定されていた場合にはオリジナル品質の絵文字を使用するように
- カスタム絵文字でリアクションできないことがある問題を修正

### Client
- チャンネルのピン留めされたノートの順番が正しくない問題を修正

### Server
- フォローインポートなどでの大量のフォロー等操作をキューイングするように #10544 @nmkj-io
- Misskey Webでのサーバーサイドエラー画面を改善
- Misskey Webでのサーバーサイドエラーのログが残るように
- ノート作成時のアンテナ追加パフォーマンスを改善
- アンテナとロールTLのuntil/sinceプロパティが動くように

## 13.11.2
リリース日: 2023/04/11

### Note
- 13.11.0または13.11.1から13.11.2以降にアップデートする場合、Redisのカスタム絵文字のキャッシュを削除する必要があります(https://github.com/misskey-dev/misskey/issues/10502#issuecomment-1502790755 参照)

### General
- チャンネルの検索用ページの追加

### Client
- 常に広告を見られるオプションを追加
- ユーザーページの画像一覧が表示されない問題を修正
- webhook, 連携アプリ一覧でコンテンツが重複して表示される問題を修正
- iPhoneで絵文字ピッカーの表示が崩れる問題を修正
- iPhoneでウィジェットドロワーの「ウィジェットを編集」が押しにくい問題を修正
- 投稿フォームのデザインを調整
- ギャラリーの人気の投稿が無限にページングされる問題を修正

### Server
- channels/search Endpoint APIの追加
- APIパラメータサイズ上限を32kbから1mbに緩和
- プッシュ通知送信時のパフォーマンスを改善
- ローカルのカスタム絵文字のキャッシュが効いていなかった問題を修正
- アンテナのノート、チャンネルのノート、通知が正常に作成できないことがある問題を修正
- ストリーミングのLTLチャンネルでサーバー側にエラーログが出るのを修正

### Service Worker
- 「通知が既読になったらプッシュ通知を削除する」を復活
  * 「プッシュ通知が更新されました」の挙動を変えた（ホストとバージョンを表示するようにし、一定時間後の削除は行わないように）
- プッシュ通知が実績を解除 (achievementEarned) に対応
- プッシュ通知のアクションから既存のクライアントの投稿フォームを開くことになった際の挙動を修正
- たくさんのプッシュ通知を閉じた際、その通知の数だけnotifications/mark-all-as-readを叩くのをやめるように

## 13.11.1
リリース日: 2023/04/09

### General
- チャンネルの投稿を過去までさかのぼれるように

### Client
- PWA時の絵文字ピッカーの位置をホームバーに重ならないように調整
- リスト管理の画面でリストが無限に読み込まれる問題を修正
- 自分のクリップが無限に読み込まれる問題を修正
- チャンネルのお気に入りが無限に読み込まれる問題を修正
- さがすのローカルユーザー（ピンどめ）が無限に生成される問題を修正
- チャンネルを新規作成できない問題を修正
- ユーザープレビューが表示されない問題を修正

### Server
- 通知読み込みでエラーが発生する場合がある問題を修正
- リアクションできないことがある問題を修正
- IDをaid以外に設定している場合の問題を修正
- 連合しているインスタンスについて予期せず配送が全て停止されることがある問題を修正


## 13.11.0
リリース日: 2023/04/08

### NOTE
- このバージョンからRedis 7.xが必要です。
- アップデートを行うと全ての通知およびアンテナのノートはリセットされます。

### General
- チャンネルをお気に入りに登録できるように
  - タイムラインのアンテナ選択などでは、フォローしているアンテナの代わりにお気に入りしたアンテナが表示されるようになっています。チャンネルをお気に入りに登録するには、当該チャンネルのページ→概要→⭐️のボタンを押します。
- チャンネルにノートをピン留めできるように

### Client
- 投稿フォームのデザインを改善
- 検索ページでURLを入力した際に照会したときと同等の挙動をするように
- ノートのリアクションを大きく表示するオプションを追加
- ギャラリー一覧にメディア表示と同じように NSFW 設定を反映するように（ホバーで表示）
- オブジェクトストレージの設定画面を分かりやすく
- 広告・お知らせが新規登録時に増殖しないように
-　「にゃああああああああああああああ！！！！！！！！！！！！」 (`isCat`) 有効時にアバターに表示される猫耳について挙動を変更
  - 「UIにぼかし効果を使用」 (`useBlurEffect`) で次の挙動が有効になります
	  - 猫耳のアバター内部部分をぼかしでマスク表示してより猫耳っぽく見えるように
	- 「UIのアニメーションを減らす」 (`reduceAnimation`) で猫耳を撫でられなくなります
- Add Minimizing ("folding") of windows

### Server
- PostgreSQLのレプリケーション対応
	- 設定ファイルの `dbReplications` および `dbSlaves` にて設定できます
- イベント用Redisを別サーバーに分離できるように
- ジョブキュー用Redisを別サーバーに分離できるように
- サーバーの全体的なパフォーマンスを向上
- ノート作成時のパフォーマンスを向上
- アンテナのタイムライン取得時のパフォーマンスを向上
- チャンネルのタイムライン取得時のパフォーマンスを向上
- 通知に関する全体的なパフォーマンスを向上
- webhookがcontent-type text/plain;charset=UTF-8 で飛んでくる問題を修正

## 13.10.3
リリース日： 2023/03/25

### General
- コンディショナルロールの条件に「投稿数が～以下」「投稿数が～以上」を追加
- リアクション非対応AP実装からのLikeアクティビティの解釈を👍から♥に

### Client
- クリップボタンをノートアクションに追加できるように
- センシティブワードの一覧にピン留めユーザーのIDが表示される問題を修正

### Server
- リモートユーザーのチャート生成を無効にするオプションを追加
- リモートサーバーのチャート生成を無効にするオプションを追加
- ドライブのチャートはローカルユーザーのみ生成するように
- 空のアンテナが作成できるのを修正

## 13.10.2
リリース日： 2023/03/22

### Server
- 絵文字を編集すると保存できないことがある問題を修正

### Client
- ドライブファイルのメニューが正常に動作しない問題を修正

## 13.10.1
リリース日： 2023/03/22

### Client
- Misskey PlayのPlayボタンを押した時にエラーが発生する問題を修正

## 13.10.0
リリース日： 2023/03/22

### General
- ユーザーごとにRenoteをミュートできるように
- ノートごとに絵文字リアクションを受け取るか設定できるように
- クリップをお気に入りに登録できるように
- ノート検索の利用可否をロールで制御可能に(デフォルトでオフ)
- ロールの並び順を設定可能に
- カスタム絵文字にライセンス情報を付与できるように
- 指定した文字列を含む投稿の公開範囲をホームにできるように
- 使われてないアンテナは自動停止されるように

### Client
- 設定から自分のロールを確認できるように
- 広告一覧ページを追加
- ドライブクリーナーを追加
- DM作成時にメンションも含むように
- フォロー申請のボタンのデザインを改善
- 付箋ウィジェットの高さを設定可能に
- APオブジェクトを入力してフェッチする機能とユーザーやノートの検索機能を分離
- ナビゲーションバーの項目に「プロフィール」を追加できるように
- ナビゲーションバーのカスタマイズをドラッグ&ドロップで行えるように
- ジョブキューの再試行をワンクリックでできるように
- AiScriptを0.13.1に更新
- oEmbedをサポートしているウェブサイトのプレビューができるように
	- YouTubeをoEmbedでロードし、プレビューで共有ボタンを押すとOSの共有画面がでるように
	- ([FirefoxでSpotifyのプレビューを開けるとフルサイズじゃなくプレビューサイズだけ再生できる問題](https://bugzilla.mozilla.org/show_bug.cgi?id=1792395)があります)
	- (すでにブラウザーでキャッシュされたリンクに対しては以前のプレビュー行動が行われてます。その場合、ブラウザーのキャッシュをクリアしてまた試してください。)
- プロフィールで設定した情報が削除できない問題を修正
- ロールで広告を無効にするとadmin/adsでプレビューがでてこない問題を修正
- /api-consoleページにアクセスすると404が出る問題を修正
- Safariでプラグインが複数ある場合に正常に読み込まれない問題を修正
- Bookwyrmのユーザーのプロフィールページで「リモートで表示」をタップしても反応がない問題を修正
- 非ログイン時の「Misskeyについて」の表示を修正
- PC版にて「設定」「コントロールパネル」のリンクを2度以上続けてクリックした際に空白のページが表示される問題を修正

### Server
- OpenAPIエンドポイントを復旧
- WebP/AVIF/JPEGのweb公開用画像は、サーバーサイドではJPEGではなくWebPに変換するように
- アニメーション画像のサムネイルを生成するように
- アクティブユーザー数チャートの記録上限値を拡張
- Playのソースコード上限文字数を2倍に拡張
- 配送先サーバーが410 Goneで応答してきた場合は自動で配送停止をするように
- avatarBlurHash/bannerBlurHashの型をstringに限定
- タイムライン取得時のパフォーマンスを改善
- SMTP Login id length is too short
- API上で`visibility`を`followers`に設定してrenoteすると連合や削除で不具合が発生する問題を修正
- AWS S3からのファイル削除でNoSuchKeyエラーが出ると進めらない状態になる問題を修正
- `disableCache: true`を設定している場合に絵文字管理操作でエラーが出る問題を修正
- リテンション分析が上手く機能しないことがあるのを修正
- 空のアンテナが作成できないように修正
- 特定の条件で通報が見れない問題を修正
- 絵文字の名前に任意の文字が使用できる問題を修正


## 13.9.2
リリース日： 2023/03/06

### Improvements
- クリップ、チャンネルページに共有ボタンを追加
- チャンネルでタイムライン上部に投稿フォームを表示するかどうかのオプションを追加
- ブラウザでメディアプロキシ(/proxy)からファイルを保存した際に、なるべくオリジナルのファイル名を継承するように
- ドライブの「URLからアップロード」で、content-dispositionのfilenameがあればそれをファイル名に
- Identiconがローカルとリモートで同じになるように
  - これまでのIdenticonは異なる画像になります
- サーバーのパフォーマンスを改善

### Bugfixes
- ロールの権限で「一般ユーザー」のロールがいきなり設定できない問題を修正
- ユーザーページのバッジ表示を適切に折り返すように @arrow2nd
- fix(client): みつけるのロール一覧でコンディショナルロールが含まれるのを修正
- macOSでDev Containerが動作しない問題を修正 @RyotaK

## 13.9.1
リリース日： 2023/03/03

### Bugfixes
- ノートに添付したファイルが表示されない場合があるのを修正

## 13.9.0
リリース日： 2023/03/03

### Improvements
- 時限ロール
- アンテナでCWも検索対象にするように
- ノートの操作部をホバー時のみ表示するオプションを追加
- サウンドを追加
- サーバーのパフォーマンスを改善

### Bugfixes
- 外部メディアプロキシ使用時にアバタークロップができない問題を修正
- fix(server): メールアドレス更新時にバリデーションが正しく行われていないのを修正
- fix(server): チャンネルでミュートが正しく機能していないのを修正
- プッシュ通知でカスタム絵文字リアクションを表示できなかった問題を修正

## 13.8.1
リリース日： 2023/02/26

### Bugfixes
- モバイルでドロワーメニューが表示されない問題を修正

## 13.8.0
リリース日： 2023/02/26

### Improvements
- チャンネル内ハイライト
- ホームタイムラインのパフォーマンスを改善
- renoteした際の表示を改善
- バックグラウンドで一定時間経過したらページネーションのアイテム更新をしない
- enhance(client): MkUrlPreviewの閉じるボタンを見やすく
- Add dialog to remove follower
- enhance(client): improve clip menu ux
- 検索画面の統合
- enhance(client): ノートメニューからユーザーメニューを開けるように
- photoswipe 表示時に戻る操作をしても前の画面に戻らないように

### Bugfixes
- Windows環境でswcを使うと正しくビルドできない問題の修正
- fix(client): Android ChromeでPWAとしてインストールできない問題を修正
- 未知のユーザーが deleteActor されたら処理をスキップする
- fix(server): notes/createで、fileIdsと見つかったファイルの数が異なる場合はエラーにする
- fix(server): notes/createのバリデーションが機能していないのを修正
- fix(server): エラーのスタックトレースは返さないように

## 13.7.2
リリース日： 2023/02/23

### Note
13.7.0以前からアップデートする場合は全ての通知が削除されます。

### Improvements
- enhance: make pwa icon maskable
- chore(client): tweak custom emoji size

### Bugfixes
- マイグレーションが失敗することがあるのを修正

## 13.7.0
リリース日： 2023/02/22

### Changes
- チャット機能が削除されました

### Improvements
- Server: URLプレビュー（summaly）はプロキシを通すように
- Client: 2FA設定のUIをまともにした
- セキュリティキーの名前を変更できるように
- enhance(client): add quiz preset for play
- 広告開始時期を設定できるように
- みつけるで公開ロール一覧とそのメンバーを閲覧できるように
- enhance(client): MFMのx3, x4が含まれていたらノートをたたむように
- enhance(client): make possible to reload page of window

### Bugfixes
- ユーザー検索ダイアログでローカルユーザーを絞って検索できない問題を修正
- fix(client): MkHeader及びデッキのカラムでチャンネル一覧を選択したとき、最大5個までしか表示されない
- 管理画面の広告を10個以上見えるように
- Moderation note が保存できない
- ユーザーのハッシュタグ検索が機能していないのを修正

## 13.6.1
リリース日： 2023/02/12

### Improvements
- アニメーションを少なくする設定の時、MkPageHeaderのタブアニメーションを無効化
- Backend: activitypub情報がcorsでブロックされないようヘッダーを追加
- enhance: レートリミットを0%にできるように
- チャンネル内Renoteを行えるように

### Bugfixes
- Client: ユーザーページでアクティビティを見ることができない問題を修正

## 13.6.0
リリース日： 2023/02/11

### Improvements
- MkPageHeaderをごっそり変えた
  * モバイルではヘッダーは上下に分割され、下段にタブが表示されるように
  * iconOnlyのタブ項目がアクティブな場合にはタブのタイトルを表示するように
  * メインタイムラインではタイトルを表示しない
  * メインタイムラインかつモバイルで表示される左上のアバターを選択するとアカウントメニューが開くように
- ユーザーページのノート一覧をタブとして分離
- コンディショナルロールもバッジとして表示可能に
- enhance(client): ロールをより簡単に付与できるように
- enhance(client): 一度見たノートのRenoteは省略して表示するように
- enhance(client): 迷惑になる可能性のある投稿を行う前に警告を表示
- リアクションの数が多い場合の表示を改善
- 一部のMFM構文をopt-outに

### Bugfixes
- Client: ユーザーページでタブがほとんど見れないことがないように

## 13.5.6
リリース日： 2023/02/10

### Improvements
- 非ログイン時にMiAuthを踏んだ際にMiAuthであることを表示する
- /auth/のUIをアップデート
- 利用規約同意UIの調整
- クロップ時の質問を分かりやすく

### Bugfixes
- fix: prevent clipping audio plyr's tooltip

## 13.5.4
リリース日： 2023/02/09

### Improvements
- Server: UIのHTML（ノートなどの特別なページを除く）のキャッシュ時間を15秒から30秒に
- i/notificationsのレートリミットを緩和

### Bugfixes
- fix(client): validate url to improve security
- fix(client): dateの初期値が正常に入らない時がある

## 13.5.3
リリース日： 2023/02/09

### Improvements
- Client: デッキにチャンネルカラムを追加

## 13.5.2
リリース日： 2023/02/08

### Changes
- Revert: perf(client): do not render custom emojis in user names

### Bugfixes
- Client: register_note_view_interruptor not working
- Client: ログイントークンの再生成が出来ない

## 13.5.0
リリース日： 2023/02/08

### Changes
- perf(client): do not render custom emojis in user names

### Improvements
- Client: disableShowingAnimatedImagesのデフォルト値をprefers-reduced-motionにする
- enhance(client): tweak medialist style

### Bugfixes
- fix docker health check
- Client: MkEmojiPickerでもChromeで検索ダイアログで変換確定するとそのまま検索されてしまうのを修正
- fix(mfm): default degree not used in rotate
- fix(server): validate urls from ap to improve security

## 13.4.0
リリース日： 2023/02/05

### Improvements
- ロールにアイコンを設定してユーザー名の横に表示できるように
- feat: timeline page for non-login users
- 実績の単なるラッキーの獲得確立を調整
- Add Thai language support

### Bugfixes
- fix(server): 自分のノートをお気に入りに登録しても実績解除される問題を修正
- fix(server): clean up file in FileServer
- fix(server): Deny UNIX domain socket
- fix(server): validate filename and emoji name to improve security
- fix(client): validate input response in aiscript
- fix(client): add webhook delete button
- fix(client): tweak notification style
- fix(client): インラインコードを折り返して表示する

## 13.3.3
リリース日： 2023/02/04

### Bugfixes
- Server: improve security

## 13.3.2
リリース日： 2023/02/04

### Improvements
- 外部メディアプロキシへの対応を強化しました  
  外部メディアプロキシのFastify実装を作りました  
  https://github.com/misskey-dev/media-proxy
- Server: improve performance

### Bugfixes
- Client: validate urls to improve security

## 13.3.1
リリース日： 2023/02/04

### Bugfixes
- Client: カスタム絵文字にアニメーション画像を再生しない設定が適用されていない問題を修正
- Client: オートコンプリートでUnicode絵文字がカスタム絵文字として表示されてしまうのを修正
- Client: Fix Vue-plyr CORS issue
- Client: validate urls to improve security

## 13.3.0
リリース日： 2023/02/03

### Changes
- twitter/github/discord連携機能が削除されました
- ハッシュタグごとのチャートが削除されました
- syslogのサポートが削除されました

### Improvements
- ロールで広告の非表示が有効になっている場合は最初から広告を非表示にするように

## 13.2.6
リリース日： 2023/02/01

### Changes
- docker-compose.ymlをdocker-compose.yml.exampleにしました。docker-compose.ymlとしてコピーしてから使用してください。

### Improvements
- 絵文字ピッカーのパフォーマンスを改善
- AiScriptを0.12.4に更新

### Bugfixes
- Server: リレーと通信できない問題を修正
- Client: classicモード使用時にwindowサイズによってdefaultに変更された後に、windowサイズが元に戻ったらclassicに戻すように修正 #9669
- Client: Chromeで検索ダイアログで変換確定するとそのまま検索されてしまう問題を修正

## 13.2.4
リリース日： 2023/01/27

### Improvements
- リモートカスタム絵文字表示時のパフォーマンスを改善
- Default to `animation: false` when prefers-reduced-motion is set
- リアクション履歴が公開なら、ログインしていなくても表示できるように
- tweak blur setting
- tweak custom emoji cache

### Bugfixes
- fix aggregation of retention
- ダッシュボードでオンラインユーザー数が表示されない問題を修正
- フォロー申請・フォローのボタンが、通知から消えている問題を修正

## 13.2.3
リリース日： 2023/01/26

### Improvements
- カスタム絵文字の更新をリアルタイムで反映するように

### Bugfixes
- turnstile-failed: missing-input-secret

## 13.2.2
リリース日： 2023/01/25

### Improvements
- サーバーのパフォーマンスを改善

### Bugfixes
- サインイン時に誤ったレートリミットがかかることがある問題を修正
- MFMのposition、rotate、scaleで小数が使えない問題を修正

## 13.2.1
リリース日： 2023/01/24

### Improvements
- デザインの調整
- サーバーのパフォーマンスを改善

## 13.2.0
リリース日： 2023/01/23

### Improvements
- onlyServer / onlyQueue オプションを復活
- 他人の実績閲覧時は獲得条件を表示しないように
- アニメーション減らすオプション有効時はリアクションのアニメーションを無効に
- カスタム絵文字一覧のパフォーマンスを改善

### Bugfixes
- Aiscript: button is not defined

## 13.1.1
リリース日： 2023/01/22

### Improvements
- ローカルのカスタム絵文字を表示する際のパフォーマンスを改善
- Client: 瞬間的に大量の実績を解除した際の挙動を改善

### Bugfixes
- Client: アップデート時にローカリゼーションデータが更新されないことがあるのを修正

## 13.1.0
リリース日： 2023/01/21

### Improvements
- 実績機能
- Playのプリセットを追加
- Playのscriptの文字数制限を緩和
- AiScript GUIの強化
- リアクション一覧詳細ダイアログを表示できるように
- 存在しないカスタム絵文字をテキストで表示するように
- Alt text in image viewer
- ジョブキューのプロセスとWebサーバーのプロセスを分離

### Bugfixes
- playを削除する手段がなかったのを修正
- The … button on notes does nothing when not logged in
- twitterと連携するときに autwh is not a function になるのを修正

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
