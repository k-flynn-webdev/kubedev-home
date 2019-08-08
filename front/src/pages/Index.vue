<template>
	<Layout>

		<br>

		<div class="text-center">

			<p class="poster-small text-light colour-fill-pop"> 	
				kubedev
			</p>

			<br>

			<p class="text colour-fill-pop"> 
				Busy building apps and apis for the web and mobile.
			</p>

			<p class="text colour-fill-pop"> 
				Have a project, idea or problem you'd like to discuss?

				<br>

				<a href="mailto:hi@kubedev.co.uk">
					hi@kubedev.co.uk
				</a>

				<!-- <p class="text colour-fill-pop"> Interested in helping games studios with unique websites. </p> -->

			</p>


			<div style="height: 6rem;"></div>


			<csection> 

				<template slot="title">
					<span class="colour-fill-pop text text-bold "> Skills </span>
					<span class="colour-fill-pop text"> (full-stack) </span>
				</template>


				<div class="colour-fill-pop text">

					<p> NodeJS . VueJS . Javascript . Python . C# </p>
					<p> Animation . Games . Web </p>

				</div>

			</csection>

		</div>

	</Layout>
</template>

<script>

import cprofile from '~/components/Profile.vue';
import csection from '~/components/Section.vue';

export default {
	metaInfo: {
		title: 'Bye!'
	},
	components: {
		cprofile,
		csection,
	},
}

</script>

<style>

</style>
