<template>
<div class="mk-schema-viewer-item-object">
	<el-table :data="tableData" :border="false" stripe style="width: 100%">
		<el-table-column type="expand">
			<template #default="props">
				<div style="padding: 8px 16px;">
					<MkSchemaViewerItem :schema="schema.properties[props.row.name]"/>
				</div>
			</template>
		</el-table-column>
		<el-table-column label="Name" prop="name">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<b class="_mono">{{ scope.row.name }}</b>
					<span v-if="(schema.required ?? []).includes(scope.row.name)" class="required" title="Required" style="color: #f00; margin-left: 4px;">*</span>
				</div>
			</template>
		</el-table-column>
		<el-table-column label="Type" prop="type">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<span class="_mono">{{ scope.row.type }}{{ scope.row.nullable ? ' | null' : '' }}</span>
				</div>
			</template>
		</el-table-column>
		<el-table-column label="Default" prop="default">
			<template #default="scope">
				<div style="display: flex; align-items: center">
					<span class="_mono">{{ scope.row.default }}</span>
				</div>
			</template>
		</el-table-column>
	</el-table>
</div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
import { useRouteLocale } from '@vuepress/client';
import MkSchemaViewerItem from './MkSchemaViewerItem.vue';

const camelToKebab = str => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

const props = defineProps<{
	schema: any;
}>();

const tableData = Object.entries(props.schema.properties).map(([k, v]) => ({
	name: k,
	type: v.type,
	nullable: v.nullable,
	default: v.default,
	description: v.description,
}));

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

	> .integer {
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
			border-top: dashed 1px var(--c-border);

			> .k {
				width: 11em;
				padding-right: 8px;
				font-family: var(--font-family-code);
				word-wrap: anywhere;

				> .required {
					margin-left: 8px;
					color: #f00;
				}
			}
		}
	}
}
</style>
