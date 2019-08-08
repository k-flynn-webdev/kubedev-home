<template>

	<section class="text-center">

		<div class="bar-bottom">

			<span class="colour-bg-pop bar"></span>

			<span class="text colour-fill-pop section-title">
				<slot name="title"></slot>
			</span>

			<span class="colour-bg-pop bar"></span>

		</div>

		<slot></slot>

	</section>

</template>

<script>

export default {
	name: 'c-section',
}

</script>

<style>

.bar {
	display:inline-block;
	min-height:2px;
	width: 5rem;
	max-width: 15vw;
	transform: translateY(-.25rem);
	opacity: 0.33;
}

.bar-bottom {
	padding-bottom: 1rem;
}

.section-title {
	margin: 0 1.25rem;
}

section {
	margin: 2rem 0;
	padding: 2rem 0;
	opacity: 0.025;
	transition: 1s cubic-bezier(0.35, 0.025, 0.3, 1.1);
	transform: translateY(3rem);	
}


.show section {
	opacity: 1;
	transform: translateY(0);
}


section:nth-child(odd){
	/*background-color: hsla(1,1%,99%,.1);*/
}


section:nth-child(1){
	transition-delay: .5s;
}
section:nth-child(2){
	transition-delay: 1s;
}
section:nth-child(3){
	transition-delay: 2s;
}
section:nth-child(4){
	transition-delay: 3s;
}
section:nth-child(5){
	transition-delay: 4s;
}


</style>
