import * as fs from 'fs';
import { App, createPage, Page } from '@vuepress/core';
import glob from 'glob';
import JSON5 from 'json5';

export async function generateEndpointPages(app: App) {
	for (const locale of Object.keys(app.options.locales)) {
		const endpointsDir = locale + 'docs/api/endpoints/';
		const endpointPaths = glob.sync(__dirname + '/..' + endpointsDir + '**/*.json5');
		const commonDef = JSON5.parse(fs.readFileSync(`${__dirname}/..${locale}docs/api/common.json5`, 'utf-8'));

		const endpointsForIndex = [];

		for (const endpointPath of endpointPaths) {
			const name = endpointPath.slice(endpointPath.indexOf(endpointsDir)).replace(endpointsDir, '').replace('.json5', '');
			const def = JSON5.parse(fs.readFileSync(endpointPath, 'utf-8'));
			endpointsForIndex.push({
				name: name, summary: def.summary, tags: def.tags ?? []
			});
	
			let content = `---
filePath: '${`docs/api/endpoints/${name}.json5`}'
description: '${def.summary}'
---

# \`${name}\`\n${def.description}`;

			if (def.requireCredential) {
				content += `\n\n<el-alert title="クレデンシャル必須" type="success" :closable="false" />\n`;
			}

			content += `
<ClientOnly>
<MkApiConsole :name="${JSON.stringify(name).replace(/"/g, '\'')}" :def="${JSON.stringify(def).replace(/"/g, '\'')}"/>
</ClientOnly>
`;

			// TODO: permission
	
			if (def.req && Object.keys(def.req).length > 0) {
				content += `
## パラメータ
<ClientOnly>
<MkSchemaViewerItemObject :schema="${JSON.stringify(def.req).replace(/"/g, '\'')}"/>
</ClientOnly>
`;
			} else {
				content += `
## パラメータ
<el-alert title="なし" type="success" :closable="false" />
`;
			}
	
			if (def.res) {
				content += `
## レスポンス
<ClientOnly>
<MkSchemaViewer :schema="${JSON.stringify(def.res).replace(/"/g, '\'')}"/>
</ClientOnly>
`;
			} else {
				content += `
## レスポンス
<el-alert title="なし" type="success" :closable="false" />
`;
			}

			content += `
## エラー
<ClientOnly>
<MkApiErrors :errors="${JSON.stringify(def.errors).replace(/"/g, '\'')}" :common-errors="${JSON.stringify(commonDef.errors).replace(/"/g, '\'')}"/>
</ClientOnly>
`;

			content += `
## リソース
<ClientOnly>
<MkApiResources :def="${JSON.stringify(def).replace(/"/g, '\'')}"/>
</ClientOnly>
`;

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
