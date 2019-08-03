<template>
	<Layout>


		<!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

<!-- 		<p class="home-links">
			<a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
			<a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
		</p> -->

			<div class="text-center">

				<br>

				<p class="poster-small text-light colour-fill-pop"> 	kubedev
				</p>

				<br>

				<p class="text colour-fill-pop"> 
					Busy building apps for the web and mobile.
				</p>

				<p class="text colour-fill-pop"> 
					Say hello at 

					<a href="mailto:hello@kube.dev">
						hi@kube.dev
					</a>

				</p>
				
				<br>
				<br>
				
				<cprofile></cprofile>
					
			</div>


	</Layout>
</template>

<script>

import cprofile from '~/components/Profile.vue';

export default {
	metaInfo: {
		title: 'Bye!'
	},
	components: {
		cprofile,
	},
}

</script>

<style>


/*.main {
	margin: 1rem;
}*/
</style>
