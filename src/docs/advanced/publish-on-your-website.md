# プラグイン・テーマを配布する
Misskey v2023.11.0以降では、様々な追加リソースをあなたのウェブサイトから直接インストールできるようになりました。特に、プラグインやテーマなどをたくさん制作している方や、プラグイン配布サイトを作りたい方にとっては便利な機能です。

## 外部からのインストールに対応しているリソース
- [プラグイン](./create-plugin.md) ... `plugin`
- [テーマ](../features/theme.md) ... `theme`

## しくみ
インストール時に、Misskey Webで受け取るリソースに予期せぬ改ざんが起こらないようにするため、配布サイト側とMisskey双方でハッシュ値を計算し、Misskeyで照合を行います。

ハッシュ値が照合できない場合はリソースをインストールすることができないようになっています。

## 実装方法

### 配布ページ側

「インストール」ボタンに、以下のようなURLを持つリンクを作成する

```:no-line-numbers
https://{HOST}/install-extentions?url={API_URL}&hash={HASH}
```

- `{HOST}`: ユーザーのサーバーのホストに置き換えます。ホストはユーザーが入力できるようにすることが一般的です。
- `{API_URL}`: リソース配布用API（後述）のURLに置き換えます。相対パスは不可
- `{HASH}`: 配布するリソースのSHA-512ハッシュに置き換えます。**リソース内での改行コードはLFに統一してください。**

### リソース配布用API側

上記 `{API_URL}` で指定したエンドポイントから、以下のようなJSONオブジェクトを返してください。

```json:no-line-numbers
{
    "type": "theme",
    "data": "{\n\tid: '4dca6e53-9c1b-41bb-a1ac-c62c3b710536',\n\tbase: 'light',\n\tname: 'Misskey Design',\n\tprops: {\n\t\tX2: ':darken<2<@panel',\n\t\tX3: 'rgba(0, 0, 0, 0.05)',\n\t\tX4: 'rgba(0, 0, 0, 0.1)',\n\t\tX5: 'rgba(0, 0, 0, 0.05)',\n\t\tX6: 'rgba(0, 0, 0, 0.25)',\n\t\tX7: 'rgba(0, 0, 0, 0.05)',\n\t\tX8: ':lighten<5<@accent',\n\t\tX9: ':darken<5<@accent',\n\t\tbg: '#f9f9f9',\n\t\tfg: '#5f5f5f',\n\t\tX10: ':alpha<0.4<@accent',\n\t\tX11: 'rgba(0, 0, 0, 0.1)',\n\t\tX12: 'rgba(0, 0, 0, 0.1)',\n\t\tX13: 'rgba(0, 0, 0, 0.15)',\n\t\tX14: ':alpha<0.5<@navBg',\n\t\tX15: ':alpha<0<@panel',\n\t\tX16: ':alpha<0.7<@panel',\n\t\tX17: ':alpha<0.8<@bg',\n\t\tcwBg: '#b1b9c1',\n\t\tcwFg: '#fff',\n\t\tlink: '#44a4c1',\n\t\twarn: '#ecb637',\n\t\tbadge: '#31b1ce',\n\t\terror: '#ec4137',\n\t\tfocus: ':alpha<0.3<@accent',\n\t\tnavBg: '@panel',\n\t\tnavFg: '@fg',\n\t\tpanel: ':lighten<3<@bg',\n\t\tpopup: ':lighten<3<@panel',\n\t\taccent: '#FF6B63',\n\t\theader: ':alpha<0.7<@panel',\n\t\tinfoBg: '#e5f5ff',\n\t\tinfoFg: '#72818a',\n\t\trenote: '#229e82',\n\t\tshadow: 'rgba(0, 0, 0, 0.1)',\n\t\tdivider: 'rgba(0, 0, 0, 0.1)',\n\t\thashtag: '#ff9156',\n\t\tmention: '@accent',\n\t\tmodalBg: 'rgba(0, 0, 0, 0.3)',\n\t\tsuccess: '#86b300',\n\t\tbuttonBg: 'rgba(0, 0, 0, 0.05)',\n\t\tswitchBg: 'rgba(0, 0, 0, 0.15)',\n\t\tacrylicBg: ':alpha<0.5<@bg',\n\t\tcwHoverBg: '#bbc4ce',\n\t\tindicator: '@accent',\n\t\tmentionMe: '@mention',\n\t\tmessageBg: '@bg',\n\t\tnavActive: '@accent',\n\t\taccentedBg: ':alpha<0.15<@accent',\n\t\tcodeNumber: '#0fbbbb',\n\t\tcodeString: '#b98710',\n\t\tfgOnAccent: '#fff',\n\t\tinfoWarnBg: '#fff0db',\n\t\tinfoWarnFg: '#8f6e31',\n\t\tnavHoverFg: ':darken<17<@fg',\n\t\tswitchOnBg: '@accent',\n\t\tswitchOnFg: '@fgOnAccent',\n\t\tcodeBoolean: '#62b70c',\n\t\tdateLabelFg: '@fg',\n\t\tdeckDivider: ':darken<3<@bg',\n\t\tinputBorder: 'rgba(0, 0, 0, 0.1)',\n\t\tpanelBorder: '\" solid 1px var(--divider)',\n\t\tswitchOffBg: 'rgba(0, 0, 0, 0.1)',\n\t\tswitchOffFg: '@panel',\n\t\taccentDarken: ':darken<10<@accent',\n\t\tacrylicPanel: ':alpha<0.5<@panel',\n\t\tnavIndicator: '@indicator',\n\t\twindowHeader: ':alpha<0.85<@panel',\n\t\taccentLighten: ':lighten<10<@accent',\n\t\tbuttonHoverBg: 'rgba(0, 0, 0, 0.1)',\n\t\tdriveFolderBg: ':alpha<0.3<@accent',\n\t\tfgHighlighted: ':darken<3<@fg',\n\t\tfgTransparent: ':alpha<0.5<@fg',\n\t\tpanelHeaderBg: ':lighten<3<@panel',\n\t\tpanelHeaderFg: '@fg',\n\t\tbuttonGradateA: '#FC4774',\n\t\tbuttonGradateB: '#F9E001',\n\t\thtmlThemeColor: '@bg',\n\t\tpanelHighlight: ':darken<3<@panel',\n\t\tlistItemHoverBg: 'rgba(0, 0, 0, 0.03)',\n\t\tscrollbarHandle: 'rgba(0, 0, 0, 0.2)',\n\t\tinputBorderHover: 'rgba(0, 0, 0, 0.2)',\n\t\twallpaperOverlay: 'rgba(255, 255, 255, 0.5)',\n\t\tfgTransparentWeak: ':alpha<0.75<@fg',\n\t\tpanelHeaderDivider: 'rgba(0, 0, 0, 0)',\n\t\tscrollbarHandleHover: 'rgba(0, 0, 0, 0.4)',\n\t},\n\tauthor: '@kakkokari_gtyih@misskey.io',\n}"
}
```

- `type`: 上記「外部からのインストールに対応しているリソース」のコードを参照して入力してください。
- `data`: リソースのソースコードを**文字列で**入力
    - この際、改行コードは**LF**としてください
