<template>
	<Layout>
		<template #navbar-after>
			<button @click="toggleAimode">藍モード</button>
		</template>
		<template #page-bottom>
			<div class="my-footer">(c) Misskey 2021</div>
		</template>
	</Layout>

	<iframe v-if="aimode" class="live2d" ref="live2d" src="https://misskey-dev.github.io/mascot-web/?scale=2&y=1.4" allowtransparency></iframe>
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

<style lang="css">
.my-footer {
	text-align: center;
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
