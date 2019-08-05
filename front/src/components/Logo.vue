<template>

	<g-link class="top-left logo" to="/">

		<svg width="100%" height="100%" viewBox="0 0 66 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

			<g id="kube-icon">
				<path class="colour-fill" d="M20.65,99.348l-20.548,-12.434l0,-66.355l32.898,-19.907l32.898,19.907l0,66.355l-20.548,12.434l-12.35,-7.473l-12.35,7.473Z"/>
				<path class="colour-fill-pop" d="M65.898,20.559l0,66.355l-20.548,12.434l-12.35,-7.473l-12.35,7.473l-20.548,-12.434l0,-66.355l32.898,-19.907l32.898,19.907Zm-64.796,0.564l0,65.227l19.548,11.829l11.832,-7.16l0.163,-0.079l0.175,-0.049l0.18,-0.016l0.18,0.016l0.175,0.049l0.163,0.079l11.832,7.16l19.548,-11.829l0,-65.227l-31.898,-19.302l-31.898,19.302Z"/>
				<path class="colour-fill-pop" d="M33,13.923l21.932,13.271l0,53.084l-10.966,6.636l-10.966,-6.636l-10.966,6.636l-10.966,-6.636l0,-53.084l21.932,-13.271Z"/>
				<path class="colour-fill" d="M33,40.465l0,39.813l-10.966,6.636l-10.966,-6.636l0,-53.084l21.932,-13.271l0,26.542Z" style="fill-opacity:0.5;"/>
			</g>

		</svg>

	</g-link>

</template>

<script>

export default {
	name: 'clogo',
}

</script>

<style>

:root {
	--icon : 2rem;
}

.top-left {
	position: absolute;
	top: var(--margin);
	left: var(--margin);
}

#kube-icon {
	position: absolute;
}

.logo {
	width: 3.5rem;
}

.logo-social {
	display: inline-block;
	height: var(--icon);
	width: var(--icon);
	margin: .3rem;
	border-radius: .4rem; 
	border: 2px solid var(--colour-pop);
}
</style>
