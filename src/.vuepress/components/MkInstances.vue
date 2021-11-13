<template>
<div class="mk-instances">
	<!-- TODO: 言語によるフィルタ機能など -->
	<div class="instance" v-for="instance in instances">
		<iframe class="iframe" :src="`https://${instance.host}/_info_card_`"></iframe>
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
      instances: page.value.instances || [],
    };
  },
};
</script>

<style lang="scss" scoped>
.mk-instances {
	margin: 1rem auto;

	> .instance {
		&:not(:last-child) {
			margin-bottom: 16px;
		}

		> .iframe {
			width: 100%;
			height: 250px;
			background: #fff;
			border: none;
			border-radius: 10px;
			box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
		}
	}
}
</style>
