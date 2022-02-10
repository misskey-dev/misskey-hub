<template>
<div>
	<NavBar/>
	<Transition
		name="fade-slide-y"
		mode="out-in"
		@before-enter="onBeforeEnter"
		@before-leave="onBeforeLeave"
	>
		<Page :key="page.path">
			<template #top>
				<MkDots :class="$style.headerDots"/>
			</template>
			<template #bottom>
				<MkRelatedPages/>
				<MkDots :class="$style.footerDots"/>
				<div :class="$style.footer">Copyright (c) 2021 syuilo and other contributors</div>
			</template>
		</Page>
	</Transition>

	<iframe v-if="aimode" :class="$style.live2d" ref="live2d" src="https://misskey-dev.github.io/mascot-web/?scale=2&y=1.4" allowtransparency></iframe>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import Page from '@vuepress/theme-default/lib/client/components/Page.vue';
import NavBar from '../components/NavBar.vue';

const page = usePageData();

const aimode = __VUEPRESS_SSR__ || localStorage.getItem('aimode') === 'true';
const live2dIframe = ref();

function toggleAimode() {
	localStorage.setItem('aimode', aimode ? 'false' : 'true');
	location.reload();
}

onMounted(() => {
	if (aimode) {
		const iframeRect = live2dIframe.value.live2d.getBoundingClientRect();
		window.addEventListener('mousemove', ev => {
			live2dIframe.value.contentWindow.postMessage({
				type: 'moveCursor',
				body: {
					x: ev.clientX - iframeRect.left,
					y: ev.clientY - iframeRect.top,
				}
			}, '*');
		}, { passive: true });

		window.addEventListener('touchmove', ev => {
			live2dIframe.value.contentWindow.postMessage({
				type: 'moveCursor',
				body: {
					x: ev.touches[0].clientX - iframeRect.left,
					y: ev.touches[0].clientY - iframeRect.top,
				}
			}, '*');
		}, { passive: true });
	}
});
</script>

<style lang="scss" module>
.footer {
	text-align: center;
}

.sidebarDots {
	display: block;
	margin: 0 32px 2em 32px;
	width: calc(100% - 64px);
	height: 40px;
	opacity: 0.2;
}

.headerDots {
	display: block;
	margin: 2em auto 0 auto;
	width: 100%;
	max-width: min(var(--content-width), calc(100% - 4rem));
	height: 40px;
	opacity: 1;
	color: var(--c-brand);
}

.footerDots {
	display: block;
	margin: 2em auto;
	width: 100%;
	max-width: min(var(--content-width), calc(100% - 4rem));
	height: 70px;
	opacity: 0.2;
}

.koko9 {
	display: block;
	margin: 0 32px 32px 32px;

	> img {
		display: block;
		width: 100%;
	}
}

.live2d {
	position: fixed;
	bottom: 0;
	right: 0;
	width: 300px;
	height: 600px;
	border: none;
	pointer-events: none;
}
</style>
