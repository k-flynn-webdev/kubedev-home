<template>

	<div class="text-center">

		<div class="column">

			<clogo></clogo>

			<div class="nav-break"></div>

			<slot/>

			<div class="social-bar">

				<div class="screen-bottom text-center">

					<ctwitter></ctwitter>
					<cinstagram></cinstagram>
					<cgithub></cgithub>
					<clinkedin></clinkedin>

				</div>

			</div>

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
import cgithub from '~/components/Github.vue';

export default {
	components: {
		clogo,
		ctwitter,
		cinstagram,
		clinkedin,
		cgithub,
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
	height: 5rem;
}

.social-bar {
	display: inline-block;
	width: 100%;
	height: 2rem;
}
.screen-bottom {
	position: absolute;
	bottom: var(--margin);
	left: var(--margin);
	right: var(--margin);
}


</style>
