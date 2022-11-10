import * as fs from 'fs';
import { App, createPage, Page } from '@vuepress/core';
import glob from 'glob';
import JSON5 from 'json5';
const merge = require('deepmerge')

const combineMerge = (target, source, options) => {
	const destination = target.slice()

	source.forEach((item, index) => {
		if (typeof destination[index] === 'undefined') {
			destination[index] = options.cloneUnlessOtherwiseSpecified(item, options)
		} else if (options.isMergeableObject(item)) {
			destination[index] = merge(target[index], item, options)
		} else if (target.indexOf(item) === -1) {
			destination.push(item)
		}
	})
	return destination
}

const openApiDefinition = JSON.parse(fs.readFileSync(__dirname + '/api.json', 'utf8'));
const endpointPaths = Object.keys(openApiDefinition.paths);
const endpointTags = Array.from(new Set(Object.values(openApiDefinition.paths).flatMap(x => x.post.tags ?? [])));

export async function generateEndpointPages(app: App) {
	for (const locale of Object.keys(app.options.locales)) {
		const defLocale = JSON5.parse(fs.readFileSync(__dirname + `/api.locale.${app.options.locales[locale].lang}.json5`, 'utf8'));
		const _openApi = merge(openApiDefinition, defLocale, { arrayMerge: combineMerge });
		const endpointsForComponent = Object.entries(_openApi.paths).map(([e, x]) => ({ name: e.substring(1), summary: x.post.summary, tags: x.post.tags ?? [] }));

		const endpointsDir = locale + 'docs/api/endpoints/';

		let indexContent = '# エンドポイント一覧\n';

		indexContent += `
<MkEndpoints :endpoints="${JSON.stringify(endpointsForComponent).replace(/"/g, '\'')}" :tags="${JSON.stringify(endpointTags).replace(/"/g, '\'')}"/>`;

		for (const endpointPath of endpointPaths) {
			const name = endpointPath.substring(1);
			const def = _openApi.paths[endpointPath]['post'];
			const requireCredential = def.security?.length > 0;
	
			let content = `# \`${name}\``;

			if (requireCredential) {
				content += `\n\nCredential required.\n`;
			}

			content += `\n${def.description}\n`;

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
				const schema = ref ? _openApi.components.schemas[ref.replace('#/components/schemas/', '')] : def.responses['200'].content['application/json'].schema;

				content += `
## Response
<MkSchemaViewer :schema="${JSON.stringify(schema).replace(/"/g, '\'')}" :schemas="${JSON.stringify(_openApi.components.schemas).replace(/"/g, '\'')}">
</MkSchemaViewer>
`;
			} else {
				content += `
## Response
none
`;
			}

			content += `
## OpenAPI definition
\`\`\` js
${JSON5.stringify(def, null, '\t')}
\`\`\`
`;
	
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
