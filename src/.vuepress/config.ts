import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { containerPlugin } from "@vuepress/plugin-container";
import { generateRecentUpdatesPage } from "./recent-updates-page";
import { getRelatedPages } from "./related-pages";
import { getChildPages } from "./child-pages";
import { generateEndpointPages } from "./generate-endpoint-pages";
import { getInstances } from "./get-instances";
import localTheme from "./mitheme/src/node";

const ssrTransformCustomDir = () => {
	return {
		props: [],
		needRuntime: true,
	};
};

export default defineUserConfig<DefaultThemeOptions>({
	// 独自ドメイン使う場合 '/' にする
	// 独自ドメイン使わない場合 '/misskey-hub/' にする
	base: "/",

	lang: "ja-JP",
	title: "Misskey Hub",

	head: [
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c",
			},
		],
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Kosugi+Maru",
			},
		],
		[
			"link",
			{
				rel: "stylesheet",
				href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
			},
		],
	],

	locales: {
		"/": {
			lang: "ja-JP",
			description:
				"オープンソースの分散型マイクロブログプラットフォーム、Misskeyの公式サイト",
		},
		"/en/": {
			lang: "en-US",
			description: "Official website of Misskey project",
		},
		"/ko/": {
			lang: "ko-KR",
			description: "오픈소스 분산형 마이크로블로깅 플랫폼 Misskey",
		},
		"/it/": {
			lang: "it-IT",
			description: "Sito ufficiale del progetto Misskey",
		},
	},

	theme: localTheme({
		repo: "misskey-dev/misskey-hub",
		docsDir: "src",
		logo: "https://raw.githubusercontent.com/misskey-dev/assets/main/favicon.png",
		locales: {
			"/": {
				selectLanguageName: "日本語",
				contributorsText: "編集者",
				lastUpdatedText: "編集日時",
				editLinkText: "ページを編集",
				relatedPagesText: "関連するページ",
				readThisArticle: "この記事を読む",
				navbar: [
					{
						text: "ブログ",
						link: "/blog/",
					},
					{
						text: "お楽しみ",
						children: ["/instances", "/plugins/", "/appendix/assets"],
					},
					{
						text: "ドキュメント",
						children: [
							"/docs/misskey",
							"/docs/releases",
							"/docs/misskey-hub",
							"/docs/faq",
							"/docs/glossary",
							"/docs/troubleshooting",
							{
								text: "機能",
								children: [
									"/docs/features/note",
									"/docs/features/reaction",
									"/docs/features/timeline",
									"/docs/features/mfm",
									"/docs/features/custom-emoji",
									"/docs/features/drive",
									"/docs/features/deck",
									"/docs/features/charts",
									"/docs/features/online-status",
									"/docs/features/share-form",
									"/docs/features/ads",
									"/docs/features/thread-mute",
									"/docs/features/word-mute",
									"/docs/features/mute-and-block",
									"/docs/features/plugin",
									"/docs/features/antenna",
									"/docs/features/clip",
									"/docs/features/favorite",
									"/docs/features/follow",
									"/docs/features/pages",
									"/docs/features/theme",
									"/docs/features/thread-mute",
									"/docs/features/widgets",
								],
							},
							{
								text: "開発者",
								children: [
									"/docs/api",
									"/docs/api/streaming",
									"/docs/api/endpoints.html",
									"/docs/features/webhook",
								],
							},
							{
								text: "運営者向け",
								children: [
									"/docs/install",
									"/docs/admin/cdn",
									"/docs/admin/nginx",
									"/docs/admin/push-docker-hub",
									"/docs/admin/troubleshooting",
									"/docs/tips/disable-timelines",
									"/docs/features/silence",
								],
							},
						],
					},
					{
						text: "リンク",
						children: [
							{
								text: "公式Discord",
								link: "https://discord.gg/Wp8gVStHW3",
							},
							{
								text: "寄付 (Patreon)",
								link: "https://www.patreon.com/syuilo",
							},
							{
								text: "翻訳 (Crowdin)",
								link: "https://crowdin.com/project/misskey",
							},
							{
								text: "藍.moe",
								link: "https://xn--931a.moe",
							},
							{
								text: "アカウント",
								children: [
									{
										text: "@repo@p1.a9z.dev",
										link: "https://p1.a9z.dev/@repo",
									},
								],
							},
							{
								text: "リポジトリ",
								children: [
									{
										text: "misskey",
										link: "https://github.com/misskey-dev/misskey",
									},
									{
										text: "misskey.js",
										link: "https://github.com/misskey-dev/misskey.js",
									},
									{
										text: "mfm.js",
										link: "https://github.com/misskey-dev/mfm.js",
									},
									{
										text: "misskey-hub",
										link: "https://github.com/misskey-dev/misskey-hub",
									},
								],
							},
						],
					},
				],
			},
			"/en/": {
				selectLanguageName: "English",
				contributorsText: "Contributors",
				lastUpdatedText: "Last Updated",
				editLinkText: "Edit this page",
				relatedPagesText: "Related pages",
				readThisArticle: "Read this article",
				navbar: [
					{
						text: "Blog",
						link: "/en/blog/",
					},
					{
						text: "Taking part",
						children: ["/en/instances", "/en/plugins/", "/en/appendix/assets"],
					},
					{
						text: "Documentation",
						children: [
							"/en/docs/misskey",
							"/en/docs/releases",
							"/en/docs/misskey-hub",
							"/en/docs/faq",
							"/en/docs/glossary",
							"/en/docs/troubleshooting",
							{
								text: "Features",
								children: [
									"/en/docs/features/note",
									"/en/docs/features/reaction",
									"/en/docs/features/timeline",
									"/en/docs/features/mfm",
									"/en/docs/features/custom-emoji",
									"/en/docs/features/drive",
									"/en/docs/features/deck",
									"/en/docs/features/charts",
									"/en/docs/features/online-status",
									"/en/docs/features/share-form",
									"/en/docs/features/ads",
									"/en/docs/features/thread-mute",
									"/en/docs/features/word-mute",
									"/en/docs/features/mute-and-block",
									"/en/docs/features/plugin",
									"/en/docs/features/antenna",
									"/en/docs/features/clip",
									"/en/docs/features/favorite",
									"/en/docs/features/follow",
									"/en/docs/features/pages",
									"/en/docs/features/theme",
									"/en/docs/features/thread-mute",
									"/en/docs/features/widgets",
								],
							},
							{
								text: "for Developers",
								children: [
									"/en/docs/api",
									"/en/docs/api/streaming",
									"/en/docs/api/endpoints.html",
									"/en/docs/features/webhook",
								],
							},
							{
								text: "for Admins",
								children: [
									"/en/docs/install",
									"/en/docs/admin/emoji",
									"/en/docs/admin/cdn",
									"/en/docs/admin/nginx",
									"/en/docs/admin/push-docker-hub",
									"/en/docs/admin/troubleshooting",
									"/en/docs/tips/disable-timelines",
									"/en/docs/admin/default-reaction",
									"/en/docs/features/silence",
								],
							},
						],
					},
					{
						text: "Links",
						children: [
							{
								text: "Official Discord",
								link: "https://discord.gg/Wp8gVStHW3",
							},
							{
								text: "Donations (Patreon)",
								link: "https://www.patreon.com/syuilo",
							},
							{
								text: "Translation (Crowdin)",
								link: "https://crowdin.com/project/misskey",
							},
							{
								text: "藍.moe (Mascot art site)",
								link: "https://xn--931a.moe",
							},
							{
								text: "Accounts",
								children: [
									{
										text: "@repo@p1.a9z.dev",
										link: "https://p1.a9z.dev/@repo",
									},
								],
							},
							{
								text: "Repository",
								children: [
									{
										text: "misskey",
										link: "https://github.com/misskey-dev/misskey",
									},
									{
										text: "misskey.js",
										link: "https://github.com/misskey-dev/misskey.js",
									},
									{
										text: "mfm.js",
										link: "https://github.com/misskey-dev/mfm.js",
									},
									{
										text: "misskey-hub",
										link: "https://github.com/misskey-dev/misskey-hub",
									},
								],
							},
						],
					},
				],
			},
			"/ko/": {
				selectLanguageName: "한국어",
				contributorsText: "기여자",
				lastUpdatedText: "마지막 수정",
				editLinkText: "이 페이지 수정하기",
				relatedPagesText: "관련 페이지",
				readThisArticle: "이 문서 읽기",
				navbar: [
					{
						text: "블로그",
						link: "/ko/blog/",
					},
					{
						text: "둘러보기",
						children: ["/ko/instances", "/ko/plugins/", "/ko/appendix/assets"],
					},
					{
						text: "설명서",
						children: [
							"/ko/docs/misskey",
							"/ko/docs/releases",
							"/ko/docs/misskey-hub",
							"/ko/docs/faq",
							"/ko/docs/glossary",
							"/ko/docs/troubleshooting",
							{
								text: "기능",
								children: [
									"/ko/docs/features/note",
									"/ko/docs/features/reaction",
									"/ko/docs/features/mfm",
									"/ko/docs/features/custom-emoji",
									"/ko/docs/features/drive",
									"/ko/docs/features/online-status",
									"/ko/docs/features/share-form",
									"/ko/docs/features/thread-mute",
									"/ko/docs/features/word-mute",
									"/ko/docs/features/mute-and-block",
									"/ko/docs/features/plugin",
								],
							},
							{
								text: "개발자를 위하여",
								children: [
									"/ko/docs/api",
									"/ko/docs/api/streaming",
									"/ko/docs/api/entity",
									"/ko/docs/api/endpoints.html",
								],
							},
							{
								text: "인스턴스 운영자를 위하여",
								children: [
									"/ko/docs/install",
									"/ko/docs/admin/cdn",
									"/ko/docs/admin/nginx",
									"/ko/docs/admin/push-docker-hub",
									"/ko/docs/admin/troubleshooting",
									"/ko/docs/tips/disable-timelines",
									"/ko/docs/admin/default-reaction",
								],
							},
						],
					},
					{
						text: "바깥 링크",
						children: [
							{
								text: "공식 Discord",
								link: "https://discord.gg/Wp8gVStHW3",
							},
							{
								text: "기부하기 (Patreon)",
								link: "https://www.patreon.com/syuilo",
							},
							{
								text: "번역하기 (Crowdin)",
								link: "https://crowdin.com/project/misskey",
							},
							{
								text: "藍.moe (마스코트 정보)",
								link: "https://xn--931a.moe",
							},
							{
								text: "계정",
								children: [
									{
										text: "@repo@p1.a9z.dev",
										link: "https://p1.a9z.dev/@repo",
									},
								],
							},
							{
								text: "리포지토리",
								children: [
									{
										text: "misskey",
										link: "https://github.com/misskey-dev/misskey",
									},
									{
										text: "misskey.js",
										link: "https://github.com/misskey-dev/misskey.js",
									},
									{
										text: "mfm.js",
										link: "https://github.com/misskey-dev/mfm.js",
									},
									{
										text: "misskey-hub",
										link: "https://github.com/misskey-dev/misskey-hub",
									},
								],
							},
						],
					},
				],
			},
			"/it/": {
				selectLanguageText: "Lingua",
				selectLanguageName: "Italiano",
				selectLanguageAriaLabel: "Scegli la lingua del sito",
				contributorsText: "Co-autori",
				lastUpdatedText: "Ultimo aggiornamento",
				editLinkText: "Modifica questa pagina",
				relatedPagesText: "Pagine correlate",
				readThisArticle: "Leggi questo articolo",
				// 404 page messages
				notFound: [
					`Purtroppo qui non c'è niente`,
					`Perché manca questa pagina?`,
					`Pagina non trovata`,
					`Sembra che il link sia rotto...`,
					`Mah? Qui non c'è nulla`,
				],
				backToHome: "Torna alla pagina iniziale",
				// a11y
				openInNewWindow: "si apre in una nuova finestra",
				toggleColorMode: "cambia i colori",
				toggleSidebar: "menu laterale di navigazione",
				navbar: [
					{
						text: "Blog Giapponese",
						link: "/blog",
					},
					{
						text: "Partecipa",
						children: ["/it/instances", "/it/plugins", "/it/appendix/assets"],
					},
					{
						text: "Documentazione",
						children: [
							"/it/docs/misskey",
							"/it/docs/releases",
							"/it/docs/misskey-hub",
							"/it/docs/faq",
							"/it/docs/glossary",
							"/it/docs/troubleshooting",
							{
								text: "Caratteristiche",
								children: [
									"/it/docs/features/note",
									"/it/docs/features/reaction",
									"/it/docs/features/timeline",
									"/it/docs/features/mfm",
									"/it/docs/features/custom-emoji",
									"/it/docs/features/drive",
									"/it/docs/features/deck",
									"/it/docs/features/charts",
									"/it/docs/features/online-status",
									"/it/docs/features/share-form",
									"/it/docs/features/ads",
									"/it/docs/features/thread-mute",
									"/it/docs/features/word-mute",
									"/it/docs/features/mute-and-block",
									"/it/docs/features/plugin",
									"/it/docs/features/antenna",
									"/it/docs/features/clip",
									"/it/docs/features/favorite",
									"/it/docs/features/follow",
									"/it/docs/features/pages",
									"/it/docs/features/theme",
									"/it/docs/features/thread-mute",
									"/it/docs/features/widgets",
								],
							},
							{
								text: "Per gli sviluppatori",
								children: [
									"/it/docs/api",
									"/it/docs/api/streaming",
									"/it/docs/api/endpoints.html",
								],
							},
							{
								text: "Per gli amministratori",
								children: [
									"/it/docs/install",
									"/it/docs/admin/emoji",
									"/it/docs/admin/cdn",
									"/it/docs/admin/nginx",
									"/it/docs/admin/push-docker-hub",
									"/it/docs/admin/troubleshooting",
									"/it/docs/tips/disable-timelines",
									"/it/docs/admin/default-reaction",
								],
							},
						],
					},
					{
						text: "Collegamenti",
						children: [
							{
								text: "Discord ufficiale",
								link: "https://discord.gg/Wp8gVStHW3",
							},
							{
								text: "Donazioni (Patreon)",
								link: "https://www.patreon.com/syuilo",
							},
							{
								text: "Traduzioni (Crowdin)",
								link: "https://crowdin.com/project/misskey",
							},
							{
								text: "藍.moe (la mascotte: Ai)",
								link: "https://xn--931a.moe",
							},
							{
								text: "Profili",
								children: [
									{
										text: "@repo@p1.a9z.dev",
										link: "https://p1.a9z.dev/@repo",
									},
								],
							},
							{
								text: "Il codice sorgente",
								children: [
									{
										text: "misskey (la piattaforma)",
										link: "https://github.com/misskey-dev/misskey",
									},
									{
										text: "misskey.js (la SDK in NodeJS)",
										link: "https://github.com/misskey-dev/misskey.js",
									},
									{
										text: "mfm.js (il parser MFM)",
										link: "https://github.com/misskey-dev/mfm.js",
									},
									{
										text: "misskey-hub (il sito)",
										link: "https://github.com/misskey-dev/misskey-hub",
									},
								],
							},
						], // Fine: menu links
					},
				], // Fine: navbar italiana
			},
		},
		themePlugins: {
			activeHeaderLinks: false,
		},

		plugins: [
			["@vuepress/plugin-search"],
			registerComponentsPlugin({
				componentsDir: path.resolve(__dirname, "./components/"),
			}),
			containerPlugin({
				type: "tip",
				before: (info: string, type): string =>
					`<div class="custom-container tip"><i class="fas fa-info"></i>${
						info ? `<p class="custom-container-title">${info}</p>` : ""
					}\n`,
				after: (): string => "</div>\n",
			}),
			containerPlugin({
				type: "warning",
				before: (info: string, type): string =>
					`<div class="custom-container warning"><i class="fas fa-exclamation"></i>${
						info ? `<p class="custom-container-title">${info}</p>` : ""
					}\n`,
				after: (): string => "</div>\n",
			}),
			containerPlugin({
				type: "danger",
				before: (info: string, type): string =>
					`<div class="custom-container danger"><i class="fas fa-times"></i>${
						info ? `<p class="custom-container-title">${info}</p>` : ""
					}\n`,
				after: (): string => "</div>\n",
			}),
		],

		clientConfigFile: path.resolve(__dirname, "./client.ts"),

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
							parallax: ssrTransformCustomDir,
							"fade-in": ssrTransformCustomDir,
						},
					},
				},
			},
		},

		shouldPrefetch: false,
	}),
});
