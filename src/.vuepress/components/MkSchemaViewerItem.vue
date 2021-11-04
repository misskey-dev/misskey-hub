<template>
<div class="mk-schema-viewer-item">
	<div v-if="schema.$ref">
		<RouterLink v-if="schema.$ref.startsWith('misskey://')" :to="refPath"><code>{{ refName }}</code></RouterLink><span v-if="schema.nullable" class="nullable">(nullable)</span>
	</div>
	<div v-else-if="schema.type === 'string'" class="string">
		<code>string</code><span v-if="schema.nullable" class="nullable">(nullable)</span>
		<div v-if="schema.enum" class="enum">enum:
			<code v-for="v in schema.enum">{{ v }}</code>
		</div>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'number'" class="number">
		<code>number</code><span v-if="schema.nullable" class="nullable">(nullable)</span>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'boolean'" class="boolean">
		<code>boolean</code><span v-if="schema.nullable" class="nullable">(nullable)</span>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'array'" class="array">
		<div class="label">Array of:</div>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
		<MkSchemaViewerItem :schema="schema.items"/>
		<span v-if="schema.nullable" class="nullable">(nullable)</span>
	</div>
	<div v-else-if="schema.type === 'object'" class="object">
		<div class="label">Object:</div>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
		<div v-for="[k, v] in Object.entries(schema.properties)" class="kv">
			<div class="k"><code>{{ k }}</code></div>
			<div class="v"><MkSchemaViewerItem :schema="v"/></div>
		</div>
		<span v-if="schema.nullable" class="nullable">(nullable)</span>
	</div>
</div>
</template>

<script>
import {  } from 'vue';
import { useRouteLocale } from '@vuepress/client';

const camelToKebab = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

export default {
	props: {
		schema: {
			type: Object,
			required: true,
		}
	},

  setup(props) {
		const locale = useRouteLocale();
		const refName = props.schema.$ref ? props.schema.$ref.replace('misskey://', '') : null;

		return {
			refName,
			refPath: props.schema.$ref ? `${locale.value}docs/api/entity/${camelToKebab(refName)}.html` : null,
		};
  },
};
</script>

<style lang="scss" scoped>
.mk-schema-viewer-item {
	> .string {
		> .description {
			margin-top: 0.5em;
		}

		> .enum {
			> * {
				margin-right: 0.5em;
			}
		}
	}

	> .number {
		> .description {
			margin-top: 0.5em;
		}
	}

	> .array {
		> .label {
			margin-bottom: 0.5em;
		}
	}

	> .object {
		border: solid 1px var(--c-border);
		border-radius: 6px;
		padding: 12px 16px;

		> .label {
			margin-bottom: 0.5em;
		}

		> .kv {
			display: flex;
			padding: 0.5em 0;
			border-top: solid 1px var(--c-border);

			> .k {
				width: 8em;
			}
		}
	}
}
</style>
