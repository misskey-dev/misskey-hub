<template>
<a :href="ad.link" target="_blank"><img :src="ad.img"></a>
</template>

<script>
import {  } from 'vue';
import { usePageData } from '@vuepress/client';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/lib/client';

export default {
  setup() {
    const ads = [{
			link: 'https://github.com/misskey-dev',
			img: 'https://assets.misskey-hub.net/public/i-want-you.pngmain/i-want-you.png',
		}, {
			link: 'https://github.com/syuilo/ai',
			img: 'https://raw.githubusercontent.com/syuilo/ai-profile/master/ai-ad.png',
		}];

    return {
			ad: ads[Math.floor(Math.random() * ads.length)],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
