<template>
<div class="mk-schema-viewer-item">
	<section v-if="schema.description">
		<div class="title">説明</div>
		<div class="description">{{ schema.description }}</div>
	</section>
	<section class="type">
		<div class="title">型</div>
		<div class="body">
			<div v-if="schema.$ref && schema.$ref.startsWith('misskey://')">
				<RouterLink :to="refPath">{{ refName }}</RouterLink><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.$ref">
				<button @click="expandRef = !expandRef">{{ expandRef ? '-' : '+' }} [{{ refName }}]</button>
				<el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
				<MkSchemaViewerItem v-if="schemas && expandRef" :schema="schemas[refName]"/>
			</div>
			<div v-else-if="schema.type === 'string'" class="string">
				<code>string</code><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
				<div v-if="schema.enum" class="enum">enum:
					<code v-for="v in schema.enum">{{ v }}</code>
				</div>
			</div>
			<div v-else-if="schema.type === 'number'" class="number">
				<code>number</code><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.type === 'integer'" class="integer">
				<code>integer</code><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.type === 'boolean'" class="boolean">
				<code>boolean</code><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.type === 'array'" class="array">
				<div class="label">Array of:</div>
				<div v-if="schema.description" class="description">{{ schema.description }}</div>
				<MkSchemaViewerItem :schema="schema.items"/>
				<el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.type === 'object' && schema.properties == null" class="object">
				<code>object</code><el-tag v-if="schema.nullable" class="ml-2" type="info">nullable</el-tag>
			</div>
			<div v-else-if="schema.type === 'object'" class="object">
				<MkSchemaViewerItemObject :schema="schema"/>
				<div v-if="schema.nullable" class="nullable"><el-tag class="ml-2" type="info">nullable</el-tag></div>
			</div>
		</div>
	</section>
	<section v-if="schema.default !== undefined">
		<div class="title">デフォルト</div>
		<div><code>{{ schema.default }}</code></div>
	</section>
</div>
</template>

<script>
import { ref, inject } from 'vue';
import { useRouteLocale } from '@vuepress/client';

const camelToKebab = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export default {
	props: {
		schema: {
			type: Object,
			required: true,
		},
	},

  setup(props) {
		const locale = useRouteLocale();
		const refName = props.schema.$ref ? props.schema.$ref.replace('#/components/schemas/', '').replace('misskey://', '') : null;
		const expandRef = ref(false);
		const schemas = inject('schemas', {});

		return {
			refName,
			refPath: props.schema.$ref ? `${locale.value}docs/api/entity/${camelToKebab(refName)}.html` : null,
			expandRef,
			schemas,
		};
  },
};
</script>

<style lang="scss" scoped>
.mk-schema-viewer-item {
	> section {
		> .title {
			font-weight: bold;
			margin-bottom: 0.5em;
		}

		& + section {
			margin-top: 1em;
		}

		&.type {
			> .body {
				padding: 1em;
				border: solid 1px var(--c-border);
				border-radius: 8px;
			}

		}
	}}
</style>
