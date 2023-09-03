import { path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { containerPlugin } from '@vuepress/plugin-container';
import { generateRecentUpdatesPage } from './recent-updates-page';
import { getRelatedPages } from './related-pages';
import { getChildPages } from './child-pages';
import { generateEndpointPages } from './generate-endpoint-pages';
import { getInstances } from './get-instances';
import localTheme from './mitheme/src/node';

const ssrTransformCustomDir = () => {
	return {
	props: [],
	needRuntime: true,
	};
};

export default defineUserConfig<DefaultThemeOptions>({
	// 独自ドメイン使う場合 '/' にする
	// 独自ドメイン使わない場合 '/misskey-hub/' にする
	base: '/',

	lang: 'ja-JP',
	title: 'Misskey Hub',

	head: [
	[
		'link',
		{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c',
		},
	],
	[
		'link',
		{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru',
		},
	],
	[
		'link',
		{
		rel: 'stylesheet',
		href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
		},
	],
	],

	locales: {
		'/': { lang: 'ja-JP', description: 'オープンソースの分散型マイクロブログプラットフォーム、Misskeyの公式サイト' },
		'/en/': { lang: 'en-US', description: 'Official website of Misskey project' },
		'/id/': { lang: 'id-ID', description: 'Situs resmi dari Misskey, platform mikroblog sumber terbuka yang terdistribusi'},
		'/ko/': { lang: 'ko-KR', description: '오픈소스 분산형 마이크로블로깅 플랫폼 Misskey' },
		'/it/': { lang: 'it-IT', description: 'Sito ufficiale del progetto Misskey' },
		'/pl/': { lang: 'pl-PL', description: 'Oficjalna strona projektu Misskey' },
		'/zh-CN/': { lang: 'zh-CN', description: '开源分布式微博客平台 Misskey 的官方网站' },
	},

	theme: localTheme({
		repo: 'misskey-dev/misskey-hub',
		docsDir: 'src',
		logo: 'https://raw.githubusercontent.com/misskey-dev/assets/main/favicon.png',
		locales: {
			'/': {
				selectLanguageName: '日本語',
				contributorsText: '編集者',
				lastUpdatedText: '編集日時',
				editLinkText: 'ページを編集',
				relatedPagesText: '関連するページ',
				readThisArticle: 'この記事を読む',
				navbar: [
					{ text: 'ブログ', link: '/blog/' },
					{ text: 'お楽しみ', children: ['/instances', '/plugins/', '/appendix/assets'] },
					{
						text: 'ドキュメント', children: [
							'/docs/misskey',
							'/docs/releases',
							'/docs/misskey-hub',
							'/docs/donate',
							'/docs/faq',
							'/docs/glossary',
							'/docs/notes',
							'/docs/troubleshooting',
							{
								text: '機能', children: [
									'/docs/features/note',
									'/docs/features/reaction',
									'/docs/features/timeline',
									'/docs/features/mfm',
									'/docs/features/custom-emoji',
									'/docs/features/drive',
									'/docs/features/deck',
									'/docs/features/charts',
									'/docs/features/online-status',
									'/docs/features/share-form',
									'/docs/features/ads',
									'/docs/features/thread-mute',
									'/docs/features/word-mute',
									'/docs/features/mute-and-block',
									'/docs/features/plugin',
									'/docs/features/antenna',
									'/docs/features/clip',
									'/docs/features/favorite',
									'/docs/features/follow',
									'/docs/features/pages',
									'/docs/features/theme',
									'/docs/features/widgets',
								]
							},
							{
								text: '開発者', children: [
									'/docs/api',
									'/docs/api/streaming',
									'/docs/api/endpoints.html',
									'/docs/features/webhook',
								]
							},
							{
								text: '運営者向け', children: [
									'/docs/install',
									'/docs/admin/cdn',
									'/docs/admin/nginx',
									'/docs/admin/push-docker-hub',
									'/docs/admin/troubleshooting',
									'/docs/tips/scale-out',
									'/docs/tips/disable-timelines',
									'/docs/features/silence',
								]
							},
						]
					},
					{
						text: 'リンク', children: [
							{ text: '公式Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: '寄付 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: '翻訳 (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe', link: 'https://xn--931a.moe' },
							{ text: 'アカウント', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'リポジトリ', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/en/': {
				selectLanguageName: 'English',
				contributorsText: 'Contributors',
				lastUpdatedText: 'Last Updated',
				editLinkText: 'Edit this page',
				relatedPagesText: 'Related pages',
				readThisArticle: 'Read this article',
				navbar: [
					{ text: 'Blog', link: '/en/blog/' },
					{ text: 'Taking part', children: ['/en/instances', '/en/plugins/', '/en/appendix/assets'] },
					{
						text: 'Documentation', children: [
							'/en/docs/misskey',
							'/en/docs/releases',
							'/en/docs/misskey-hub',
							'/en/docs/faq',
							'/en/docs/glossary',
							'/en/docs/troubleshooting',
							{
								text: 'Features', children: [
									'/en/docs/features/note',
									'/en/docs/features/reaction',
									'/en/docs/features/timeline',
									'/en/docs/features/mfm',
									'/en/docs/features/custom-emoji',
									'/en/docs/features/drive',
									'/en/docs/features/deck',
									'/en/docs/features/charts',
									'/en/docs/features/online-status',
									'/en/docs/features/share-form',
									'/en/docs/features/ads',
									'/en/docs/features/thread-mute',
									'/en/docs/features/word-mute',
									'/en/docs/features/mute-and-block',
									'/en/docs/features/plugin',
									'/en/docs/features/antenna',
									'/en/docs/features/clip',
									'/en/docs/features/favorite',
									'/en/docs/features/follow',
									'/en/docs/features/pages',
									'/en/docs/features/theme',
									'/en/docs/features/widgets',
								]
							},
							{
								text: 'for Developers', children: [
									'/en/docs/api',
									'/en/docs/api/streaming',
									'/en/docs/api/endpoints.html',
									'/en/docs/features/webhook',
								]
							},
							{
								text: 'for Admins', children: [
									'/en/docs/install',
									'/en/docs/admin/emoji',
									'/en/docs/admin/cdn',
									'/en/docs/admin/nginx',
									'/en/docs/admin/push-docker-hub',
									'/en/docs/admin/troubleshooting',
									'/en/docs/tips/disable-timelines',
									'/en/docs/admin/default-reaction',
									'/en/docs/features/silence',
								]
							},
						]
					},
					{
						text: 'Links', children: [
							{ text: 'Official Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: 'Donations (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: 'Translation (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (Mascot art site)', link: 'https://xn--931a.moe' },
							{ text: 'Accounts', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'Repository', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/id/': {
				selectLanguageName: 'Bahasa Indonesia',
				contributorsText: 'Kontributor',
				lastUpdatedText: 'Dimutakhirkan terakhir',
				editLinkText: 'Sunting halaman ini',
				relatedPagesText: 'Halaman terkait',
				readThisArticle: 'Baca artikel ini',
				navbar: [
					{ text: 'Blog', link: '/id/blog/' },
					{ text: 'Ikut serta', children: ['/id/instances', '/id/plugins/', '/id/appendix/assets'] },
					{
						text: 'Dokumentasi', children: [
							'/id/docs/misskey',
							'/id/docs/releases',
							'/id/docs/misskey-hub',
							'/id/docs/faq',
							'/id/docs/glossary',
							'/id/docs/troubleshooting',
							{
								text: 'Fitur', children: [
									'/id/docs/features/note',
									'/id/docs/features/reaction',
									'/id/docs/features/timeline',
									'/id/docs/features/mfm',
									'/id/docs/features/custom-emoji',
									'/id/docs/features/drive',
									'/id/docs/features/deck',
									'/id/docs/features/charts',
									'/id/docs/features/online-status',
									'/id/docs/features/share-form',
									'/id/docs/features/ads',
									'/id/docs/features/thread-mute',
									'/id/docs/features/word-mute',
									'/id/docs/features/mute-and-block',
									'/id/docs/features/plugin',
									'/id/docs/features/antenna',
									'/id/docs/features/clip',
									'/id/docs/features/favorite',
									'/id/docs/features/follow',
									'/id/docs/features/pages',
									'/id/docs/features/theme',
									'/id/docs/features/widgets',
								]
							},
							{
								text: 'Untuk Pengembang', children: [
									'/id/docs/api',
									'/id/docs/api/streaming',
									'/id/docs/api/endpoints.html',
									'/id/docs/features/webhook',
								]
							},
							{
								text: 'Untuk Admin', children: [
									'/id/docs/install',
									'/id/docs/admin/emoji',
									'/id/docs/admin/cdn',
									'/id/docs/admin/nginx',
									'/id/docs/admin/push-docker-hub',
									'/id/docs/admin/troubleshooting',
									'/id/docs/tips/disable-timelines',
									'/id/docs/admin/default-reaction',
									'/id/docs/features/silence',
									'/id/docs/tips/scale-out',
								]
							},
						]
					},
					{
						text: 'Tautan', children: [
							{ text: 'Discord Resmi', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: 'Donasi (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: 'Penerjemahan (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (Situs Maskot)', link: 'https://xn--931a.moe' },
							{ text: 'Akun', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'Repositori', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/ko/': {
				selectLanguageName: '한국어',
				contributorsText: '기여자',
				lastUpdatedText: '마지막 수정',
				editLinkText: '이 페이지 수정하기',
				relatedPagesText: '관련 페이지',
				readThisArticle: '이 문서 읽기',
				navbar: [
					{ text: '블로그', link: '/ko/blog/' },
					{ text: '둘러보기', children: ['/ko/instances', '/ko/plugins/', '/ko/appendix/assets'] },
					{
						text: '설명서', children: [
							'/ko/docs/misskey',
							'/ko/docs/releases',
							'/ko/docs/misskey-hub',
							'/ko/docs/donate',
							'/ko/docs/faq',
							'/ko/docs/glossary',
							'/ko/docs/notes',
							'/ko/docs/troubleshooting',
							'/ko/docs/apps',
							{
								text: '기능', children: [
									'/ko/docs/features/note',
									'/ko/docs/features/reaction',
									'/ko/docs/features/timeline',
									'/ko/docs/features/mfm',
									'/ko/docs/features/mention',
									'/ko/docs/features/custom-emoji',
									'/ko/docs/features/drive',
									'/ko/docs/features/deck',
									'/ko/docs/features/charts',
									'/ko/docs/features/online-status',
									'/ko/docs/features/share-form',
									'/ko/docs/features/ads',
									'/ko/docs/features/thread-mute',
									'/ko/docs/features/word-mute',
									'/ko/docs/features/mute-and-block',
									'/ko/docs/features/plugin',
									'/ko/docs/features/antenna',
									'/ko/docs/features/clip',
									'/ko/docs/features/favorite',
									'/ko/docs/features/follow',
									'/ko/docs/features/pages',
									'/ko/docs/features/theme',
									'/ko/docs/features/thread-mute',
									'/ko/docs/features/widgets',
								]
							},
							{
								text: '개발자를 위하여', children: [
									'/ko/docs/api',
									'/ko/docs/api/streaming',
									'/ko/docs/api/endpoints.html',
									'/ko/docs/features/webhook',
								]
							},
							{
								text: '인스턴스 운영자를 위하여', children: [
									'/ko/docs/install',
									'/ko/docs/admin/cdn',
									'/ko/docs/admin/nginx',
									'/ko/docs/admin/push-docker-hub',
									'/ko/docs/admin/troubleshooting',
									'/ko/docs/tips/scale-out',
									'/ko/docs/tips/disable-timelines',
									'/ko/docs/features/silence',
								]
							},
						]
					},
					{
						text: '바깥 링크', children: [
							{ text: '공식 Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: '기부하기 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: '번역하기 (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (마스코트 정보)', link: 'https://xn--931a.moe', },
							{ text: '계정', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: '리포지토리', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/it/': {
				selectLanguageName: 'Italiano',
				selectLanguageAriaLabel: 'Scegli la lingua del sito',
				contributorsText: 'Co-autori',
				lastUpdatedText: 'Ultimo aggiornamento',
				editLinkText: 'Modifica questa pagina',
				relatedPagesText: 'Pagine correlate',
				readThisArticle: 'Leggi questo articolo',
				// 404 page messages
				notFound: [
					`Purtroppo qui non c'è niente`,
					`Perché manca questa pagina?`,
					`Pagina non trovata`,
					`Sembra che il link sia rotto...`,
					`Mah? Qui non c'è nulla`,
				],
				backToHome: 'Torna alla pagina iniziale',
				// a11y
				openInNewWindow: 'si apre in una nuova finestra',
				toggleColorMode: 'cambia i colori',
				toggleSidebar: 'menu laterale di navigazione',
				navbar: [
					{ text: 'Blog Giapponese', link: '/blog' },
					{ text: 'Partecipa', children: ['/it/instances', '/it/plugins', '/it/appendix/assets'] },
					{
						text: 'Documentazione', children: [
							'/it/docs/misskey',
							'/it/docs/releases',
							'/it/docs/misskey-hub',
							'/it/docs/faq',
							'/it/docs/glossary',
							'/it/docs/troubleshooting',
							{
								text: 'Caratteristiche', children: [
									'/it/docs/features/note',
									'/it/docs/features/reaction',
									'/it/docs/features/timeline',
									'/it/docs/features/mfm',
									'/it/docs/features/custom-emoji',
									'/it/docs/features/drive',
									'/it/docs/features/deck',
									'/it/docs/features/charts',
									'/it/docs/features/online-status',
									'/it/docs/features/share-form',
									'/it/docs/features/ads',
									'/it/docs/features/thread-mute',
									'/it/docs/features/word-mute',
									'/it/docs/features/mute-and-block',
									'/it/docs/features/plugin',
									'/it/docs/features/antenna',
									'/it/docs/features/clip',
									'/it/docs/features/favorite',
									'/it/docs/features/follow',
									'/it/docs/features/pages',
									'/it/docs/features/theme',
									'/it/docs/features/widgets',
								]
							},
							{
								text: 'Per gli sviluppatori', children: [
									'/it/docs/api',
									'/it/docs/api/streaming',
									'/it/docs/api/endpoints.html',
								]
							},
							{
								text: 'Per gli amministratori', children: [
									'/it/docs/install',
									'/it/docs/admin/emoji',
									'/it/docs/admin/cdn',
									'/it/docs/admin/nginx',
									'/it/docs/admin/push-docker-hub',
									'/it/docs/admin/troubleshooting',
									'/it/docs/tips/disable-timelines',
									'/it/docs/admin/default-reaction',
								]
							},
						]
					},
					{
						text: 'Collegamenti',
						children: [
							{ text: 'Discord ufficiale', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: 'Donazioni (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: 'Traduzioni (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (la mascotte: Ai)', link: 'https://xn--931a.moe' },
							{ text: 'Profili', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'Il codice sorgente', children: [
									{ text: 'misskey (la piattaforma)', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js (la SDK in NodeJS)', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js (il parser MFM)', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub (il sito)', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						], // Fine: menu links
					},
				], // Fine: navbar italiana
			},
			'/zh-CN/': {
				selectLanguageName: '简体中文',
				contributorsText: '贡献者',
				lastUpdatedText: '上次更新于',
				editLinkText: '编辑本页面',
				relatedPagesText: '相关页面',
				readThisArticle: '阅读本文',
				navbar: [
					{ text: '博客', link: '/zh-CN/blog/' },
					{ text: '参与', children: ['/zh-CN/instances', '/zh-CN/plugins/', '/zh-CN/appendix/assets'] },
					{
						text: '文档', children: [
							'/zh-CN/docs/misskey',
							'/zh-CN/docs/releases',
							'/zh-CN/docs/misskey-hub',
							'/zh-CN/docs/faq',
							'/zh-CN/docs/glossary',
							'/zh-CN/docs/troubleshooting',
							{
								text: '功能', children: [
									'/zh-CN/docs/features/note',
									'/zh-CN/docs/features/reaction',
									'/zh-CN/docs/features/timeline',
									'/zh-CN/docs/features/mfm',
									'/zh-CN/docs/features/custom-emoji',
									'/zh-CN/docs/features/drive',
									'/zh-CN/docs/features/deck',
									'/zh-CN/docs/features/charts',
									'/zh-CN/docs/features/online-status',
									'/zh-CN/docs/features/share-form',
									'/zh-CN/docs/features/ads',
									'/zh-CN/docs/features/thread-mute',
									'/zh-CN/docs/features/word-mute',
									'/zh-CN/docs/features/mute-and-block',
									'/zh-CN/docs/features/plugin',
									'/zh-CN/docs/features/antenna',
									'/zh-CN/docs/features/clip',
									'/zh-CN/docs/features/favorite',
									'/zh-CN/docs/features/follow',
									'/zh-CN/docs/features/pages',
									'/zh-CN/docs/features/theme',
									'/zh-CN/docs/features/widgets',
								]
							},
							{
								text: '开发者文档', children: [
									'/zh-CN/docs/api',
									'/zh-CN/docs/api/streaming',
									'/zh-CN/docs/api/endpoints.html',
									'/zh-CN/docs/features/webhook',
								]
							},
							{
								text: '管理员文档', children: [
									'/zh-CN/docs/install',
									'/zh-CN/docs/admin/emoji',
									'/zh-CN/docs/admin/cdn',
									'/zh-CN/docs/admin/nginx',
									'/zh-CN/docs/admin/push-docker-hub',
									'/zh-CN/docs/admin/troubleshooting',
									'/zh-CN/docs/tips/disable-timelines',
									'/zh-CN/docs/admin/default-reaction',
									'/zh-CN/docs/features/silence',
								]
							},
						]
					},
					{
						text: '相关链接', children: [
							{ text: '官方 Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: '赞助 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: '翻译 (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (看版娘作品网站)', link: 'https://xn--931a.moe' },
							{ text: '账户', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: '仓库', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/zh-TW/': {
				selectLanguageName: '繁體中文',
				contributorsText: '貢獻者',
				lastUpdatedText: '編輯日期',
				editLinkText: '編輯本頁面',
				relatedPagesText: '相關頁面',
				readThisArticle: '閱讀本文章',
				navbar: [
					{ text: '部落格', link: '/zh-TW/blog/' },
					{ text: '參與', children: ['/zh-TW/instances', '/zh-TW/plugins/', '/zh-TW/appendix/assets'] },
					{
						text: '說明文件', children: [
							'/zh-TW/docs/misskey',
							'/zh-TW/docs/releases',
							'/zh-TW/docs/misskey-hub',
							'/zh-TW/docs/faq',
							'/zh-TW/docs/glossary',
							'/zh-TW/docs/troubleshooting',
							{
								text: 'Features', children: [
									'/zh-TW/docs/features/note',
									'/zh-TW/docs/features/reaction',
									'/zh-TW/docs/features/timeline',
									'/zh-TW/docs/features/mfm',
									'/zh-TW/docs/features/custom-emoji',
									'/zh-TW/docs/features/drive',
									'/zh-TW/docs/features/deck',
									'/zh-TW/docs/features/charts',
									'/zh-TW/docs/features/online-status',
									'/zh-TW/docs/features/share-form',
									'/zh-TW/docs/features/ads',
									'/zh-TW/docs/features/thread-mute',
									'/zh-TW/docs/features/word-mute',
									'/zh-TW/docs/features/mute-and-block',
									'/zh-TW/docs/features/plugin',
									'/zh-TW/docs/features/antenna',
									'/zh-TW/docs/features/clip',
									'/zh-TW/docs/features/favorite',
									'/zh-TW/docs/features/follow',
									'/zh-TW/docs/features/pages',
									'/zh-TW/docs/features/theme',
									'/zh-TW/docs/features/widgets',
								]
							},
							{
								text: '開發者', children: [
									'/zh-TW/docs/api',
									'/zh-TW/docs/api/streaming',
									'/zh-TW/docs/api/endpoints.html',
									'/zh-TW/docs/features/webhook',
								]
							},
							{
								text: '管理員', children: [
									'/zh-TW/docs/install',
									'/zh-TW/docs/admin/emoji',
									'/zh-TW/docs/admin/cdn',
									'/zh-TW/docs/admin/nginx',
									'/zh-TW/docs/admin/push-docker-hub',
									'/zh-TW/docs/admin/troubleshooting',
									'/zh-TW/docs/tips/disable-timelines',
									'/zh-TW/docs/admin/default-reaction',
									'/zh-TW/docs/features/silence',
								]
							},
						]
					},
					{
						text: '連結', children: [
							{ text: '官方Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: '贊助 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: '翻譯 (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (吉祥物藝廊)', link: 'https://xn--931a.moe' },
							{ text: '帳戶', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: '儲存庫', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
			'/pl/': {
				selectLanguageName: 'Polski',
				contributorsText: 'Współtwórcy',
				lastUpdatedText: 'Ostatnio aktualizowane',
				editLinkText: 'Edytuj tę stronę',
				relatedPagesText: 'Powiązane strony',
				readThisArticle: 'Przeczytaj ten artykuł',
				navbar: [
					{ text: 'Blog', link: '/pl/blog/' },
					{ text: 'Dołącz', children: ['/pl/instances', '/pl/plugins/', '/pl/appendix/assets'] },
					{
						text: 'Dokumentacja', children: [
							'/pl/docs/misskey',
							'/pl/docs/releases',
							'/pl/docs/misskey-hub',
							'/pl/docs/faq',
							'/pl/docs/glossary',
							'/pl/docs/troubleshooting',
							{
								text: 'Funkcje', children: [
									'/pl/docs/features/note',
									'/pl/docs/features/reaction',
									'/pl/docs/features/timeline',
									'/pl/docs/features/mfm',
									'/pl/docs/features/custom-emoji',
									'/pl/docs/features/drive',
									'/pl/docs/features/deck',
									'/pl/docs/features/charts',
									'/pl/docs/features/online-status',
									'/pl/docs/features/share-form',
									'/pl/docs/features/ads',
									'/pl/docs/features/thread-mute',
									'/pl/docs/features/word-mute',
									'/pl/docs/features/mute-and-block',
									'/pl/docs/features/plugin',
									'/pl/docs/features/antenna',
									'/pl/docs/features/clip',
									'/pl/docs/features/favorite',
									'/pl/docs/features/follow',
									'/pl/docs/features/pages',
									'/pl/docs/features/theme',
									'/pl/docs/features/widgets',
								]
							},
							{
								text: 'Dla Developerów', children: [
									'/pl/docs/api',
									'/pl/docs/api/streaming',
									'/pl/docs/api/endpoints.html',
									'/pl/docs/features/webhook',
								]
							},
							{
								text: 'Dla Administratorów', children: [
									'/pl/docs/install',
									'/pl/docs/admin/emoji',
									'/pl/docs/admin/cdn',
									'/pl/docs/admin/nginx',
									'/pl/docs/admin/push-docker-hub',
									'/pl/docs/admin/troubleshooting',
									'/pl/docs/tips/disable-timelines',
									'/pl/docs/admin/default-reaction',
									'/pl/docs/features/silence',
								]
							},
						]
					},
					{
						text: 'Linki', children: [
							{ text: 'Oficialny Discord', link: 'https://discord.gg/Wp8gVStHW3' },
							{ text: 'Dotacje (Patreon)', link: 'https://www.patreon.com/syuilo' },
							{ text: 'Tłumaczenie (Crowdin)', link: 'https://crowdin.com/project/misskey' },
							{ text: '藍.moe (Strona Maskotki)', link: 'https://xn--931a.moe' },
							{ text: 'Konta', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'Repozytoria', children: [
									{ text: 'misskey', link: 'https://github.com/misskey-dev/misskey' },
									{ text: 'misskey.js', link: 'https://github.com/misskey-dev/misskey.js' },
									{ text: 'mfm.js', link: 'https://github.com/misskey-dev/mfm.js' },
									{ text: 'misskey-hub', link: 'https://github.com/misskey-dev/misskey-hub' },
								]
							},
						]
					},
				],
			},
		},
		themePlugins: {
			activeHeaderLinks: false,
		},
	}),

	plugins: [
	['@vuepress/plugin-search'],
	registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components/') }),
	containerPlugin({
		type: 'tip',
		before: (info: string, type): string => `<div class="custom-container tip"><i class="fas fa-info"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
		after: (): string => '</div>\n',
	}),
	containerPlugin({
		type: 'warning',
		before: (info: string, type): string => `<div class="custom-container warning"><i class="fas fa-exclamation"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
		after: (): string => '</div>\n',
	}),
	containerPlugin({
		type: 'danger',
		before: (info: string, type): string => `<div class="custom-container danger"><i class="fas fa-times"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
		after: (): string => '</div>\n',
	}),
	],

	clientConfigFile: path.resolve(__dirname, './client.ts'),

	async onInitialized(app) {
	await getInstances(app);
	await generateEndpointPages(app);
	await generateRecentUpdatesPage(app);
	await getRelatedPages(app);
	await getChildPages(app);
	},

	bundlerConfig: {
	vuePluginOptions: {
		template: {
		ssr: true,
		compilerOptions: {
			directiveTransforms: {
			'parallax': ssrTransformCustomDir,
			'fade-in': ssrTransformCustomDir,
			},
		},
		},
	},
	},

	shouldPrefetch: false,
});
