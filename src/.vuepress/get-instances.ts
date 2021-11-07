import * as fs from 'fs';
import { App, Page } from 'vuepress';
import JSON5 from 'json5';

export async function getInstances(app: App) {
	const instancesData = fs.readFileSync(__dirname + '/../instances.json5', 'utf-8');
	const instances = JSON5.parse(instancesData);

	for (let i = 0; i < app.pages.length; i++) {
		const page = app.pages[i];
		if (page.filePath == null || !page.filePath.endsWith('/instances.md')) continue;

		(page.data as any).instances = instances;
	}
}
