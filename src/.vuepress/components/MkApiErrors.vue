<template>
<div class="mk-api-errors">
	<el-tabs v-model="activeName">
		<el-tab-pane label="固有のエラー" name="a">
			<template v-if="Object.keys(errors).length > 0">
				<el-collapse v-model="expands">
					<el-collapse-item v-for="e in errors" :title="e.code" :name="e.id">
						<div>{{ e.description }}</div>
						<div class="_mono">ID: {{ e.id }}</div>
					</el-collapse-item>
				</el-collapse>
			</template>
			<template v-else>
				<el-alert title="なし" type="success" :closable="false" />
			</template>
		</el-tab-pane>
		<el-tab-pane label="共通のエラー" name="b">
			<el-collapse v-model="commonExpands">
				<el-collapse-item v-for="e in commonErrors" :title="e.code" :name="e.id">
					<div>{{ e.description }}</div>
					<div class="_mono">ID: {{ e.id }}</div>
				</el-collapse-item>
			</el-collapse>
		</el-tab-pane>
	</el-tabs>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import JSON5 from 'json5';

const props = defineProps<{
	errors: any[];
	commonErrors: any[];
}>();

const activeName = ref('a')
const expands = ref([]);
const commonExpands = ref([]);

</script>

<style lang="scss" scoped>
</style>
