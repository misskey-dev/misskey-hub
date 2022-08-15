import * as fs from 'fs';
import { App, createPage, Page } from '@vuepress/core';
import glob from 'glob';
import JSON5 from 'json5';

const apiDefinition = JSON.parse(fs.readFileSync(__dirname + '/api.json', 'utf8'));
const endpointPaths = Object.keys(apiDefinition.paths);

export async function generateEndpointPages(app: App) {
	for (const locale of Object.keys(app.options.locales)) {
		const endpointsDir = locale + 'docs/api/endpoints/';

		let indexContent = '# エンドポイント\n';

		for (const endpointPath of endpointPaths) {
			const name = endpointPath.substring(1);
			const def = apiDefinition.paths[endpointPath]['post'];
			const requireCredential = def.security?.length > 0;

			indexContent += `- [${name}](./endpoints/${name}.html)\n`;
	
			let content = `# \`${name}\``;

			if (requireCredential) {
				content += `\n\nCredential required.\n`;
			}

			// TODO: permission
	
			if (def.requestBody && Object.keys(def.requestBody.content['application/json']?.schema?.properties ?? {}).length > 0) {
				content += `
## Parameters
<MkSchemaViewer :schema="${JSON.stringify(def.requestBody.content['application/json']?.schema).replace(/"/g, '\'')}">
</MkSchemaViewer>
`;
			} else {
				content += `
## Parameters
none
`;
			}
	
			if (def.responses['200']) {
				const ref = def.responses['200'].content['application/json'].schema.$ref;
				const schema = ref ? apiDefinition.components.schemas[ref.replace('#/components/schemas/', '')] : def.responses['200'].content['application/json'].schema;

				content += `
## Response
<MkSchemaViewer :schema="${JSON.stringify(schema).replace(/"/g, '\'')}" :schemas="${JSON.stringify(apiDefinition.components.schemas).replace(/"/g, '\'')}">
</MkSchemaViewer>
`;
			} else {
				content += `
## Response
none
`;
			}
	
			const page = await createPage(app, {
				path: endpointsDir + name + '.html',
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
