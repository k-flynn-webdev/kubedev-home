<template>

	<a class="logo-button anim-fast" v-bind:href=link v-bind:title=title target="_blank" rel="noopener">

		<div class="hover-flip anim-slow">
			<slot></slot>
		</div>

		<div class="logo-content colour-bg-accent anim-slow"></div>

		<svg class="logo-highlight" width="100%" height="100%" viewBox="0 0 116 116" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/">

			<polyline points="0,0 116,0" class="poly-line anim-slow" style="transform-origin:top left;" />
			<polyline points="116,0 116,116" class="poly-line anim-slow" style="transform-origin:top right;" />
			<polyline points="116,116 0,116" class="poly-line anim-slow" style="transform-origin:bottom right;"/>
			<polyline points="0,116, 0,0" class="poly-line anim-slow" style="transform-origin:bottom left;"/>

		</svg>

	</a>

</template>

<script>

export default {
	name: 'c-button',
	props: {
		link : String,
		title : String,
	},
}

</script>

<style>

.anim-fast {
	transition: .2s cubic-bezier(0.35, 0.025, 0.3, 1.1);
}	
.anim-slow {
	transition: .5s cubic-bezier(0.35, 0.025, 0.3, 1.1);
}

.hover-flip svg{
	fill : var(--colour-pop);
	transition: 1.5s cubic-bezier(0.35, 0.025, 0.3, 1.1);
}
.hover-flip:hover svg{
	transform: scale(1.33);
	fill : var(--colour-dark);
}

.logo-highlight {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}

.poly-line {
	fill: none;
	stroke: var(--colour-pop);
	stroke-width: 2rem;
	transform: scale(0);
	/*transition: .5s cubic-bezier(0.35, 0.025, 0.3, 1.1);*/
}

.logo-button:hover .poly-line {
	transform: scale(1);
}


.logo-button {
	magin: 0 !important;
	padding: 0 !important;
	display: inline-block;
	vertical-align: bottom;
	height: var(--icon);
	width: var(--icon);
	margin: .3rem;
	border-radius: .4rem; 
	border: 2px solid var(--colour-pop);
	position: relative;
	overflow: hidden;
	transform: scale(1);
}

.logo-button:hover {
	transform: scale(1.25);
}

.logo-content {
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	transform: scale(0);
	border-radius: 100%;
	/*transition: .5s cubic-bezier(0.35, 0.025, 0.3, 1.1);*/
}

.logo-button:hover .logo-content {
	transform: scale(1.5);
}

</style>
