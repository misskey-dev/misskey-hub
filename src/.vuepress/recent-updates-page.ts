import { App, createPage, Page } from '@vuepress/core';
import execa from 'execa';

const getUpdatedTime = async (
	filePath: string,
	cwd: string
): Promise<number> => {
	const { stdout } = await execa(
		'git',
		['--no-pager', 'log', '-1', '--format=%at', filePath],
		{
			cwd,
		}
	);

	return Number.parseInt(stdout, 10) * 1000;
}

const getComitterName = async (
	filePath: string,
	cwd: string
): Promise<string> => {
	const { stdout } = await execa(
		'git',
		['--no-pager', 'log', '-1', '--format=%cn', filePath],
		{
			cwd,
		}
	);

	return stdout;
}

export async function generateRecentUpdatesPage(app: App) {
	const cwd = app.dir.source();

	let content = ``;

	let pagesWithMeta = [] as {
		updatedTime: number;
		comitterName: string;
		page: Page;
	}[];

	for (const page of app.pages) {
		if (page.filePathRelative == null) continue;

		const [updatedTime, comitterName] = await Promise.all([
			getUpdatedTime(page.filePathRelative, cwd),
			getComitterName(page.filePathRelative, cwd),
		]);

		pagesWithMeta.push({
			updatedTime, comitterName, page
		});
	}

	pagesWithMeta = pagesWithMeta
		.sort((a, b) => b.updatedTime - a.updatedTime)
		.slice(0, 20);

	for (const pageWithMeta of pagesWithMeta) {
		const { updatedTime, comitterName, page } = pageWithMeta;

		if (page.filePathRelative == null) continue;

		content += `
<RouterLink class="mk-page" to="${page.path}">
	<header>${page.title}</header>
	<div>${page.frontmatter.description || page.excerpt}</div>
	<footer>${new Date(updatedTime).toString()}, by ${comitterName}</footer>
</RouterLink>
`;
	}

	for (let i = 0; i < app.pages.length; i++) {
		const page = app.pages[i];
		if (page.content.includes('<!--[RECENT_UPDATES]-->')) {
			app.pages[i] = await createPage(app, {
				path: page.path,
				frontmatter: page.frontmatter,
				content: page.content.replace('<!--[RECENT_UPDATES]-->', content),
			});
		}
	}
}
