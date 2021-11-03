<template>
<div class="mk-index">
	<template v-for="page in childPages">
		<slot :page="page">
			<RouterLink class="page" :to="page.path">
				<header>{{ page.title }}</header>
				<div>{{ page.summary }}</div>
			</RouterLink>
		</slot>
	</template>
</div>
</template>

<script>
import {  } from 'vue';
import { usePageData } from '@vuepress/client';

export default {
	props: {
		sort: {
			type: Function,
			required: false,
			default: null,
		}
	},

  setup(props) {
    const page = usePageData();

		const childPages = page.value.childPages || [];

		if (props.sort) {
			childPages.sort(props.sort);
		}

    return {
      childPages,
    };
  },
};
</script>

<style lang="scss" scoped>
.mk-index {
	margin: 1.5rem auto;

	> .page {
		display: block;
		padding: 1em;
		border: solid 1px var(--c-border);
		border-radius: 8px;
		color: var(--c-text);
		font-weight: normal;

		&:hover {
			border-color: var(--c-brand);
			text-decoration: none !important;
		}

		&:not(:last-child) {
			margin-bottom: 1em;
		}

		> header {
			font-weight: bold;
		}

		> div {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		> footer {
			opacity: 0.7;
		}
	}
}
</style>
