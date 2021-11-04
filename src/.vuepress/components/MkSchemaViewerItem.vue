<template>
<div class="mk-schema-viewer-item">
	<div v-if="schema.$ref">
		<code>{{ schema.$ref }}</code> (TODO: link to entity page if starts with misskey://)
	</div>
	<div v-else-if="schema.type === 'string'">
		<code>string</code>
	</div>
	<div v-else-if="schema.type === 'array'" class="array">
		<div class="label">Array of:</div>
		<MkSchemaViewerItem :schema="schema.items"/>
	</div>
	<div v-else-if="schema.type === 'object'" class="object">
		<div class="label">Object:</div>
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

			> .k {
				width: 8em;
			}
		}
	}
}
</style>
