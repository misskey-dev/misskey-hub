import * as fs from 'fs';
import { App, createPage, Page } from '@vuepress/core';
import glob from 'glob';
import JSON5 from 'json5';

export async function generateEndpointPages(app: App) {
	for (const locale of Object.keys(app.options.locales)) {
		const endpointsDir = locale + 'docs/api/endpoints/';
		const endpointPaths = glob.sync(__dirname + '/..' + endpointsDir + '**/*.json5');

		let indexContent = '# エンドポイント\n';

		for (const endpointPath of endpointPaths) {
			const name = endpointPath.slice(endpointPath.indexOf(endpointsDir)).replace(endpointsDir, '').replace('.json5', '');
			const data = fs.readFileSync(endpointPath, 'utf-8');
			const def = JSON5.parse(data);

			indexContent += `- [${name}](./endpoints/${name}.html)\n`;
	
			let content = `# \`${name}\`\n${def.description}`;

			if (def.requireCredential) {
				content += `\n\nCredential required.\n`;
			}

			// TODO: permission
	
			if (def.req && Object.keys(def.req).length > 0) {
				content += `
## Parameters
<MkSchemaViewer :schema="${JSON.stringify(def.req).replace(/"/g, '\'')}">
</MkSchemaViewer>
`;
			} else {
				content += `
## Parameters
none
`;
			}
	
			if (def.res) {
				content += `
## Response
<MkSchemaViewer :schema="${JSON.stringify(def.res).replace(/"/g, '\'')}">
</MkSchemaViewer>
`;
			} else {
				content += `
## Response
none
`;
			}
	
			const page = await createPage(app, {
				path: endpointPath.slice(endpointPath.indexOf(endpointsDir)).replace('.json5', '.html'),
				content: content,
			});
			app.pages.push(page);
		}

		const indexPage = await createPage(app, {
			path: locale + 'docs/api/endpoints.html',
			content: indexContent,
		});
		app.pages.push(indexPage);
	}
}
