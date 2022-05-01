<template>
	<Layout>
		<template #navbar-after>
			<button @click="toggleAimode" class="aiModeButton">藍モード</button>
		</template>
		<template #sidebar-bottom>
			<MkDots :class="$style.sidebarDots" :space="12" />
			<MkAd :class="$style.koko9" class="mkAd" />
		</template>
		<template #page-top>
			<MkDots :class="$style.headerDots" />
		</template>
		<template #page-bottom>
			<MkRelatedPages />
			<MkDots :class="$style.footerDots" />
			<div :class="$style.footer">
				Copyright &copy; 2022 syuilo and other contributors
			</div>
		</template>
	</Layout>

	<iframe
		v-if="aimode"
		title="Ai-chan"
		:class="$style.live2d"
		ref="live2d"
		src="https://misskey-dev.github.io/mascot-web/?scale=2&y=1.4"
		allowtransparency
	></iframe>
</template>

<script lang="ts">
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default {
	components: {
		Layout,
	},

	data() {
		return {
			aimode: __VUEPRESS_SSR__ || localStorage.getItem("aimode") === "true",
		};
	},

	mounted() {
		if (this.aimode) {
			const iframeRect = this.$refs.live2d.getBoundingClientRect();
			window.addEventListener(
				"mousemove",
				(ev) => {
					this.$refs.live2d.contentWindow.postMessage(
						{
							type: "moveCursor",
							body: {
								x: ev.clientX - iframeRect.left,
								y: ev.clientY - iframeRect.top,
							},
						},
						"*"
					);
				},
				{ passive: true }
			);

			window.addEventListener(
				"touchmove",
				(ev) => {
					this.$refs.live2d.contentWindow.postMessage(
						{
							type: "moveCursor",
							body: {
								x: ev.touches[0].clientX - iframeRect.left,
								y: ev.touches[0].clientY - iframeRect.top,
							},
						},
						"*"
					);
				},
				{ passive: true }
			);
		}
	},

	methods: {
		toggleAimode() {
			localStorage.setItem("aimode", this.aimode ? "false" : "true");
			location.reload();
		},
	},
};
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
