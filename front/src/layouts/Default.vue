<template>
	<div class="layout">

		<clogo></clogo>

		<div class="social-bar">
			
			<ctwitter></ctwitter>
			<cinstagram></cinstagram>
			<cgithub></cgithub>
			<clinkedin></clinkedin>

		</div>

		<div class="nav-break"></div>

		<!-- <header class="header"> -->



			<!-- <strong>
				<g-link to="/">{{ $static.metaData.siteName }}</g-link>
			</strong>
			<nav class="nav">
				<g-link class="nav__link" to="/">Home1</g-link>
				<g-link class="nav__link" to="/about">About</g-link>
			</nav> -->

		<!-- </header> -->

		<slot/>

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
import clinkedin from '~/components/LinkedIn.vue';
import cgithub from '~/components/GitHub.vue';

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


.social-bar {
	display: inline-block;
	margin-left: 4.75rem;
}


.nav-break {
	height: 2rem;
}

.layout {
	/*min-width: 100%;*/
	/*min-height: 100%;*/
	padding: var(--margin);
	padding-bottom: 0;

	/*background-color: green;*/
	/*height: 50%;*/
	/*max-width: 60rem;*/
	/*margin: 0 auto;*/
	/*padding: var(--safe);*/
	/*padding-bottom: 0;*/
}

.header {
	display: block;
	margin-top: var(--margin);
	background-color: red;
/*display: flex;*/
/*justify-content: space-between;*/
/*align-items: center;*/
/*margin-bottom: 20px;*/
/*height: 80px;*/
}

/*.nav__link {
	margin-left: 20px;
}*/
</style>
