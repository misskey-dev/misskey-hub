<template>
<div ref="container" :class="$style.container"></div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Loader } from '../js/particle/loader';

export default {
	props: {

	},

	setup(props, context) {
		const container = ref<HTMLElement>(null);

		onMounted(() => {
			const loder = new Loader(container.value);

			onUnmounted(() => {
				loder.destroy();
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
	height: 700px;
	pointer-events: none;
}
</style>
