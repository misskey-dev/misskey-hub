<template>
<div class="mk-api-console">
	<el-collapse v-model="expands">
		<el-collapse-item title="API Console" name="console">
			<el-form :model="form" label-width="120px">
				<el-form-item label="Host" prop="host" :rules="[{ required: true }]">
					<el-input v-model="host" placeholder="misskey.example.com">
						<template #prepend>https://</template>
					</el-input>
				</el-form-item>
				<el-form-item label="Endpoint" prop="endpoint" :rules="[{ required: true }]">
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
	for (const [k, v] of Object.entries(props.def.req.properties ?? {})) {
		endpointBody[k] =
			v.type === 'string' ? '' :
			v.type === 'integer' ? 0 :
			v.type === 'boolean' ? false :
			v.type === 'array' ? [] :
			v.type === 'object' ? {} :
			null;
	}
}
params.value = JSON5.stringify(endpointBody, null, 2);

const endpoint = ref(props.name);
const host = ref(localStorage.getItem('host') ?? '');
const token = ref(localStorage.getItem('token') ?? '');
const res = ref(null);
const expands = ref([]);

// for validation
const form = ref({
	host,
	endpoint,
})

watch(host, () => {
	localStorage.setItem('host', host.value)
});

watch(token, () => {
	localStorage.setItem('token', token.value)
});

function request() {
	const promise = new Promise((resolve, reject) => {
		const data = {
			...JSON5.parse(params.value),
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
				resolve(body.error);
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
