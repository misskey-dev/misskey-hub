import { App, Page } from 'vuepress';
import execa from 'execa';

const getTimes = async (
	filePath: string,
	cwd: string
) => {
	const { stdout } = await execa(
		'git',
		['--no-pager', 'log', '--format=%at', filePath],
		{
			cwd,
		}
	);

	const logs = stdout.split('\n');
	const newest = logs[0];
	const oldest = logs[logs.length - 1];

	return {
		updatedTime: Number.parseInt(newest, 10) * 1000,
		createdTime: Number.parseInt(oldest, 10) * 1000,
	};
}

export async function getChildPages(app: App) {
	const cwd = app.dir.source();

	for (const page of app.pages) {
		if (!page.path.endsWith('/')) continue;

		const dir = page.path;

		const childPages = app.pages.filter(p => p.filePath != null && p.path !== page.path && p.path.startsWith(dir) && !p.path.replace(dir, '').includes('/'));

		if (childPages.length === 0) continue;

		(page.data as any).childPages = await Promise.all(childPages.map(async p => {
			const times = await getTimes(p.filePathRelative, cwd);
			return {
				name: p.filePath.split('/').pop(),
				title: p.title,
				path: p.path,
				summary: p.frontmatter.description ?? p.excerpt,
				updatedTime: times.updatedTime,
				createdTime: p.frontmatter.createdTimeOverride ?? times.createdTime,
			};
		}));
	}
}
