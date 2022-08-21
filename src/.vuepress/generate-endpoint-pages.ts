import * as fs from 'fs';
import { App, createPage, Page } from '@vuepress/core';
import glob from 'glob';
import JSON5 from 'json5';

export async function generateEndpointPages(app: App) {
	for (const locale of Object.keys(app.options.locales)) {
		const endpointsDir = locale + 'docs/api/endpoints/';
		const endpointPaths = glob.sync(__dirname + '/..' + endpointsDir + '**/*.json5');

		const endpointsForIndex = [];

		for (const endpointPath of endpointPaths) {
			const name = endpointPath.slice(endpointPath.indexOf(endpointsDir)).replace(endpointsDir, '').replace('.json5', '');
			const data = fs.readFileSync(endpointPath, 'utf-8');
			const def = JSON5.parse(data);
			endpointsForIndex.push({
				name: name, summary: def.summary, tags: def.tags ?? []
			});
	
			let content = `---
filePath: '${`docs/api/endpoints/${name}.json5`}'
---

# \`${name}\`\n${def.description}`;

			if (def.requireCredential) {
				content += `\n\nCredential required.\n`;
			}

			content += `
<MkApiConsole :name="${JSON.stringify(name).replace(/"/g, '\'')}" :def="${JSON.stringify(def).replace(/"/g, '\'')}"/>
`;

			// TODO: permission
	
			if (def.req && Object.keys(def.req).length > 0) {
				content += `
## Parameters
<ClientOnly>
<MkSchemaViewer :schema="${JSON.stringify(def.req).replace(/"/g, '\'')}">
</MkSchemaViewer>
</ClientOnly>
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
<ClientOnly>
<MkSchemaViewer :schema="${JSON.stringify(def.res).replace(/"/g, '\'')}">
</MkSchemaViewer>
</ClientOnly>
`;
			} else {
				content += `
## Response
none
`;
			}

			content += `
## Errors
`;

			for (const [id, err] of Object.entries(def.errors)) {
				content += `
### ${err.code}
ID: \`${id}\`

${err.description}
`;
			}

			const page = await createPage(app, {
				path: endpointPath.slice(endpointPath.indexOf(endpointsDir)).replace('.json5', '.html'),
				content: content,
				//filePath: `${__dirname}/../docs/api/endpoints/${name}.json5`,
			});
			app.pages.push(page);
		}

		const endpointTags = Array.from(new Set(endpointsForIndex.flatMap(x => x.tags)));

		let indexContent = '# エンドポイント一覧\n';

		indexContent += `
<MkEndpoints :endpoints="${JSON.stringify(endpointsForIndex).replace(/"/g, '\'')}" :tags="${JSON.stringify(endpointTags).replace(/"/g, '\'')}"/>`;

		const indexPage = await createPage(app, {
			path: locale + 'docs/api/endpoints.html',
			content: indexContent,
		});
		app.pages.push(indexPage);
	}
}
