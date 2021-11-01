import { App } from 'vuepress';

export async function getRelatedPages(app: App) {
	for (let i = 0; i < app.pages.length; i++) {
		const page = app.pages[i];
		const frontmatterRelatedPages = (page.frontmatter.relatedPages || []) as string[];

		let relatedPages = frontmatterRelatedPages.map(link => app.pages.find(p => p.path === link.replace('.md', '.html'))).filter(x => x != null);
		relatedPages = [...relatedPages, ...page.links
				.map(link => app.pages.find(p => p.path === link.absolute.replace('.md', '.html')))
				.filter(x => x != null && !relatedPages.some(y => y.path === x.path))];

		if (relatedPages.length === 0) continue;

		(page.data as any).relatedPages = relatedPages.map(p => ({
			title: p.title,
			path: p.path,
			summary: p.frontmatter.description || p.excerpt,
		}));
	}
}
