<template>
<RouterLink class="mk-blog-page-preview" :to="page.path">
	<header>{{ page.title }}<time>{{ new Date(page.createdTime).toLocaleString() }}</time></header>
	<div>{{ page.summary }}</div>
	<footer>{{ themeLocale.readThisArticle }}</footer>
</RouterLink>
</template>

<script>
import {  } from 'vue';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client';

export default {
	props: {
		page: {
			required: true
		},
	},

  setup() {
    return {
			themeLocale: useThemeLocaleData(),
    };
  },
};
</script>

<style lang="scss" scoped>
.mk-blog-page-preview {
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
		display: flex;
		font-weight: bold;

		> time {
			margin-left: auto;
			font-weight: normal;
			opacity: 0.7;
		}
	}

	> div {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	> footer {
		color: var(--c-text-accent);
	}
}
</style>
