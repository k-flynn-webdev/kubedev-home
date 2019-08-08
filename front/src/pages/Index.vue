<template>
	<Layout>

		<div class="index" v-bind:class="{ 'show' : state.show }">

			<section class="text-center">
				
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


			</section>


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

			<!-- </div> -->

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
	data() {
		return {
			state : {
				show : false,
			},
		};
	},		
	components: {
		cprofile,
		csection,
	},
	methods : {
		page_show : function(){
			this.state.show = true;
		},
	},
	mounted(){
		this.$root.$on('intro-complete', this.page_show );
	},
}

</script>

<style>
/*
.index {
	opacity: 0;
	transform: translateY(2.5rem);
	transition: 1.5s;
}
.show {
	opacity: 1;
	transform: translateY(0);
}*/

</style>
