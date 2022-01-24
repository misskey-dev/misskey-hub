<template>
<div ref="container" :class="$style.container" :style="{ height }"></div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Loader } from '../js/particle/loader';

export default {
	props: {
		height: {
			type: String,
			default: '700px',
			required: false,
		}
	},

	setup(props, context) {
		const container = ref<HTMLElement>(null);

		onMounted(() => {
			const loder = new Loader(container.value);

			onUnmounted(() => {
				// トランジションして消えるようにするため
				setTimeout(() => {
					loder.destroy();
				}, 1000);
			});
		});

		return {
			container,
		};
	},
};
</script>

<style lang="scss" module>
.container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	pointer-events: none;
}
</style>
