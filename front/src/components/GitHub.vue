<template>

	<cbutton 
		v-bind:link=link
		v-bind:title=title>

			<svg width="100%" height="100%" viewBox="0 0 116 116" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

				<g id="icon_git">

					<path d="M80.541,120.974l-44.739,0l0,-4.978l7.378,0c0,0 0.273,-2.768 0.273,-4.293c0,-1.367 -0.049,-4.983 -0.078,-9.782c-15.999,3.475 -19.375,-7.711 -19.375,-7.711c-2.616,-6.646 -6.387,-8.415 -6.387,-8.415c-5.223,-3.566 0.395,-3.496 0.395,-3.496c5.773,0.406 8.81,5.929 8.81,5.929c5.131,8.789 13.464,6.25 16.741,4.777c0.523,-3.714 2.009,-6.25 3.651,-7.687c-12.772,-1.451 -26.201,-6.388 -26.201,-28.429c0,-6.278 2.243,-11.416 5.922,-15.434c-0.593,-1.455 -2.567,-7.306 0.565,-15.222c0,0 4.827,-1.547 15.816,5.896c4.587,-1.278 9.509,-1.913 14.4,-1.938c4.887,0.025 9.805,0.66 14.399,1.938c10.982,-7.443 15.802,-5.896 15.802,-5.896c3.139,7.916 1.165,13.767 0.576,15.222c3.686,4.018 5.911,9.156 5.911,15.434c0,22.098 -13.45,26.96 -26.261,28.383c2.062,1.776 3.902,5.286 3.902,10.65c0,7.691 -0.071,13.895 -0.071,15.781c0,1.539 0.17,4.293 0.17,4.293l8.401,0l0,4.978Z"/>
				</g>

			</svg>

	</cbutton>


</template>

<script>

import cbutton from '~/components/Button.vue';

export default {
	name: 'c-github',
	data(){
		return {
			link : 'https://github.com/k-flynn-webdev',
			title : 'Github',
		}
	},
	components: {
		cbutton,
	},
}

</script>

<style>
</style>
