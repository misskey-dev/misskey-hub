import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { generateRecentUpdatesPage } from './recent-updates-page';
import { getRelatedPages } from './related-pages';

export default defineUserConfig<DefaultThemeOptions>({
	// 独自ドメイン使う場合 '/' にする
	// 独自ドメイン使わない場合 '/misskey-hub/' にする
	base: '/',

	lang: 'ja-JP',
	title: 'Misskey Hub',

	head: [
		['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css', }]
	],

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
		docsDir: 'src',
		logo: 'https://raw.githubusercontent.com/misskey-dev/assets/main/favicon.png',
		navbar: [{
			text: 'ブログ',
			link: '/blog/',
		}, {
			text: 'お楽しみ',
			children: [
				'/plugins/',
				'/appendix/assets'
			]
		}, {
			text: 'ドキュメント',
			children: [
				'/docs/misskey',
				'/docs/releases',
				'/docs/misskey-hub',
				'/docs/faq',
				'/docs/glossary',
				'/docs/troubleshooting',
				{
					text: '機能',
					children: [
						'/docs/features/note',
						'/docs/features/reaction',
						'/docs/features/mfm',
						'/docs/features/custom-emoji',
						'/docs/features/drive',
						'/docs/features/online-status',
						'/docs/features/share-form',
						'/docs/features/thread-mute',
						'/docs/features/word-mute',
						'/docs/features/mute-and-block',
					]
				},
				{
					text: '開発者',
					children: [
						'/docs/api',
						'/docs/streaming-api',
					]
				},
				{
					text: '運営者向け',
					children: [
						'/docs/install',
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
				contributorsText: '編集者',
				lastUpdatedText: '編集日時',
				editLinkText: 'ページを編集',
				relatedPagesText: '関連するページ',
			},
			'/en/': {
				selectLanguageName: 'English',
				contributorsText: 'Contributors',
				lastUpdatedText: 'Last Updated',
				editLinkText: 'Edit this page',
				relatedPagesText: 'Related pages',
			},
		},
		themePlugins: {
			activeHeaderLinks: false,
		}
	},

	plugins: [
		['@vuepress/plugin-search'],
		['@vuepress/register-components', {
			componentsDir: path.resolve(__dirname, './components/'),
		},],
		['@vuepress/container', {
			type: 'tip',
			before: (info: string, type): string => `<div class="custom-container tip"><i class="fas fa-info"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n'
		},],
		['@vuepress/container', {
			type: 'warning',
			before: (info: string, type): string => `<div class="custom-container warning"><i class="fas fa-exclamation"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n'
		},],
		['@vuepress/container', {
			type: 'danger',
			before: (info: string, type): string => `<div class="custom-container danger"><i class="fas fa-times"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n'
		},],
	],

	async onInitialized(app) {
		await generateRecentUpdatesPage(app);
		await getRelatedPages(app);
	},
});
