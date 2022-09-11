<template>
<div class="mk-api-resources">
	<el-collapse v-model="expands">
		<el-collapse-item title="Definition" name="definition">
			{{ def }}
		</el-collapse-item>
	</el-collapse>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import JSON5 from 'json5';

const props = defineProps<{
	def: any;
}>();

const expands = ref([]);
</script>

<style lang="scss" scoped>
</style>
