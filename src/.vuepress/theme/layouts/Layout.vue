<template>
	<Layout>
		<template #navbar-after>
			<button @click="toggleAimode">藍モード</button>
		</template>
		<template #sidebar-bottom>
			<a :class="$style.iwantyou" href="https://github.com/misskey-dev" target="_blank"><img src="https://raw.githubusercontent.com/misskey-dev/assets/main/i-want-you.png"></a>
		</template>
		<template #page-bottom>
			<div :class="$style.footer">(c) Misskey 2021</div>
		</template>
	</Layout>

	<iframe v-if="aimode" :class="$style.live2d" ref="live2d" src="https://misskey-dev.github.io/mascot-web/?scale=2&y=1.4" allowtransparency></iframe>
</template>

<script lang="ts">
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
	components: {
		Layout,
	},

	data() {
		return {
			aimode: localStorage.getItem('aimode') === 'true'
		};
	},

	mounted() {
		if (this.aimode) {
			const iframeRect = this.$refs.live2d.getBoundingClientRect();
			window.addEventListener('mousemove', ev => {
				this.$refs.live2d.contentWindow.postMessage({
					type: 'moveCursor',
					body: {
						x: ev.clientX - iframeRect.left,
						y: ev.clientY - iframeRect.top,
					}
				}, '*');
			}, { passive: true });

			window.addEventListener('touchmove', ev => {
				this.$refs.live2d.contentWindow.postMessage({
					type: 'moveCursor',
					body: {
						x: ev.touches[0].clientX - iframeRect.left,
						y: ev.touches[0].clientY - iframeRect.top,
					}
				}, '*');
			}, { passive: true });
		}
	},

	methods: {
		toggleAimode() {
			localStorage.setItem('aimode', this.aimode ? 'false' : 'true');
			location.reload();
		}
	}
}
</script>

<style lang="scss" module>
.footer {
	text-align: center;
}

.iwantyou {
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
