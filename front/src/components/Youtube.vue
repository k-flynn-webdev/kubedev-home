<template>

	<cbutton 
		v-bind:link=link
		v-bind:title=title>

			<svg width="100%" height="100%" viewBox="0 0 116 116" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

				<g id="icon_youtube">
					<path d="M99.012,41.694c0,-10.799 -32.593,-10.218 -41,-10.218c-8.406,0 -41,-0.581 -41,10.218l0,33.565c0,10.799 32.594,10.217 41,10.217c8.407,0 41,0.582 41,-10.217l0,-33.565Zm-24.371,16.782l-25.905,16.941l0,-33.881l25.905,16.94Z"/>
				</g>

			</svg>

	</cbutton>

</template>

<script>

import cbutton from '~/components/Button.vue';

export default {
	name: 'c-youtube',
	data(){
		return {
			link : 'https://www.youtube.com/channel/UCe1UkUm2Aa1rjrCSMny369g',
			title : 'Youtube',
		}
	},
	components: {
		cbutton,
	},
}

</script>

<style>

</style>
