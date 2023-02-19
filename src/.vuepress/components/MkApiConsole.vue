<template>
<div class="mk-api-console">
	<el-collapse v-model="expands">
		<el-collapse-item title="API Console" name="console">
			<el-form :model="form" label-width="120px">
				<el-form-item label="Host" :rules="[{ required: true }]">
					<el-input v-model="host" placeholder="misskey.example.com">
						<template #prepend>https://</template>
					</el-input>
				</el-form-item>
				<el-form-item label="Endpoint" :rules="[{ required: true }]">
					<el-input v-model="endpoint" placeholder="foo/bar">
						<template #prepend>https://{{ host }}/api/</template>
					</el-input>
				</el-form-item>
				<el-form-item label="Params">
					<el-input v-model="params" type="textarea" :autosize="{ minRows: 8 }">
					</el-input>
				</el-form-item>
				<el-form-item label="Token">
					<el-input v-model="token" placeholder="Token or API key">
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">Send</el-button>
				</el-form-item>
				<el-form-item label="Response">
					<el-input v-model="res" readonly type="textarea" autosize>
					</el-input>
				</el-form-item>
			</el-form>
		</el-collapse-item>
	</el-collapse>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import JSON5 from 'json5';

const props = defineProps<{
	name: string;
	def: any;
}>();

const params = ref();

const endpointBody = {};
if (props.def.req) {
	const getDefault = function(type) {
		const defaultType =
			type === 'string' ? '' :
			type === 'integer' ? 0 :
			type === 'boolean' ? false :
			type === 'array' ? [] :
			type === 'object' ? {} :
			null;
		return defaultType
	}
	for (const [k, v] of Object.entries(props.def.req.properties ?? {})) {
		if (v.type === 'array' && 'items' in v) {
			if (v.items.type === 'object'){
				let itemType = [];
				for (const [i, j] of Object.entries(v.items.properties ?? {})) {
					itemType.push(getDefault(j.type))
				}
				let required = Object.fromEntries(v.items.required.map(
					key => [key, itemType[v.items.required.indexOf(key)]]
				));
				endpointBody[k] = [required];
				continue;
			}
		}
		endpointBody[k] = getDefault(v.type)
	}
}
params.value = JSON.stringify(endpointBody, null, 2);

const endpoint = ref(props.name);
const host = ref(localStorage.getItem('host') ?? '');
const token = ref(localStorage.getItem('token') ?? '');
const res = ref(null);
const expands = ref([]);

watch(host, () => {
	localStorage.setItem('host', host.value)
});

watch(token, () => {
	localStorage.setItem('token', token.value)
});

function request() {
	const promise = new Promise((resolve, reject) => {
		const data = {
			...JSON.parse(params.value),
			i: token.value && token.value.trim() !== '' ? token.value : undefined,
		};
		fetch(`https://${host.value}/api/${endpoint.value}`, {
			method: 'POST',
			body: JSON.stringify(data),
			credentials: 'omit',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (res) => {
			const body = res.status === 204 ? null : await res.json();

			if (res.status === 200) {
				resolve(body);
			} else if (res.status === 204) {
				resolve();
			} else {
				reject(body.error);
			}
		}).catch(reject);
	});

	return promise;
}

async function onSubmit() {
	const _res = await request();
	res.value = JSON5.stringify(_res, null, '\t');
}
</script>

<style lang="scss" scoped>
.mk-api-console {
	margin: 1.5rem auto;

}
</style>
