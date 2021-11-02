import { App, Page } from 'vuepress';

export async function getRelatedPages(app: App) {
	const getFrontmatterRelatedPages = (page: Page): string[] => {
		return (page.frontmatter.relatedPages || []) as string[];
	};

	const normalizeLink = (link: string): string => {
		return link.replace('.md', '.html');
	};

	for (let i = 0; i < app.pages.length; i++) {
		const page = app.pages[i];

		let relatedPages = getFrontmatterRelatedPages(page)
			.map(link => app.pages.find(p => p.path === normalizeLink(link)))
			.filter(x => x != null);

		relatedPages = [...relatedPages, ...page.links
			.map(link => app.pages.find(p => p.path === normalizeLink(link.absolute)))
			.filter(x => x != null)
		];

		relatedPages = [...relatedPages, ...app.pages
			.filter(p =>
				getFrontmatterRelatedPages(p).some(link => normalizeLink(link) === page.path) ||
				p.links.some(link => normalizeLink(link.absolute) === page.path))
		];

		relatedPages = relatedPages.filter((page, i, self) => i === self.findIndex((p) => (
			p.path === page.path
		))); // 重複削除

		if (relatedPages.length === 0) continue;

		(page.data as any).relatedPages = relatedPages.map(p => ({
			title: p.title,
			path: p.path,
			summary: p.frontmatter.description || p.excerpt,
		}));
	}
}
