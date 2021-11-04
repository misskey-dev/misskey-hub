<template>
<div class="mk-schema-viewer-item">
	<div v-if="schema.$ref">
		<code>{{ schema.$ref }}</code> (TODO: link to entity page if starts with misskey://)
	</div>
	<div v-else-if="schema.type === 'string'" class="string">
		<code>string</code>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'number'" class="number">
		<code>number</code>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'boolean'" class="boolean">
		<code>boolean</code>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
	</div>
	<div v-else-if="schema.type === 'array'" class="array">
		<div class="label">Array of:</div>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
		<MkSchemaViewerItem :schema="schema.items"/>
	</div>
	<div v-else-if="schema.type === 'object'" class="object">
		<div class="label">Object:</div>
		<div v-if="schema.description" class="description">{{ schema.description }}</div>
		<div v-for="[k, v] in Object.entries(schema.properties)" class="kv">
			<div class="k"><code>{{ k }}</code></div>
			<div class="v"><MkSchemaViewerItem :schema="v"/></div>
		</div>
	</div>
</div>
</template>

<script>
import {  } from 'vue';

export default {
	props: {
		schema: {
			type: Object,
			required: true,
		}
	},

  setup(props) {

  },
};
</script>

<style lang="scss" scoped>
.mk-schema-viewer-item {
	> .string {
		> .description {
			margin-top: 0.5em;
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
			padding-top: 0.5em;
			border-top: solid 1px var(--c-border);

			> .k {
				width: 8em;
			}
		}
	}
}
</style>
