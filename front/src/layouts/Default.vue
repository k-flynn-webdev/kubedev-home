<template>

	<div class="text-center">

		<div class="column">

			<clogo ref="logo_btn"></clogo>

			<div class="nav-break" v-on:click=onClick></div>

			<slot></slot>

			<div class="social-bar">

				<div class="screen-bar text-right">

					<cgithub></cgithub>
					<clinkedin></clinkedin>
					<ccv></ccv>
					<ctwitter></ctwitter>
					<cyoutube></cyoutube>
					<cinstagram></cinstagram>

				</div>

			</div>

			<cavailable></cavailable>

		</div>

	</div>

</template>

<static-query>
	query {
		metaData {
			siteName
		}
	}
</static-query>

<script>


// adding global style ..
require('@/assets/style/reset.css');
require('@/assets/style/colour.css');
require('@/assets/style/text.css');
// require('@/assets/style/default.css');
// require('@/assets/style/anim.css');


import clogo from '~/components/Logo.vue';
import ctwitter from '~/components/Twitter.vue';
import cinstagram from '~/components/Instagram.vue';
import clinkedin from '~/components/Linkedin.vue';
import cyoutube from '~/components/Youtube.vue';
import cgithub from '~/components/Github.vue';
import ccv from '~/components/CV.vue';
import cavailable from '~/components/Available.vue';

export default {
	methods : {
		onClick : function(){
			this.$refs.logo_btn.$emit('logo');
		},
	},
	components: {
		clogo,
		ctwitter,
		cinstagram,
		clinkedin,
		cyoutube,
		cgithub,
		ccv,
		cavailable,
	},
}
</script>


<style>

:root {
	--safe : 1.5rem;
	--margin : 1rem;
}

#app {
	margin: 0 auto !important;
	max-width: 700px;
}

.column {
	position: relative;
	display: inline-block;
	width: 100%;
	min-height: 100vh;
	padding: var(--margin);
	padding-bottom: 0;	
}

.nav-break {
	height: 3.5rem;
	/*background-color: hsla(1,10%,90%,.2);*/
}

.social-bar {
	display: inline-block;
	width: 100%;
	height: 2rem;
	animation: 2s anim-fade-in ease-in-out;
}

@keyframes anim-fade-in {
	0% { 
		opacity: 0; 
	}
	100% { 
		opacity: 1; 
	}
}


.screen-bar {
	margin-right: var(--margin);
	position: absolute;
	top: var(--margin);
	left: var(--margin);
	right: var(--margin);
}


</style>
