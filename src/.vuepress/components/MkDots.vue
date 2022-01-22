<template>
<svg fill="none">
	<defs>
		<pattern :id="id" x="0" y="0" :width="space" :height="space" patternUnits="userSpaceOnUse">
			<circle cx="2" cy="2" r="2" fill="currentColor"></circle>
		</pattern>
	</defs>
	<rect width="100%" height="100%" :fill="`url(#${id})`"></rect>
</svg>
</template>

<script>
import {  } from 'vue';

const idchars = 'abcdefghijklmnopqrstuvwxyz';

export default {
	props: {
		space: {
			type: Number,
			required: false,
			default: 15,
		},
	},

	setup() {
		const id = Array.from(Array(32)).map(() => idchars[Math.floor(Math.random() * idchars.length)]).join('');

		return {
			id,
		};
	},
};
</script>
