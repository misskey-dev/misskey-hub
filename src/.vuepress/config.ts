import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
	// 独自ドメイン使う場合 '/' にする
	// 独自ドメイン使わない場合 '/misskey-hub/' にする
	base: '/',

	lang: 'ja-JP',
	title: 'Misskey Hub',

	locales: {
		'/': {
			lang: 'ja-JP',
			description: 'オープンソースの分散型マイクロブログプラットフォーム、Misskeyの公式サイト',
		},
		'/en/': {
			lang: 'en-US',
			description: 'Official website of Misskey project',
		},
	},

	theme: path.resolve(__dirname, './theme'),
	themeConfig: {
		repo: 'misskey-dev/misskey-hub',
		logo: 'https://raw.githubusercontent.com/misskey-dev/assets/main/favicon.png',
		navbar: [{
			text: 'ブログ',
			link: '/blog/',
		}, {
			text: 'プラグイン',
			link: '/plugins/',
		}, {
			text: 'ドキュメント',
			children: [
				'/docs/misskey',
				'/docs/misskey-hub',
				'/docs/faq',
				'/docs/glossary',
				'/docs/troubleshooting',
				{
					text: '機能',
					children: [
						'/docs/features/note',
						'/docs/features/reaction',
						'/docs/features/online-status',
						'/docs/features/thread-mute',
						'/docs/features/word-mute',
						'/docs/features/mute-and-block',
					]
				},
				{
					text: '運営者向け',
					children: [
						'/docs/install/install',
						'/docs/admin/nginx',
						'/docs/admin/push-docker-hub',
						'/docs/admin/troubleshooting',
					]
				}
			]
		}, {
			text: 'リンク',
			children: [
				{
					text: '公式Discord',
					link: 'https://discord.gg/Wp8gVStHW3',
				},
				{
					text: '寄付 (Patreon)',
					link: 'https://www.patreon.com/syuilo',
				},
				{
					text: '翻訳 (Crowdin)',
					link: 'https://crowdin.com/project/misskey',
				},
				{
					text: '藍.moe',
					link: 'https://xn--931a.moe',
				},
				{
					text: 'アカウント',
					children: [{
						text: '@repo@misskey.io',
						link: 'https://misskey.io/@repo',
					}]
				},
				{
					text: 'リポジトリ',
					children: [{
						text: 'misskey',
						link: 'https://github.com/misskey-dev/misskey',
					}, {
						text: 'misskey.js',
						link: 'https://github.com/misskey-dev/misskey.js',
					}, {
						text: 'mfm.js',
						link: 'https://github.com/misskey-dev/mfm.js',
					}, {
						text: 'misskey-hub',
						link: 'https://github.com/misskey-dev/misskey-hub',
					}]
				}
			],
		},],
		locales: {
			'/': {
				selectLanguageName: '日本語',
			},
			'/en/': {
				selectLanguageName: 'English',
			},
		},
	},

	plugins: [['@vuepress/plugin-search']]
})
