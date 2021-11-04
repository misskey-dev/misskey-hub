<template>
<div class="mk-schema-viewer">
	<div class="title"><slot name="title"></slot>:</div>
	<div class="schema">
		<MkSchemaViewerItem :schema="schema"/>
	</div>
</div>
</template>

<script>
import {  } from 'vue';

export default {
	props: {
		schema: {
			type: Object,
			required: true,
		}
	},

  setup(props) {

  },
};
</script>

<style lang="scss" scoped>
.mk-schema-viewer {
	margin: 1.5rem auto;

	> .title {
		font-weight: bold;
		margin-bottom: 0.5em;
	}

	> .schema {
	}
}
</style>
