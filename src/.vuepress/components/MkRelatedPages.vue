<template>
<div class="mk-related-pages" v-if="relatedPages.length > 0">
	<div class="title">{{ themeLocale.relatedPagesText }}</div>
	<div class="pages">
		<RouterLink v-for="page in relatedPages" class="page" :to="page.path">
			<header>{{ page.title }}</header>
			<div>{{ page.summary }}</div>
		</RouterLink>
	</div>
</div>
</template>

<script>
import {  } from 'vue';
import { usePageData } from '@vuepress/client';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client';

export default {
  setup() {
    const page = usePageData();

    return {
			themeLocale: useThemeLocaleData(),
      relatedPages: page.value.relatedPages || [],
    };
  },
};
</script>

<style lang="scss" scoped>
.mk-related-pages {
	max-width: var(--content-width);
	margin: 1rem auto;
	width: 100%;
	max-width: min(var(--content-width), 100% - 4rem);
	border-top: 1px solid var(--c-border);
	padding-top: 1rem;

	> .title {
		font-weight: bold;
		font-size: 1.2em;
		margin-bottom: 1rem;
	}

	> .pages {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		grid-gap: 1rem;

		> .page {
			display: block;
			padding: 1em;
			border: solid 1px var(--c-border);
			border-radius: 8px;
			color: var(--c-text);
			font-weight: normal;
			font-size: 0.9em;

			&:hover {
				border-color: var(--c-brand);
				text-decoration: none !important;
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
}
</style>
