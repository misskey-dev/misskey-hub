<template>
<div class="mk-endpoints">
	<div class="tags">
		<div class="title">タグで絞り込み</div>
		<div class="tags">
			<span class="tag" v-for="tag in tags" :key="tag" :class="{ active: activeTags.includes(tag) }" @click="toggleTag(tag)">{{ tag }}</span>
		</div>
	</div>
	<div class="endpoints">
		<RouterLink v-for="endpoint in endpoints" :key="endpoint.name" class="endpoint" :to="`./endpoints/${endpoint.name}.html`">
			<div class="name">{{ endpoint.name }}</div>
			<div class="summary">{{ endpoint.summary }}</div>
		</RouterLink>
	</div>
</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
	tags: string[];
	endpoints: { name: string; summary?: string; tags: string[]; }[];
}>();

const activeTags = ref([]);
const endpoints = ref(props.endpoints);

function toggleTag(tag) {
	if (activeTags.value.includes(tag)) {
		activeTags.value = activeTags.value.filter(x => x !== tag);
	} else {
		activeTags.value.push(tag);
	}
}

watch(activeTags, () => {
	if (activeTags.value.length === 0) {
		endpoints.value = props.endpoints;
	} else {
		endpoints.value = props.endpoints.filter(x => activeTags.value.every(y => x.tags.includes(y)));
	}
}, { deep: true });
</script>

<style lang="scss" scoped>
.mk-endpoints {
	> .tags {
		padding: 32px;
		border: solid 1px var(--c-border);
		border-radius: 8px;

		> .title {
			font-weight: bold;
			margin-bottom: 12px;
		}

		> .tags {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;

			> .tag {
				display: inline-block;
				cursor: pointer;
				padding: 10px 16px;
				border: solid 1px var(--c-border);
				border-radius: 8px;
				user-select: none;

				&.active {
					border-color: var(--c-brand);
				}
			}
		}
	}

	> .endpoints {
		> .endpoint {
			display: block;
			padding: 10px 16px;
			margin: 12px 0;
			border: solid 1px var(--c-border);
			border-radius: 8px;

			&:hover {
				text-decoration: none !important;
			}

			> .summary {
				margin-top: 8px;
				color: var(--c-text);
				font-weight: normal;
				font-size: 0.9em;

				&:empty {
					display: none;
				}
			}
		}
	}
}
</style>
