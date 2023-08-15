# Catatan Rilis
Halaman ini merupakan catatan rilis versi Misskey yang telah dipublikasikan.

***Penerjemahan halaman ini diutamakan pada versi rilisan terbaru dari Misskey, oleh karena itu sebagian dari halaman ini masih belum diterjemahkan***

## 13.14.2
Tanggal Rilis: 2023/07/27

### Klien
- Tidak menginisialisasi lini masa daftar ketika menambahkan/menghapus pengguna dalam lini masa daftar.
- Variabel untuk mendapatkan URL diubah menjadi fungsi CURRENT_URL -> Mk:url()
- Perbaikan: Bagian bawah halaman disembunyikan oleh bilah navigasi pada tampilan seluler
- Perbaikan: Tidak dapat bergulir pada beberapa dialog modal
- Perbaikan: Tidak dapat menyeleksi semua emoji dalam menu emoji kustom
- Perbaikan: Masalah kebocoran memori pada PhotoSwipe

### Peladen
- Perbaikan: Tidak dapat menampilkan "Selebihnya" karena offset API yang rusak
- Perbaikan: Postingan dari peladen luar tidak dapat muncul di lini masa

## 13.14.1
Tanggal Rilis: 2023/07/21

### Umum
- Peningkatan fungsionalitas fitur undangan
  * Sekarang kamu dapat memeriksa kode undangan yang telah kamu terbitkan sebelumnya.
  * Menetapkan batas jumlah kode undangan yang dikeluarkan, batasan periode waktu, serta tanggal kedaluwarsa dapat diatur dalam setiap peran.  
  * Sekarang kamu juga dapat memeriksa pengguna mana yang telah membuat dan menggunakan kode undangan. 
- Peran yang diberikan kepada pengguna dengan tanggal kedaluwarsa, dapat dilihat tanggal kedaluwarsanya di halaman moderasi pengguna
- Pembuatan identicon dapat dinonaktifkan untuk meningkatkan kinerja peladen
- Informasi mesin peladen dapat dinonaktifkan untuk meningkatkan kinerja peladen

### Klien
- Dapat membuka layar sunting Antena dan Daftar dari menu kolom antarmuka Dek
- Gambar dapat dipotong melalui menu berkas di dalam Drive
- Gambar dapat disembunyikan seperti layaknya video
- Peningkatan: Menyematkan catatan dapat menampilkan beberapa gambar dan video
- Pengunggahan tanpa menyimpan gambar asli kini diunggah ke dalam format WebP (kecuali di peramban Safari)
- Ketika "Tutup renote yang sudah kamu lihat" diaktifkan, Renote dari catatan milikmu akan ditutup juga
- Ketika menggunakan mode pengembang, ID Folder beserta Berkas kini dapat disalin
- Ketika kutipan diperluas dengan menekan tombol "Selebihnya", kutipan tersebut kini dapat ditutup dengan tombol "Tutup"
- Menambahkan tombol untuk menyalin URL profil #11190
- (AiScript) `CURRENT_URL` kini dapat digunakan dalam URL yang sedang ditampilkan(AiScript)
- Menambahkan tombol "Tambahkan ke Antena" pada menu konteks pengguna.
- Ketika membuka kanal yang tidak diikuti atau disukai, buka halaman ikhtisar
- Penampil gambar kini dapat ditutup dengan mengetuk/mengeklik di bagian latar belakang penampil gambar
- Menambahkan tombol muat ulang pada layar ketika sedang luring
- Pengaturan bawaan visibilitas catatan kini juga berlaku pada Renote
- Menambahkan pengaturan untuk tidak menampilkan dalam antarmuka bawaan saat mengakses halaman non-root dengan antarmuka Dek
- ID Peran sekarang dapat dicek melalui menu pengaturan peran
- Peningkatan performa pada saat membuka menu konteks
- Peningkatan tampilan visual kolom mengikuti/diikuti ketika profil diatur pribadi
- Pelipatan otomatis ketika teks tubuh berisi MFM sekarang juga berlaku untuk balasan dan RN yang dikutip
  - position tidak lagi berlaku
- AiScript diperbaharui ke versi 0.15.0
- Perbaikan: Metrik server dimiringkan 90 derajat
- Perbaikan: Kesalahan pada saat membuka halaman yang memerlukan kredensial saat tidak masuk
- Perbaikan: Masalah tautan dalam sparkle yang tidak dapat diklik
- Perbaikan: Masalah posisi popup dalam ZenUI yang salah
- Perbaikan: Posisi gulir tidak dipertahankan pada transisi halaman
- Perbaikan: Paginasi pada Folder tidak berfungsi #11180
- Perbaikan: Teks akan muncul keluar dari layar pratinjau ketika menulis kalimat yang panjang
- Perbaikan: Pengaturan font sistem tidak tercermin dengan benar
- Perbaikan: Notifikasi push tidak ditampilkan dengan benar ketika angket telah berakhir
- Perbaikan: HTMLAudioElement.play tidak lagi dijalankan ketika MasterVolume diatur ke 0 dan juga saat pengaturan volume setiap suara notifikasi diatur ke 0

### Peladen
- Peningkatan kinerja streaming dengan mengurangi jumlah JSON.parse
- Pemuatan model nsfwjs dikecualikan sehingga beban penggandaan tidak meningkatkan penggunaan memori
- Peningkatan performa dari pengiriman federasi (merevisi mekanisme penguncian dan penggunaan tembolok Redis)
- Mengurangi signedGet dalam catatan tersorot
- Peningkatan kinerja dengan mengubah panjang kunci untuk penandatanganan ActivityPub menjadi 2048bit (hanya berlaku untuk akun baru)
- Manambahkan opsi untuk hanya menonaktifkan tembolok berkas sensitif pada peladen luar
- Rentang catatan yang diindeks dapat diatur di Meilisearch
- Ekspor catatan dengan detil berkas
- Penambahan dukungan soket unix
- Opsi konfigurasi ioredis kini dapat ditentukan dalam berkas konfigurasi
- Perbaikan: Emoji kustom yang diekspor tidak dapat dibaca bila ukuran berkas zip-nya terlalu besar
- Perbaikan: Adanya pengiriman ActivityPub yang tidak perlu ke peladen luar
- Perbaikan: Hapus indeks Meilisearch ketika catatan dihapus
- Perbaikan: Penanganan kesalahan pada PostgreSQL di lingkungan peladen non-bahasa Inggris
- Perbaikan: Perilaku base64 dalam instansi ikon
- Perbaikan: Kekutu pada saat memparsing URI `acct` yang mengarah ke `Person` lokal
- Perbaikan: Masalah pada antena yang dinonaktifkan tidak dapat diaktifkan kembali

## 13.13.2
Tanggal Rilis: 2023/06/13

### Umum
- エラー時や項目が存在しないときなどのアイコン画像をサーバー管理者が設定できるように
- ロールが付与されているユーザーリストを非公開にできるように
- サーバーの負荷が非常に高いため、ユーザー統計表示機能を削除しました

### Klien
- Fix: タブがバックグラウンドでもstreamが切断されないように

### Peladen
- Fix: キャッシュが溜まり続けないように

## 13.13.1
Tanggal Rilis: 2023/06/06

### Klien
- Fix: タブがアクティブな間はstreamが切断されないように

### Peladen
- Fix: api/metaで`TypeError: JSON5.parse is not a function`エラーが発生する問題を修正

## 13.13.0
Tanggal Rilis: 2023/06/05

### Umum
- カスタム絵文字ごとにそれをリアクションとして使えるロールを設定できるように
- カスタム絵文字ごとに連合するかどうか設定できるように
- カスタム絵文字ごとにセンシティブフラグを設定できるように
- センシティブなカスタム絵文字のリアクションを受け入れない設定が可能に
- タイムラインにフォロイーの行った他人へのリプライを含めるかどうかの設定をアカウントに保存するのをやめるように
	- 今後はAPI呼び出し時およびストリーミング接続時に設定するようになります
- リストを公開できるようになりました

### Klien
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

### Peladen
- bullをbull-mqにアップグレードし、ジョブキューのパフォーマンスを改善
- ストリーミングのパフォーマンスを改善
- Fix: 無効化されたアンテナにアクセスがあった際に再度有効化するように
- Fix: お知らせの画像URLを空にできない問題を修正
- Fix: i/notificationsのsinceIdが機能しない問題を修正
- Fix: pageのピン留めを解除することができない問題を修正

## 13.12.2
Tanggal Rilis: 2023/05/12

## CATATAN
Meilisearchの設定に`index`が必要になりました。値はMisskeyサーバーのホスト名にすることをお勧めします(アルファベット、ハイフン、アンダーバーのみ使用可能)。例: `misskey-io`
過去に作成された`notes`インデックスは、`<index名>---notes`にリネームが必要です。例: `misskey-io---notes`

### Umum
- 投稿したコンテンツのAIによる学習を軽減するオプションを追加

### Klien
- ユーザーを指定してのノート検索が可能に
- アカウント初期設定ウィザードにプライバシー設定を追加
- リテンション率チャートに折れ線グラフを追加
- Fix: ブラーエフェクトを有効にしている状態で高負荷になる問題を修正
- Fix: Pageにおいて画像ブロックに画像を設定できない問題を修正
- Fix: カラーバーがリプライには表示されないのを修正
- Fix: チャンネル内の検索ボックスが挙動不審な問題を修正
- Fix: リテンションチャートのレンダリングを修正
- Fix: リアクションエフェクトのレンダリングの問題を修正

### Peladen
- センシティブワードの登録にAnd、正規表現が使用できるようになりました。
- Fix: ひとつのMeilisearchサーバーを複数のMisskeyサーバーで使えない問題を修正

## 13.12.1
Tanggal Rilis: 2023/05/09

### Klien
- プロフィール画面におけるモデレーションノートの表示を調整
- Fix: 一部ダイアログが表示されない問題を修正
- Fix: MkUserInfoのフォローボタンが変な位置にある問題を修正

### Peladen
- Fix: リモートサーバーの情報が更新できない問題を修正
- Fix: 13.11を経験しない状態で13.12にアップデートした場合ユーザープロフィール関連の画像が消失する問題を修正

## 13.12.0
Tanggal Rilis: 2023/05/09

### Catatan
- Node.js 18.6.0以上が必要になりました

### Umum
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

### Klien
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

### Peladen
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
Tanggal Rilis: 2023/04/13

### Umum
- 指定したロールを持つユーザーのノートのみが流れるロールタイムラインを追加
	- Deckのカラムとしても追加可能
- カスタム絵文字関連の改善
  * ノートなどに含まれるemojis（populateEmojiの結果）は（プロキシされたURLではなく）オリジナルのURLを指すように
  * MFMでx3/x4もしくはscale.x/yが2.5以上に指定されていた場合にはオリジナル品質の絵文字を使用するように
- カスタム絵文字でリアクションできないことがある問題を修正

### Klien
- チャンネルのピン留めされたノートの順番が正しくない問題を修正

### Peladen
- フォローインポートなどでの大量のフォロー等操作をキューイングするように #10544 @nmkj-io
- Misskey Webでのサーバーサイドエラー画面を改善
- Misskey Webでのサーバーサイドエラーのログが残るように
- ノート作成時のアンテナ追加パフォーマンスを改善
- アンテナとロールTLのuntil/sinceプロパティが動くように

## 13.11.2
Tanggal Rilis: 2023/04/11

### Catatan
- 13.11.0または13.11.1から13.11.2以降にアップデートする場合、Redisのカスタム絵文字のキャッシュを削除する必要があります(https://github.com/misskey-dev/misskey/issues/10502#issuecomment-1502790755 参照)

### Umum
- チャンネルの検索用ページの追加

### Klien
- 常に広告を見られるオプションを追加
- ユーザーページの画像一覧が表示されない問題を修正
- webhook, 連携アプリ一覧でコンテンツが重複して表示される問題を修正
- iPhoneで絵文字ピッカーの表示が崩れる問題を修正
- iPhoneでウィジェットドロワーの「ウィジェットを編集」が押しにくい問題を修正
- 投稿フォームのデザインを調整
- ギャラリーの人気の投稿が無限にページングされる問題を修正

### Peladen
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
Tanggal Rilis: 2023/04/09

### Umum
- チャンネルの投稿を過去までさかのぼれるように

### Klien
- PWA時の絵文字ピッカーの位置をホームバーに重ならないように調整
- リスト管理の画面でリストが無限に読み込まれる問題を修正
- 自分のクリップが無限に読み込まれる問題を修正
- チャンネルのお気に入りが無限に読み込まれる問題を修正
- さがすのローカルユーザー（ピンどめ）が無限に生成される問題を修正
- チャンネルを新規作成できない問題を修正
- ユーザープレビューが表示されない問題を修正

### Peladen
- 通知読み込みでエラーが発生する場合がある問題を修正
- リアクションできないことがある問題を修正
- IDをaid以外に設定している場合の問題を修正
- 連合しているインスタンスについて予期せず配送が全て停止されることがある問題を修正


## 13.11.0
Tanggal Rilis: 2023/04/08

### Catatan
- このバージョンからRedis 7.xが必要です。
- アップデートを行うと全ての通知およびアンテナのノートはリセットされます。

### Umum
- チャンネルをお気に入りに登録できるように
  - タイムラインのアンテナ選択などでは、フォローしているアンテナの代わりにお気に入りしたアンテナが表示されるようになっています。チャンネルをお気に入りに登録するには、当該チャンネルのページ→概要→⭐️のボタンを押します。
- チャンネルにノートをピン留めできるように

### Klien
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

### Peladen
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
Tanggal Rilis： 2023/03/25

### Umum
- コンディショナルロールの条件に「投稿数が～以下」「投稿数が～以上」を追加
- リアクション非対応AP実装からのLikeアクティビティの解釈を👍から♥に

### Klien
- クリップボタンをノートアクションに追加できるように
- センシティブワードの一覧にピン留めユーザーのIDが表示される問題を修正

### Peladen
- リモートユーザーのチャート生成を無効にするオプションを追加
- リモートサーバーのチャート生成を無効にするオプションを追加
- ドライブのチャートはローカルユーザーのみ生成するように
- 空のアンテナが作成できるのを修正

## 13.10.2
Tanggal Rilis： 2023/03/22

### Peladen
- 絵文字を編集すると保存できないことがある問題を修正

### Klien
- ドライブファイルのメニューが正常に動作しない問題を修正

## 13.10.1
Tanggal Rilis： 2023/03/22

### Klien
- Misskey PlayのPlayボタンを押した時にエラーが発生する問題を修正

## 13.10.0
Tanggal Rilis： 2023/03/22

### Umum
- ユーザーごとにRenoteをミュートできるように
- ノートごとに絵文字リアクションを受け取るか設定できるように
- クリップをお気に入りに登録できるように
- ノート検索の利用可否をロールで制御可能に(デフォルトでオフ)
- ロールの並び順を設定可能に
- カスタム絵文字にライセンス情報を付与できるように
- 指定した文字列を含む投稿の公開範囲をホームにできるように
- 使われてないアンテナは自動停止されるように

### Klien
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

### Peladen
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
Tanggal Rilis： 2023/03/06

### Peningkatan
- クリップ、チャンネルページに共有ボタンを追加
- チャンネルでタイムライン上部に投稿フォームを表示するかどうかのオプションを追加
- ブラウザでメディアプロキシ(/proxy)からファイルを保存した際に、なるべくオリジナルのファイル名を継承するように
- ドライブの「URLからアップロード」で、content-dispositionのfilenameがあればそれをファイル名に
- Identiconがローカルとリモートで同じになるように
  - これまでのIdenticonは異なる画像になります
- サーバーのパフォーマンスを改善

### Perbaikan Bug
- ロールの権限で「一般ユーザー」のロールがいきなり設定できない問題を修正
- ユーザーページのバッジ表示を適切に折り返すように @arrow2nd
- fix(client): みつけるのロール一覧でコンディショナルロールが含まれるのを修正
- macOSでDev Containerが動作しない問題を修正 @RyotaK

## 13.9.1
Tanggal Rilis： 2023/03/03

### Perbaikan Bug
- ノートに添付したファイルが表示されない場合があるのを修正

## 13.9.0
Tanggal Rilis： 2023/03/03

### Peningkatan
- 時限ロール
- アンテナでCWも検索対象にするように
- ノートの操作部をホバー時のみ表示するオプションを追加
- サウンドを追加
- サーバーのパフォーマンスを改善

### Perbaikan Bug
- 外部メディアプロキシ使用時にアバタークロップができない問題を修正
- fix(server): メールアドレス更新時にバリデーションが正しく行われていないのを修正
- fix(server): チャンネルでミュートが正しく機能していないのを修正
- プッシュ通知でカスタム絵文字リアクションを表示できなかった問題を修正

## 13.8.1
Tanggal Rilis： 2023/02/26

### Perbaikan Bug
- モバイルでドロワーメニューが表示されない問題を修正

## 13.8.0
Tanggal Rilis： 2023/02/26

### Peningkatan
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

### Perbaikan Bug
- Windows環境でswcを使うと正しくビルドできない問題の修正
- fix(client): Android ChromeでPWAとしてインストールできない問題を修正
- 未知のユーザーが deleteActor されたら処理をスキップする
- fix(server): notes/createで、fileIdsと見つかったファイルの数が異なる場合はエラーにする
- fix(server): notes/createのバリデーションが機能していないのを修正
- fix(server): エラーのスタックトレースは返さないように

## 13.7.2
Tanggal Rilis： 2023/02/23

### Catatan
13.7.0以前からアップデートする場合は全ての通知が削除されます。

### Peningkatan
- enhance: make pwa icon maskable
- chore(client): tweak custom emoji size

### Perbaikan Bug
- マイグレーションが失敗することがあるのを修正

## 13.7.0
Tanggal Rilis： 2023/02/22

### Perubahan
- チャット機能が削除されました

### Peningkatan
- Server: URLプレビュー（summaly）はプロキシを通すように
- Client: 2FA設定のUIをまともにした
- セキュリティキーの名前を変更できるように
- enhance(client): add quiz preset for play
- 広告開始時期を設定できるように
- みつけるで公開ロール一覧とそのメンバーを閲覧できるように
- enhance(client): MFMのx3, x4が含まれていたらノートをたたむように
- enhance(client): make possible to reload page of window

### Perbaikan Bug
- ユーザー検索ダイアログでローカルユーザーを絞って検索できない問題を修正
- fix(client): MkHeader及びデッキのカラムでチャンネル一覧を選択したとき、最大5個までしか表示されない
- 管理画面の広告を10個以上見えるように
- Moderation note が保存できない
- ユーザーのハッシュタグ検索が機能していないのを修正

## 13.6.1
Tanggal Rilis： 2023/02/12

### Peningkatan
- アニメーションを少なくする設定の時、MkPageHeaderのタブアニメーションを無効化
- Backend: activitypub情報がcorsでブロックされないようヘッダーを追加
- enhance: レートリミットを0%にできるように
- チャンネル内Renoteを行えるように

### Perbaikan Bug
- Client: ユーザーページでアクティビティを見ることができない問題を修正

## 13.6.0
Tanggal Rilis： 2023/02/11

### Peningkatan
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

### Perbaikan Bug
- Client: ユーザーページでタブがほとんど見れないことがないように

## 13.5.6
Tanggal Rilis： 2023/02/10

### Peningkatan
- 非ログイン時にMiAuthを踏んだ際にMiAuthであることを表示する
- /auth/のUIをアップデート
- 利用規約同意UIの調整
- クロップ時の質問を分かりやすく

### Perbaikan Bug
- fix: prevent clipping audio plyr's tooltip

## 13.5.4
Tanggal Rilis： 2023/02/09

### Peningkatan
- Server: UIのHTML（ノートなどの特別なページを除く）のキャッシュ時間を15秒から30秒に
- i/notificationsのレートリミットを緩和

### Perbaikan Bug
- fix(client): validate url to improve security
- fix(client): dateの初期値が正常に入らない時がある

## 13.5.3
Tanggal Rilis： 2023/02/09

### Peningkatan
- Client: デッキにチャンネルカラムを追加

## 13.5.2
Tanggal Rilis： 2023/02/08

### Perubahan
- Revert: perf(client): do not render custom emojis in user names

### Perbaikan Bug
- Client: register_note_view_interruptor not working
- Client: ログイントークンの再生成が出来ない

## 13.5.0
Tanggal Rilis： 2023/02/08

### Perubahan
- perf(client): do not render custom emojis in user names

### Peningkatan
- Client: disableShowingAnimatedImagesのデフォルト値をprefers-reduced-motionにする
- enhance(client): tweak medialist style

### Perbaikan Bug
- fix docker health check
- Client: MkEmojiPickerでもChromeで検索ダイアログで変換確定するとそのまま検索されてしまうのを修正
- fix(mfm): default degree not used in rotate
- fix(server): validate urls from ap to improve security

## 13.4.0
Tanggal Rilis： 2023/02/05

### Peningkatan
- ロールにアイコンを設定してユーザー名の横に表示できるように
- feat: timeline page for non-login users
- 実績の単なるラッキーの獲得確立を調整
- Add Thai language support

### Perbaikan Bug
- fix(server): 自分のノートをお気に入りに登録しても実績解除される問題を修正
- fix(server): clean up file in FileServer
- fix(server): Deny UNIX domain socket
- fix(server): validate filename and emoji name to improve security
- fix(client): validate input response in aiscript
- fix(client): add webhook delete button
- fix(client): tweak notification style
- fix(client): インラインコードを折り返して表示する

## 13.3.3
Tanggal Rilis： 2023/02/04

### Perbaikan Bug
- Server: improve security

## 13.3.2
Tanggal Rilis： 2023/02/04

### Peningkatan
- 外部メディアプロキシへの対応を強化しました  
  外部メディアプロキシのFastify実装を作りました  
  https://github.com/misskey-dev/media-proxy
- Server: improve performance

### Perbaikan Bug
- Client: validate urls to improve security

## 13.3.1
Tanggal Rilis： 2023/02/04

### Perbaikan Bug
- Client: カスタム絵文字にアニメーション画像を再生しない設定が適用されていない問題を修正
- Client: オートコンプリートでUnicode絵文字がカスタム絵文字として表示されてしまうのを修正
- Client: Fix Vue-plyr CORS issue
- Client: validate urls to improve security

## 13.3.0
Tanggal Rilis： 2023/02/03

### Perubahan
- twitter/github/discord連携機能が削除されました
- ハッシュタグごとのチャートが削除されました
- syslogのサポートが削除されました

### Peningkatan
- ロールで広告の非表示が有効になっている場合は最初から広告を非表示にするように

## 13.2.6
Tanggal Rilis： 2023/02/01

### Perubahan
- docker-compose.ymlをdocker-compose.yml.exampleにしました。docker-compose.ymlとしてコピーしてから使用してください。

### Peningkatan
- 絵文字ピッカーのパフォーマンスを改善
- AiScriptを0.12.4に更新

### Perbaikan Bug
- Server: リレーと通信できない問題を修正
- Client: classicモード使用時にwindowサイズによってdefaultに変更された後に、windowサイズが元に戻ったらclassicに戻すように修正 #9669
- Client: Chromeで検索ダイアログで変換確定するとそのまま検索されてしまう問題を修正

## 13.2.4
Tanggal Rilis： 2023/01/27

### Peningkatan
- リモートカスタム絵文字表示時のパフォーマンスを改善
- Default to `animation: false` when prefers-reduced-motion is set
- リアクション履歴が公開なら、ログインしていなくても表示できるように
- tweak blur setting
- tweak custom emoji cache

### Perbaikan Bug
- fix aggregation of retention
- ダッシュボードでオンラインユーザー数が表示されない問題を修正
- フォロー申請・フォローのボタンが、通知から消えている問題を修正

## 13.2.3
Tanggal Rilis： 2023/01/26

### Peningkatan
- カスタム絵文字の更新をリアルタイムで反映するように

### Perbaikan Bug
- turnstile-failed: missing-input-secret

## 13.2.2
Tanggal Rilis： 2023/01/25

### Peningkatan
- サーバーのパフォーマンスを改善

### Perbaikan Bug
- サインイン時に誤ったレートリミットがかかることがある問題を修正
- MFMのposition、rotate、scaleで小数が使えない問題を修正

## 13.2.1
Tanggal Rilis： 2023/01/24

### Peningkatan
- デザインの調整
- サーバーのパフォーマンスを改善

## 13.2.0
Tanggal Rilis： 2023/01/23

### Peningkatan
- onlyServer / onlyQueue オプションを復活
- 他人の実績閲覧時は獲得条件を表示しないように
- アニメーション減らすオプション有効時はリアクションのアニメーションを無効に
- カスタム絵文字一覧のパフォーマンスを改善

### Perbaikan Bug
- Aiscript: button is not defined

## 13.1.1
Tanggal Rilis： 2023/01/22

### Peningkatan
- ローカルのカスタム絵文字を表示する際のパフォーマンスを改善
- Client: 瞬間的に大量の実績を解除した際の挙動を改善

### Perbaikan Bug
- Client: アップデート時にローカリゼーションデータが更新されないことがあるのを修正

## 13.1.0
Tanggal Rilis： 2023/01/21

### Peningkatan
- 実績機能
- Playのプリセットを追加
- Playのscriptの文字数制限を緩和
- AiScript GUIの強化
- リアクション一覧詳細ダイアログを表示できるように
- 存在しないカスタム絵文字をテキストで表示するように
- Alt text in image viewer
- ジョブキューのプロセスとWebサーバーのプロセスを分離

### Perbaikan Bug
- playを削除する手段がなかったのを修正
- The … button on notes does nothing when not logged in
- twitterと連携するときに autwh is not a function になるのを修正

## 13.0.0
Tanggal Rilis： 2023/01/16

### Singkat Kata
- New features (Role system, Misskey Play, New widgets, New charts, 🍪👈, etc)
- Rewriten backend
- Better performance (backend and frontend)
- Various usability improvements
- Various UI tweaks

### Fitur-fitur penting
- ロール機能
	- 従来より柔軟にユーザーのポリシーを管理できます。例えば、「インスタンスのパトロンはアンテナを30個まで作れる」「基本的にLTLは見れないが、許可した人だけ見れる」「招待制インスタンスだけどユーザーなら誰でも他者を招待できる」のような運用はもちろん、「ローカルユーザーかつアカウント作成から1日未満のユーザーはパブリックな投稿を行えない」のように複数条件を組み合わせて、自動でロールを付与する設定も可能です。
- Misskey Play
	- 従来の動的なPagesに代わる、新しいプラットフォームです。動的なコンテンツ(アプリケーション)に特化していて、Pagesに比べてはるかに柔軟なアプリケーションを作成可能です。

### Perubahan
#### Untuk Admin Peladen
- Node.js 18.x or later is required
- PostgreSQL 15.x is required
	- Misskey not using 15 specific features at 13.0.0, but may do so in the future.
	- Docker環境でPostgreSQLのアップデートを行う際のガイドはこちら: https://github.com/misskey-dev/misskey/pull/9641#issue-1536336620
- Elasticsearchのサポートが削除されました
	- 代わりに今後任意の検索プロバイダを設定できる仕組みを構想しています。その仕組みを使えば今まで通りElasticsearchも利用できます
- Yarnからpnpmに移行されました
  corepackの有効化を推奨します: `sudo corepack enable`
- インスタンスブロックはサブドメインにも適用されるようになります
- ロールの導入に伴い、いくつかの機能がロールと統合されました
	- モデレーターはロールに統合されました。今までのモデレーター情報は失われるため、予めモデレーター一覧を記録しておき、アップデート後にモデレーターロールを作りアサインし直してください。
	- サイレンスはロールに統合されました。今までのユーザーは恩赦されるため、予めサイレンス一覧を記録しておくのをおすすめします。
	- ユーザーごとのドライブ容量設定はロールに統合されました。
	- インスタンスデフォルトのドライブ容量設定はロールに統合されました。アップデート後、ベースロールもしくはコンディショナルロールでドライブ容量を編集してください。
	- LTL/GTLの解放状態はロールに統合されました。
- Dockerの実行をrootで行わないようにしました。Dockerかつオブジェクトストレージを使用していない場合は`chown -hR 991.991 ./files`を実行してください。  
  https://github.com/misskey-dev/misskey/pull/9560

#### Untuk Pengguna
- ノートのウォッチ機能が削除されました
- アンケートに投票された際に通知が作成されなくなりました
- ノートの数式埋め込みが削除されました
- 新たに動的なPagesを作ることはできなくなりました
	- 代わりにAiScriptを用いてより柔軟に動的なコンテンツを作成できるMisskey Play機能が実装されています。
- AiScriptが0.12.2にアップデートされました
	- 0.12.xの変更点についてはこちら https://github.com/syuilo/aiscript/blob/master/CHANGELOG.md#0120
	- 0.12.x未満のプラグインは読み込むことはできません
- iOS15以下のデバイスはサポートされなくなりました
- Firefox110以下はサポートされなくなりました
  - 109でもContainerQueriesのフラグを有効にする事で問題なく使用できます

#### Untuk Pengembang Aplikasi
- API: metaのレスポンスに`emojis`プロパティが含まれなくなりました
	- カスタム絵文字一覧情報を取得するには、`emojis`エンドポイントにリクエストします
- API: カスタム絵文字エンティティに`url`プロパティが含まれなくなりました
	- 絵文字画像を表示するには、`<instance host>/emoji/<emoji name>.webp`にリクエストすると画像が返ります。
	- e.g. `https://p1.a9z.dev/emoji/misskey.webp`
	- remote: `https://p1.a9z.dev/emoji/syuilo_birth_present@mk.f72u.net.webp`
- API: `user`および`note`エンティティに`emojis`プロパティが含まれなくなりました
- API: `user`エンティティに`avatarColor`および`bannerColor`プロパティが含まれなくなりました
- API: `instance`エンティティに`latestStatus`、`lastCommunicatedAt`、`latestRequestSentAt`プロパティが含まれなくなりました
- API: `instance`エンティティの`caughtAt`は`firstRetrievedAt`に名前が変わりました

### Peningkatan
- Role system @syuilo
- Misskey Play @syuilo
- Introduce retention-rate aggregation @syuilo
- Make possible to export favorited notes @syuilo
- Add per user pv chart @syuilo
- Push notification of Antenna note @tamaina
- AVIF support @tamaina
- Add Cloudflare Turnstile CAPTCHA support @CyberRex0
- レートリミットをユーザーごとに調整可能に @syuilo
- 非モデレーターでも、権限を持つロールをアサインされたユーザーはインスタンスの招待コードを発行できるように @syuilo
- 非モデレーターでも、権限を持つロールをアサインされたユーザーはカスタム絵文字の追加、編集、削除を行えるように @syuilo
- クリップおよびクリップ内のノートの作成可能数を設定可能に @syuilo
- ユーザーリストおよびユーザーリスト内のユーザーの作成可能数を設定可能に @syuilo
- ハードワードミュートの最大文字数を設定可能に @syuilo
- Webhookの作成可能数を設定可能に @syuilo
- ノートをピン留めできる数を設定可能に @syuilo
- Server: signToActivityPubGet is set to true by default @syuilo
- Server: improve syslog performance @syuilo
- Server: Use undici instead of node-fetch and got @tamaina
- Server: Judge instance block by endsWith @tamaina
- Server: improve note scoring for featured notes @CyberRex0
- Server: アンケート選択肢の文字数制限を緩和 @syuilo
- Server: プロフィールの文字数制限を緩和 @syuilo
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
- Client: AiScriptからカスタム絵文字一覧を参照できるように @syuilo
- Client: improve overall performance of client @syuilo
- Client: ui tweaks @syuilo
- Client: clicker game @syuilo

### Perbaikan Bug
- Server: Fix @tensorflow/tfjs-core's MODULE_NOT_FOUND error @ikuradon
- Server: 引用内の文章がnyaizeされてしまう問題を修正 @kabo2468
- Server: Bug fix for Pinned Users lookup on instance @squidicuzz
- Server: Fix peers API returning suspended instances @ineffyble
- Server: trim long text of note from ap @syuilo
- Server: Ap inboxの最大ペイロードサイズを64kbに制限 @syuilo
- Server: アンテナの作成数上限を追加 @syuilo
- Server: pages/likeのエラーIDが重複しているのを修正 @syuilo
- Server: pages/updateのパラメータによってはsummaryの値が更新されないのを修正 @syuilo
- Server: Escape SQL LIKE @mei23
- Server: 特定のPNG画像のアップロードに失敗する問題を修正 @usbharu
- Server: 非公開のクリップのURLでOGPレンダリングされる問題を修正 @syuilo
- Server: アンテナタイムライン（ストリーミング）が、フォローしていないユーザーの鍵投稿も拾ってしまう @syuilo
- Server: follow request list api pagination @sim1222
- Server: ドライブ容量超過時のエラーが適切にレスポンスされない問題を修正 @syuilo
- Client: パスワードマネージャーなどでユーザー名がオートコンプリートされない問題を修正 @massongit
- Client: 日付形式の文字列などがカスタム絵文字として表示されるのを修正 @syuilo
- Client: case insensitive emoji search @saschanaz
- Client: 画面の幅が狭いとウィジェットドロワーを閉じる手段がなくなるのを修正 @syuilo
- Client: InAppウィンドウが操作できなくなることがあるのを修正 @tamaina
- Client: use proxied image for instance icon @syuilo
- Client: Webhookの編集画面で、内容を保存することができない問題を修正 @m-hayabusa
- Client: Page編集でブロックの移動が行えない問題を修正 @syuilo
- Client: update emoji picker immediately on all input @saschanaz
- Client: チャートのツールチップが画面に残ることがあるのを修正 @syuilo
- Client: fix wrong link in tutorial @syuilo

### Ucapan Terima Kasih Khusus
- All contributors
- All who have created instances for the beta test
- All who participated in the beta test

## 12.119.1
Tanggal Rilis： 2022/12/03

### Perbaikan Bug
- Server: Mitigate AP reference chain DoS vector @skehmatics

## 12.119.0
Tanggal Rilis： 2022/09/10

### Peningkatan
- Client: Add following badge to user preview popup @nvisser
- Client: mobile twitter url can be used as widget @caipira113
- Client: Improve clock widget @syuilo

### Perbaikan Bug
- マイグレーションに失敗する問題を修正
- Server: 他人の通知を既読にできる可能性があるのを修正 @syuilo
- Client: アクセストークン管理画面、アカウント管理画面表示できないのを修正 @futchitwo

## 12.118.0
Tanggal Rilis： 2022/08/07

### Peningkatan
- Client: 設定のバックアップ/リストア機能
- Client: Add vi-VN language support
- Client: Add unix time widget @syuilo

### Perbaikan Bug
- Server: リモートユーザーを正しくブロックできるように修正する @xianonn
- Client: 一度作ったwebhookの設定画面を開こうとするとページがフリーズする @syuilo
- Client: MiAuth認証ページが機能していない @syuilo
- Client: 一部のアプリからファイルを投稿フォームへドロップできない場合がある問題を修正 @m-hayabusa

## 12.117.1
Tanggal Rilis： 2022/07/19

### Peningkatan
- Client: UIのブラッシュアップ @syuilo

### Perbaikan Bug
- Server: ファイルのアップロードに失敗することがある問題を修正 @acid-chicken
- Client: リアクションピッカーがアプリ内ウィンドウの後ろに表示されてしまう問題を修正 @syuilo
- Client: ユーザー情報の取得の再試行を修正 @xianonn
- Client: MFMチートシートの挙動を修正 @syuilo
- Client: 「インスタンスからのお知らせを受け取る」の設定を変更できない問題を修正 @syuilo

## 12.117.0
Tanggal Rilis： 2022/07/18

### Peningkatan
- Client: ウィンドウを最大化できるように @syuilo
- Client: Shiftキーを押した状態でリンクをクリックするとアプリ内ウィンドウで開くように @syuilo
- Client: デッキを使用している際、Ctrlキーを押した状態でリンクをクリックするとページ遷移を強制できるように @syuilo
- Client: UIのブラッシュアップ @syuilo

## 12.116.1
Tanggal Rilis： 2022/07/17

### Perbaikan Bug
- Client: デッキUI時に ページで表示 ボタンが機能しない問題を修正 @syuilo
- Error During Migration Run to 12.111.x

## 12.116.0
Tanggal Rilis： 2022/07/16

### Peningkatan
- Client: registry editor @syuilo
- Client: UIのブラッシュアップ @syuilo

### Perbaikan Bug
- Error During Migration Run to 12.111.x
- Server: TypeError: Cannot convert undefined or null to object @syuilo

## 12.115.0
Tanggal Rilis： 2022/07/16

### Peningkatan
- Client: Deckのプロファイル切り替えを簡単に @syuilo
- Client: UIのブラッシュアップ @syuilo

## 12.114.0
Tanggal Rilis： 2022/07/15

### Peningkatan
- RSSティッカーで表示順序をシャッフルできるように @syuilo

### Perbaikan Bug
- クライアントが起動しなくなることがある問題を修正 @syuilo

## 12.113.0
Tanggal Rilis： 2022/07/13

### Peningkatan
- Support `<plain>` syntax for MFM

### Perbaikan Bug
- Server: Fix crash at startup if TensorFlow is not supported @mei23
- Client: URLエンコードされたルーティングを修正

## 12.112.3
Tanggal Rilis： 2022/07/09

### Peningkatan
- Make active email validation configurable

### Perbaikan Bug
- Server: Fix Attempts to update all notifications @mei23

## 12.112.2
Tanggal Rilis： 2022/07/08

### Perbaikan Bug
- Fix Docker doesn't work @mei23  
  Still not working on arm64 environment. (See 12.112.0)

## 12.112.1
Tanggal Rilis： 2022/07/07

same as 12.112.0

## 12.112.0
Tanggal Rilis： 2022/07/07

### Masalah yang diketahui
- 現在arm64環境ではインストールに失敗します。これは次のバージョンで修正される予定です。

### Perubahan
- ハイライトがみつけるに統合されました
- カスタム絵文字ページはインスタンス情報ページに統合されました
- 連合ページはインスタンス情報ページに統合されました
- メンション一覧ページは通知一覧ページに統合されました
- ダイレクト投稿一覧ページは通知一覧ページに統合されました
- メニューからアンテナタイムラインを表示する方法は廃止され、タイムライン上部のアイコンからアクセスするようになりました
- メニューからリストタイムラインを表示する方法は廃止され、タイムライン上部のアイコンからアクセスするようになりました

### Peningkatan
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
- Client: メニューからページをリロードできるように @syuilo
- Client: Improve emoji picker performance @syuilo
- Client: For notes with specified visibility, show recipients when hovering over visibility symbol. @Johann150
- Client: Make widgets available again on a tablet @syuilo
- ユーザーにモデレーションメモを残せる機能 @syuilo
- Make possible to delete an account by admin @syuilo
- Improve player detection in URL preview @mei23
- Add Badge Image to Push Notification #8012 @tamaina
- Server: Improve performance
- Server: Supports IPv6 on Redis transport. @mei23  
  IPv4/IPv6 is used by default. You can tune this behavior via `redis.family`.
- Server: Add possibility to log IP addresses of users @syuilo
- Add additional drive capacity change support @CyberRex0

### Perbaikan Bug
- Server: Fix GenerateVideoThumbnail failed @mei23
- Server: Ensure temp directory cleanup @Johann150
- favicons of federated instances not showing @syuilo
- Admin: The checkbox for blocking an instance works again @Johann150
- Client: Prevent access to user pages when not logged in @pixeldesu @Johann150
- Client: Disable some hotkeys (e.g. for creating a post) for not logged in users @pixeldesu
- Client: Ask users that are not logged in to log in when trying to vote in a poll @Johann150
- Instance mutes also apply in antennas etc. @Johann150

## 12.111.1
Tanggal Rilis： 2022/06/13

### Perbaikan Bug
- some fixes of multiple notification read @tamaina
- some GenerateVideoThumbnail failed @Johann150
- Client: デッキでウィジェットの情報が保存されない問題を修正 @syuilo
- Client: ギャラリーの投稿を開こうとすると編集画面が表示される @futchitwo

## 12.111.0
Tanggal Rilis： 2022/06/11

### Catatan
- Node.js 16.15.0 or later is required

### Peningkatan
- Supports Unicode Emoji 14.0 @mei23
- プッシュ通知を複数アカウント対応に #7667 @tamaina
- プッシュ通知にクリックやactionを設定 #7667 @tamaina
- ドライブに画像ファイルをアップロードするときオリジナル画像を破棄してwebpublicのみ保持するオプション @tamaina
- Server: always remove completed tasks of job queue @Johann150
- Client: アバターの設定で画像をクロップできるように @syuilo
- Client: make emoji stand out more on reaction button @Johann150
- Client: display URL of QR code for TOTP registration @tamaina
- Client: render quote renote CWs as MFM @pixeldesu
- API: notifications/readは配列でも受け付けるように #7667 @tamaina
- API: ユーザー検索で、クエリがusernameの条件を満たす場合はusernameもLIKE検索するように @tamaina
- MFM: Allow speed changes in all animated MFMs @Johann150
- The theme color is now better validated. @Johann150
  Your own theme color may be unset if it was in an invalid format.
  Admins should check their instance settings if in doubt.
- Perform port diagnosis at startup only when Listen fails @mei23
- Rate limiting is now also usable for non-authenticated users. @Johann150 @mei23
  Admins should make sure the reverse proxy sets the `X-Forwarded-For` header to the original address.

### Perbaikan Bug
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
- Client: ノート詳細ページの新しいノートを表示する機能の動作が正しくなるように修正する @xianonn
- MFM: more animated functions support `speed` parameter @futchitwo
- MFM: limit large MFM @Johann150

## 12.110.1
Tanggal Rilis： 2022/04/23

### Perbaikan Bug
- Fix GOP rendering @syuilo
- Improve performance of antenna, clip, and list @xianonn

## 12.110.0
Tanggal Rilis： 2022/04/11

### Peningkatan
- Improve webhook @syuilo
- Client: Show loading icon on splash screen @syuilo

### Perbaikan Bug
- API: parameter validation of users/show was wrong
- Federation: リモートインスタンスへのダイレクト投稿が届かない問題を修正 @syuilo

## 12.109.2
Tanggal Rilis： 2022/04/03

### Perbaikan Bug
- API: admin/update-meta was not working @syuilo
- Client: テーマを切り替えたり読み込んだりするとmeta[name="theme-color"]のcontentがundefinedになる問題を修正 @tamaina

## 12.109.1
Tanggal Rilis: 2022/04/02

### Perbaikan Bug
- API: Renoteが行えない問題を修正

## 12.109.0
Tanggal Rilis: 2022/04/02

### Peningkatan
- Webhooks @syuilo
- Bull Dashboardを組み込み、ジョブキューの確認や操作を行えるように @syuilo
  - Bull Dashboardを開くには、最初だけ一旦ログアウトしてから再度管理者権限を持つアカウントでログインする必要があります
- Check that installed Node.js version fulfills version requirement @ThatOneCalculator
- Server: overall performance improvements @syuilo
- Federation: avoid duplicate activity delivery @Johann150
- Federation: limit federation of reactions on direct notes @Johann150
- Client: タッチパッド・タッチスクリーンでのデッキの操作性を向上 @tamaina

### Perbaikan Bug
- email address validation was not working @ybw2016v
- API: fix endpoint endpoint @Johann150
- API: fix admin/meta endpoint @syuilo
- API: improved validation and documentation for endpoints that accept different variants of input @Johann150
- API: `notes/create`: The `mediaIds` property is now deprecated. @Johann150
  - Use `fileIds` instead, it has the same behaviour.
- Client: URIエンコーディングが異常でdecodeURIComponentが失敗するとURLが表示できなくなる問題を修正 @tamaina

## 12.108.1
Tanggal Rilis: 2022/03/12

### Perbaikan Bug
- リレーが動作しない問題を修正 @xianonn
- ulidを使用していると動作しない問題を修正 @syuilo
- 外部からOGPが正しく取得できない問題を修正 @syuilo
- instance can not get the files from other instance when there are items in allowedPrivateNetworks in .config/default.yml @ybw2016v

## 12.108.0
Tanggal Rilis: 2022/03/09

### Catatan
::: warning
このバージョンからNode v16.14.0以降が必要です
:::

### Perubahan
- ノートの最大文字数を設定できる機能が廃止され、デフォルトで一律3000文字になりました @syuilo
- Misskey can no longer terminate HTTPS connections. @Johann150
  - If you did not use a reverse proxy (e.g. nginx) before, you will probably need to adjust
    your configuration file and set up a reverse proxy. The `https` configuration key is no
    longer recognized!

### Peningkatan
- インスタンスデフォルトテーマを設定できるように @syuilo
- ミュートに期限を設定できるように @syuilo
- アンケートが終了したときに通知が作成されるように @syuilo
- プロフィールの追加情報を最大16まで保存できるように @syuilo
- 連合チャートにPub&Subを追加 @syuilo
- 連合チャートにActiveを追加 @syuilo
- デフォルトで10秒以上時間がかかるデータベースへのクエリは中断されるように @syuilo
	- 設定ファイルの`db.extra`に`statement_timeout`を設定することでタイムアウト時間を変更できます
- Client: スプラッシュスクリーンにインスタンスのアイコンを表示するように @syuilo

### Perbaikan Bug
- Client: リアクションピッカーの高さが低くなったまま戻らないことがあるのを修正 @syuilo
- Client: ユーザー名オートコンプリートが正しく動作しない問題を修正 @syuilo
- Client: タッチ操作だとウィジェットの編集がしにくいのを修正 @xianonn
- Client: register_note_view_interruptor()が動かないのを修正 @syuilo
- Client: iPhone X以降(?)でページの内容が全て表示しきれないのを修正 @tamaina
- Client: fix image caption on mobile @nullobsi

## 12.107.0
Tanggal Rilis: 2022/02/12

### Peningkatan
- クライアント: テーマを追加 @syuilo

### Perbaikan Bug
- API: stats APIで内部エラーが発生する問題を修正 @syuilo
- クライアント: ソフトミュートですべてがマッチしてしまう場合があるのを修正 @tamaina
- クライアント: デバイスのスクリーンのセーフエリアを考慮するように @syuilo
- クライアント: 一部環境でサイドバーの投稿ボタンが表示されない問題を修正 @syuilo

## 12.106.3
Tanggal Rilis: 2022/02/11

### Peningkatan
- クライアント: スマートフォンでの余白を調整 @syuilo

### Perbaikan Bug
- クライアント: ノートの詳細が表示されない問題を修正 @syuilo

## 12.106.2
Tanggal Rilis: 2022/02/11

### Perbaikan Bug
- クライアント: 削除したノートがタイムラインから自動で消えない問題を修正 @syuilo
- クライアント: リアクション数が正しくないことがある問題を修正 @syuilo
- 一部環境でマイグレーションが動作しない問題を修正 @syuilo

## 12.106.1
Tanggal Rilis: 2022/02/11

### Perbaikan Bug
- クライアント: ワードミュートが保存できない問題を修正 @syuilo

## 12.106.0
Tanggal Rilis: 2022/02/11

### Peningkatan
- Improve federation chart @syuilo
- クライアント: リアクションピッカーのサイズを設定できるように @syuilo
- クライアント: リアクションピッカーの幅、高さ制限を緩和 @syuilo
- Docker: Update to Node v16.13.2 @mei23
- Update dependencies

### Perbaikan Bug
- validate regular expressions in word mutes @Johann150

## 12.105.0
Tanggal Rilis: 2022/02/09

### Peningkatan
- インスタンスのテーマカラーを設定できるように @syuilo

### Perbaikan Bug
- 一部環境でマイグレーションが失敗する問題を修正 @syuilo

## 12.104.0
Tanggal Rilis: 2022/02/09

### Catatan
::: warning
ビルドする前に`npm run clean`を実行してください。
:::

::: warning
このリリースはマイグレーションの規模が大きいため、インスタンスによってはマイグレーションに時間がかかる可能性があります。
マイグレーションが終わらない場合は、チャートの情報はリセットされてしまいますが`__chart__`で始まるテーブルの**レコード**を全て削除(テーブル自体は消さないでください)してから再度試す方法もあります。
:::

### Peningkatan
- チャートエンジンの強化 @syuilo
	- テーブルサイズの削減
	- notes/instance/perUserNotesチャートに添付ファイル付きノートの数を追加
	- activeUsersチャートに新しい項目を追加
	- federationチャートに新しい項目を追加
	- apRequestチャートを追加
	- networkチャート廃止
- クライアント: 自インスタンス情報ページでチャートを見れるように @syuilo
- クライアント: デバイスの種類を手動指定できるように @syuilo
- クライアント: UIのアイコンを更新 @syuilo
- クライアント: UIのアイコンをセルフホスティングするように @syuilo
- NodeInfo のユーザー数と投稿数の内容を見直す @xianonn

### Perbaikan Bug
- Client: タイムライン種別を切り替えると「新しいノートがあります」の表示が残留してしまうのを修正 @tamaina
- Client: UIのサイズがおかしくなる問題の修正 @tamaina
- Client: Setting instance information of notes to always show breaks the timeline @Johann150
- Client: 環境に依っては返信する際のカーソル位置が正しくない問題を修正 @syuilo
- Client: コントロールパネルのユーザー、ファイルにて、インスタンスの表示範囲切り替えが機能しない問題を修正 @syuilo
- Client: アップデートお知らせダイアログが出ないのを修正 @syuilo
- Client: Follows/Followers Visibility changes won't be saved unless clicking on an other checkbox @Johann150
- API: Fix API cast @mei23
- add instance favicon where it's missing @solfisher
- チャートの定期resyncが動作していない問題を修正 @syuilo

## 12.103.1
Tanggal Rilis: 2022/02/02

### Perbaikan Bug
- クライアント: ツールチップの表示位置が正しくない問題を修正

## 12.103.0
Tanggal Rilis: 2022/02/02

### Peningkatan
- クライアント: 連合インスタンスページからインスタンス情報再取得を行えるように

### Perbaikan Bug
- クライアント: 投稿のNSFW画像を表示したあとにリアクションが更新されると画像が非表示になる問題を修正
- クライアント: 「クリップ」ページが開かない問題を修正
- クライアント: トレンドウィジェットが動作しないのを修正
- クライアント: フェデレーションウィジェットが動作しないのを修正
- クライアント: リアクション設定で絵文字ピッカーが開かないのを修正
- クライアント: DMページでメンションが含まれる問題を修正
- クライアント: 投稿フォームのハッシュタグ保持フィールドが動作しない問題を修正
- クライアント: サイドビューが動かないのを修正
- クライアント: ensure that specified users does not get duplicates
- Add `img-src` and `media-src` directives to `Content-Security-Policy` for
  files and media proxy

## 12.102.0
Tanggal Rilis: 2022/01/27

### Catatan
::: warning
アップデート後、一部カスタム絵文字が表示できなくなる場合があります。その場合、一旦絵文字管理ページから絵文字を一括エクスポートし、再度コントロールパネルから一括インポートすると直ります。

12.102.0以前にエクスポートされたzipとは互換性がありません。アップデートしてからエクスポートを行なってください。
:::

### Perubahan
- Room機能が削除されました
  - 後日別リポジトリとして復活予定です
- リバーシ機能が削除されました
  - 後日別リポジトリとして復活予定です
- Chat UIが削除されました
- ノートに添付できるファイルの数が16に増えました
- カスタム絵文字にSVGを指定した場合、PNGに変換されて表示されるようになりました

### Peningkatan
- カスタム絵文字一括編集機能
- カスタム絵文字一括インポート
- 投稿フォームで一時的に投稿するアカウントを切り替えられるように
- Unifying Misskey-specific IRIs in JSON-LD `@context`
- クライアントのパフォーマンス向上
- セキュリティの向上

### Perbaikan Bug
- アップロードエラー時の処理を修正

## 12.101.0
Tanggal Rilis: 2021/12/29

### Peningkatan
- クライアント: ノートプレビューの精度を改善
- クライアント: MFM sparkleエフェクトの改善
- クライアント: デザインの調整
- セキュリティの向上

### Perbaikan Bug
- クライアント: 一部のコンポーネントが裏に隠れるのを修正
- fix html blockquote conversion

## 12.100.2
Tanggal Rilis: 2021/12/18

### Perbaikan Bug
- クライアント: Deckカラムの増減がページをリロードするまで正しく反映されない問題を修正
- クライアント: 一部のコンポーネントが裏に隠れるのを修正
- クライアント: カスタム絵文字一覧ページの負荷が高いのを修正

## 12.100.1
Tanggal Rilis: 2021/12/17

### Perbaikan Bug
- クライアント: デザインの調整

## 12.100.0
Tanggal Rilis: 2021/12/17

### Peningkatan
- クライアント: モバイルでの各種メニュー、リアクションピッカーの表示を改善

### Perbaikan Bug
- クライアント: 一部のコンポーネントが裏に隠れるのを修正

## 12.99.3
Tanggal Rilis: 2021/12/14

### Perbaikan Bug
- クライアント: オートコンプリートがダイアログの裏に隠れる問題を修正

## 12.99.0
Tanggal Rilis: 2021/12/14

### Peningkatan
- Added a user-level instance mute in user settings
- フォローエクスポートでミュートしているユーザーを含めないオプションを追加
- フォローエクスポートで使われていないアカウントを含めないオプションを追加
- カスタム絵文字エクスポート機能
- チャートのパフォーマンスの改善
- グループから抜けられるように

### Perbaikan Bug
- クライアント: タッチ機能付きディスプレイを使っていてマウス操作をしている場合に一部機能が動作しない問題を修正
- クライアント: クリップの設定を編集できない問題を修正
- クライアント: メニューなどがウィンドウの裏に隠れる問題を修正

## 12.98.0
Tanggal Rilis: 2021/12/03

### Peningkatan
- API: /antennas/notes API で日付による絞り込みができるように
- クライアント: アンケートに投票する際に確認ダイアログを出すように
- クライアント: Renoteなノート詳細ページから元のノートページに遷移できるように
- クライアント: 画像ポップアップでクリックで閉じられるように
- クライアント: デザインの調整
- フォロワーを解除できる機能

### Perbaikan Bug
- クライアント: LTLやGTLが無効になっている場合でもUI上にタブが表示される問題を修正
- クライアント: ログインにおいてパスワードが誤っている際のエラーメッセージが正しく表示されない問題を修正
- クライアント: リアクションツールチップ、Renoteツールチップのユーザーの並び順を修正
- クライアント: サウンドのマスターボリュームが正しく保存されない問題を修正
- クライアント: 一部環境において通知が表示されると操作不能になる問題を修正
- クライアント: モバイルでタップしたときにツールチップが表示される問題を修正
- クライアント: リモートインスタンスのノートに返信するとき、対象のノートにそのリモートインスタンス内のユーザーへのメンションが含まれていると、返信テキスト内にローカルユーザーへのメンションとして引き継がれてしまう場合がある問題を修正
- クライアント: 画像ビューワーで全体表示した時に上側の一部しか表示されない画像がある問題を修正
- API: ユーザーを取得時に条件によっては内部エラーになる問題を修正

## 12.97.0
Tanggal Rilis: 2021/11/19

### Peningkatan
- クライアント: 返信先やRenoteに対しても自動折りたたみされるように
- クライアント: 長いスレッドの表示を改善
- クライアント: 翻訳にもMFMを適用し、元の文章の改行などを保持するように
- クライアント: アカウント削除に確認ダイアログを出すように

### Perbaikan Bug
- クライアント: ユーザー検索の「全て」が動作しない問題を修正
- クライアント: リアクション一覧、Renote一覧ツールチップのスタイルを修正

## 12.96.1
Tanggal Rilis: 2021/11/13

### Peningkatan
- npm scriptの互換性を向上

## 12.96.0
Tanggal Rilis: 2021/11/13

### Peningkatan
- フォロー/フォロワーを非公開にできるように
- インスタンスプロフィールレンダリング ready
- 通知のリアクションアイコンをホバーで拡大できるように
- RenoteボタンをホバーでRenoteしたユーザー一覧を表示するように
- 返信の際にメンションを含めるように
- 通報があったときに管理者へEメールで通知されるように
- メールアドレスのバリデーションを強化

### Perbaikan Bug
- アカウント削除処理があると高負荷になる問題を修正
- クライアント: 長いメニューが画面からはみ出す問題を修正
- クライアント: コントロールパネルのジョブキューに個々のジョブが表示されないのを修正
- クライアント: fix missing i18n string
- fix html conversion issue with code blocks

### Perubahan
- ノートにモバイルからの投稿か否かの情報を含めないように

## 12.95.0
Tanggal Rilis: 2021/10/31

### Peningkatan
- スレッドミュート機能

### Perbaikan Bug
- リレー向けのActivityが一部実装で除外されてしまうことがあるのを修正
- 削除したノートやユーザーがリモートから参照されると復活することがあるのを修正
- クライアント: ページ編集時のドロップダウンメニューなどが動作しない問題を修正
- クライアント: コントロールパネルのカスタム絵文字タブが切り替わらないように見える問題を修正
- API: ユーザー情報の hasUnreadChannel が常に false になっている問題を修正

## 12.94.1
Tanggal Rilis: 2021/10/25

### Peningkatan

### Perbaikan Bug
- クライアント: ユーザーページのナビゲーションが失敗する問題を修正

## 12.94.0
Tanggal Rilis: 2021/10/25

### Peningkatan
- クライアント: 画像ビューアを強化
- クライアント: メンションにユーザーのアバターを表示するように
- クライアント: デザインの調整
- クライアント: twemojiをセルフホスティングするように

### Perbaikan Bug
- クライアント: CWで画像が隠されたとき、画像の高さがおかしいことになる問題を修正

### Catatan
- このバージョンから、iOS 15未満のサポートがされなくなります。対象のバージョンをお使いの方は、iOSのバージョンアップを行ってください。

## 12.93.2
Tanggal Rilis: 2021/10/23

### Perbaikan Bug
- クライアント: ウィジェットを追加できない問題を修正

## 12.93.1
Tanggal Rilis: 2021/10/23

### Perbaikan Bug
- クライアント: 通知上でローカルのリアクションが表示されないのを修正

## 12.93.0
Tanggal Rilis: 2021/10/23

### Peningkatan
- クライアント: コントロールパネルのパフォーマンスを改善
- クライアント: 自分のリアクション一覧を見れるように
	- 設定により、リアクション一覧を全員に公開することも可能
- クライアント: ユーザー検索の精度を強化
- クライアント: 新しいライトテーマを追加
- クライアント: 新しいダークテーマを追加
- API: ユーザーのリアクション一覧を取得する users/reactions を追加
- API: users/search および users/search-by-username-and-host を強化
- ミュート及びブロックのインポートを行えるように
- クライアント: /share のクエリでリプライやファイル等の情報を渡せるように
- チャートのsyncを毎日0時に自動で行うように

### Perbaikan Bug
- クライアント: テーマの管理が行えない問題を修正
- API: アプリケーション通知が取得できない問題を修正
- クライアント: リモートノートで意図せずローカルカスタム絵文字が使われてしまうことがあるのを修正
- ActivityPub: not reacted な Undo.Like がinboxに滞留するのを修正

### Perubahan
- 連合の考慮に問題があることなどが分かったため、モデレーターをブロックできない仕様を廃止しました
- データベースにログを保存しないようになりました
	- ログを永続化したい場合はsyslogを利用してください

## 12.92.0
Tanggal Rilis: 2021/10/16

### Peningkatan
- アカウント登録にメールアドレスの設定を必須にするオプション
- クライアント: 全体的なUIのブラッシュアップ
- クライアント: MFM関数構文のサジェストを実装
- クライアント: ノート本文を投稿フォーム内でプレビューできるように
- クライアント: 未読の通知のみ表示する機能
- クライアント: 通知ページで通知の種類によるフィルタ
- クライアント: アニメーションを減らす設定の適用範囲を拡充
- クライアント: 新しいダークテーマを追加
- クライアント: テーマコンパイラに hue と saturate 関数を追加
- ActivityPub: HTML -> MFMの変換を強化
- API: グループから抜ける users/groups/leave エンドポイントを実装
- API: i/notifications に unreadOnly オプションを追加
- API: ap系のエンドポイントをログイン必須化+レートリミット追加
- MFM: Add tag syntaxes of bold <b></b> and strikethrough <s></s>

### Perbaikan Bug
- Fix createDeleteAccountJob
- admin inbox queue does not show individual jobs
- クライアント: ヘッダーのタブが折り返される問題を修正
- クライアント: ヘッダーにタブが表示されている状態でタイトルをクリックしたときにタブ選択が表示されるのを修正
- クライアント: ユーザーページのタブが機能していない問題を修正
- クライアント: ピン留めユーザーの設定項目がない問題を修正
- クライアント: Deck UIにおいて、重ねたカラムの片方を畳んだ状態で右に出すと表示が壊れる問題を修正
- API: 管理者およびモデレーターをブロックできてしまう問題を修正
- MFM: Mentions in the link label are parsed as text
- MFM: Add a property to the URL node indicating whether it was enclosed in <>
- MFM: Disallows < and > in hashtags

### Perubahan
- 保守性やユーザビリティの観点から、Misskeyのコマンドラインオプションが削除されました。
	- 必要であれば、代わりに環境変数で設定することができます
- MFM: パフォーマンス、保守性、構文誤認識抑制の観点から、旧関数構文のサポートが削除されました。
	- 旧構文(`[foo bar]`)を使用せず、現行の構文(`$[foo bar]`)を使用してください。

## 12.91.0
Tanggal Rilis: 2021/09/22

### Peningkatan
- ActivityPub: リモートユーザーのDeleteアクティビティに対応
- ActivityPub: add resolver check for blocked instance
- ActivityPub: deliverキューのメモリ使用量を削減
- API: 管理者用アカウント削除APIを実装(/admin/accounts/delete)
	- リモートユーザーの削除も可能に
- アカウントが凍結された場合に、凍結された旨を表示してからログアウトするように
- 凍結されたアカウントにログインしようとしたときに、凍結されている旨を表示するように
- リスト、アンテナタイムラインを個別ページとして分割
- UIの改善
- MFMにsparklesエフェクトを追加
- 非ログイン自は更新ダイアログを出さないように
- クライアント起動時、アップデートが利用可能な場合エラー表示およびダイアログ表示しないように

### Perbaikan Bug
- アカウントデータのエクスポート/インポート処理ができない問題を修正
- アンテナの既読が付かない問題を修正
- popupで設定ページを表示すると、アカウントの削除ページにアクセスすることができない問題を修正
- "問題が発生しました"ウィンドウを開くと☓ボタンがなくて閉じれない問題を修正

## 12.90.1
Tanggal Rilis: 2021/09/05

### Perbaikan Bug
- Dockerfileを修正
- ノート翻訳時に公開範囲が考慮されていない問題を修正

## 12.90.0
Tanggal Rilis: 2021/09/04

### Peningkatan
- 藍モード、および藍ウィジェット
	- クライアントに藍ちゃんを召喚することができるようになりました。
- URLからのアップロード, APの添付ファイル, 外部ファイルのプロキシ等では、Privateアドレス等へのリクエストは拒否されるようになりました。
	- developmentで動作している場合は、この制限は適用されません。
	- Proxy使用時には、この制限は適用されません。
		Proxy使用時に同等の制限を行いたい場合は、Proxy側で設定を行う必要があります。
	- `default.yml`にて`allowedPrivateNetworks`にCIDRを追加することにより、宛先ネットワークを指定してこの制限から除外することが出来ます。
- アップロード, ダウンロード出来るファイルサイズにハードリミットが適用されるようになりました。(約250MB)
	- `default.yml`にて`maxFileSize`を変更することにより、制限値を変更することが出来ます。

### Perbaikan Bug
- 管理者が最初にサインアップするページでログインされないのを修正
- CWを維持する設定を復活
- クライアントの表示を修正

## 12.89.2
Tanggal Rilis: 2021/08/24

### Perbaikan Bug
- カスタムCSSを有効にしているとエラーになる問題を修正

## 12.89.1
Tanggal Rilis: 2021/08/24

### Peningkatan
- クライアントのデザインの調整

### Perbaikan Bug
- 翻訳でDeepLのProアカウントに対応していない問題を修正
- インスタンス設定でDeepLのAuth Keyが空で表示される問題を修正
- セキュリティの向上

## 12.89.0
Tanggal Rilis: 2021/08/21

### Peningkatan
- アカウント削除の安定性を向上
- 絵文字オートコンプリートの挙動を改修
- localStorageのaccountsはindexedDBで保持するように
- ActivityPub: ジョブキューの試行タイミングを調整 (#7635)
- API: sw/unregisterを追加
- ワードミュートのドキュメントを追加
- クライアントのデザインの調整
- 依存関係の更新

### Perbaikan Bug
- チャンネルを作成しているとアカウントを削除できないのを修正
- ノートの「削除して編集」をするとアンケートの選択肢が[object Object]になる問題を修正

## 12.88.0
Tanggal Rilis: 2021/08/17

### Features
- ノートの翻訳機能を追加
  - 有効にするには、サーバー管理者がDeepLの無料アカウントを登録し、取得した認証キーを「インスタンス設定 > その他 > DeepL Auth Key」に設定する必要があります。
- Misskey更新時にダイアログを表示するように
- ジョブキューウィジェットに警報音を鳴らす設定を追加

### Peningkatan
- ブロックの挙動を改修
	- ブロックされたユーザーがブロックしたユーザーに対してアクション出来ないようになりました。詳細はドキュメントをご確認ください。
- UIデザインの調整
- データベースのインデックスを最適化
- Proxy使用時にKeep-Aliveをサポート
- DNSキャッシュでネガティブキャッシュをサポート
- 依存関係の更新

### Perbaikan Bug
- タッチ操作でウィンドウを閉じることができない問題を修正
- Renoteされた時刻が投稿された時刻のように表示される問題を修正
- コントロールパネルでファイルを削除した際の表示を修正
- ActivityPub: 長いユーザーの名前や自己紹介の対応

## 12.87.0
Tanggal Rilis: 2021/08/12

### Peningkatan
- 絵文字オートコンプリートで一文字目は最近使った絵文字をサジェストするように
- 絵文字オートコンプリートのパフォーマンスを改善
- about-misskeyページにドキュメントへのリンクを追加
- Docker: Node.jsを16.6.2に
- 依存関係の更新
- 翻訳の更新

### Perbaikan Bug
- Misskey更新時、テーマキャッシュの影響でスタイルがおかしくなる問題を修正

## 12.86.0
Tanggal Rilis: 2021/08/11

### Peningkatan
- ドキュメントの更新
	- ドキュメントにchangelogを追加
- ぼかし効果のオプションを追加
- Vueを3.2.1に更新
- UIの調整

### Perbaikan Bug
- ハッシュタグ入力が空のときに#が付くのを修正
- フォローリクエストのEメール通知を修正
