import { App, Page } from 'vuepress';
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

const getCreatedTime = async (
	filePath: string,
	cwd: string
): Promise<number> => {
	const { stdout } = await execa(
		'git',
		['--no-pager', 'log', '--reverse', '-1', '--format=%at', filePath],
		{
			cwd,
		}
	);

	return Number.parseInt(stdout, 10) * 1000;
}

export async function getChildPages(app: App) {
	const cwd = app.dir.source();

	for (const page of app.pages) {
		if (!page.path.endsWith('/')) continue;

		const dir = page.path;

		const childPages = app.pages.filter(p => p.filePath != null && p.path !== page.path && p.path.startsWith(dir) && !p.path.replace(dir, '').includes('/'));

		if (childPages.length === 0) continue;

		(page.data as any).childPages = await Promise.all(childPages.map(async p => ({
			name: p.filePath.split('/').pop(),
			title: p.title,
			path: p.path,
			summary: p.frontmatter.description || p.excerpt,
			updatedTime: await getUpdatedTime(p.filePathRelative, cwd),
			createdTime: await getCreatedTime(p.filePathRelative, cwd),
		})));
	}
}
