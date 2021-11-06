<template>
<div class="mk-streaming-api-console">
	<input v-model="host">
</div>
</template>

<script>
import {  } from 'vue';

export default {
	props: {
		def: {
			type: Object,
			required: true,
		}
	},

  setup(props) {

  },
};
</script>

<style lang="scss" scoped>
.mk-streaming-api-console {
	margin: 1.5rem auto;

}
</style>
