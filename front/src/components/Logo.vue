<template>

	<g-link 
		to="/"
		class="top-left logo">

		<svg v-on:click=onClick width="100%" height="100%" viewBox="0 0 81 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

			<path id="icon_bg" class="colour-fill" d="M29.328,86.848l-24.156,-14.446l0,-49.029l34.943,-20.893l34.943,20.893l0,49.029l-24.021,14.366l-10.924,-6.47l-10.785,6.55Z" />

			<path ref="icon_arrow" id="arrow" class="colour-fill-pop" d="M38.406,12.675l2,-11.681l2,11.682l-2,3.246l-2,-3.247Z" />

			<path ref="icon_explode_0" id="explode_0" class="colour-fill-pop" d="M40.405,66.711l2.499,1.495l-2.499,1.54l-2.501,-1.54l2.501,-1.495Z" />


			<!-- <path class="colour-fill-pop" d="M40.115,15.906l22.997,13.754l0.003,38.239l-12.078,7.221l-10.922,-6.468l-10.787,6.549l-12.213,-7.304l0,-38.239l12.91,-7.719l10.09,-6.033Z" /> -->
<!-- 
			<polygon 
				id="icon_shade" 
				ref="icon_anim" 
				class="colour-fill" 
				points="40.1 43.4, 40.1 68.7, 29.3 75.2, 17.1 67.9, 17.1 29.7, 40.1 43.4" 
				style="fill-opacity:0.7;"></polygon> -->

		</svg>

	</g-link>

</template>

<script>

// let logo_aniamtion = 



export default {
	name: 'clogo',
	data() {
		return {
			logo_anim : '',
			logo_arrow : '',
		};
	},	
	methods : {
		onClick : function(){
			console.log('clicked');
			this.logo_arrow.play();

			// this.logo_arrow.seek(this.logo_arrow.duration * 70 / 100);


			// this.logo_anim.play();
		},

		setup_arrow : function(){
			let arrow = this.$refs.icon_arrow;
			let explode = this.$refs.icon_explode_0;

			console.log(explode);

			let timeline = this.$anime.timeline({ autoplay : false, play : false, loop : false });



			timeline.add({
				targets: arrow,
				translateY: 55,
				opacity: [
					{ value : 1 , duration: 250 },
					{ value : 0 },
				],
				duration: 300,
				delay : 0,
				easing: 'linear'
			})

			timeline.add({
				targets: explode,
				d: [
					{ value : 'M40.405,66.711l2.499,1.495l-2.499,1.54l-2.501,-1.54l2.501,-1.495Z' },
					{ value : 'M40.408,45.164l37.996,22.725l-37.997,23.405l-38.003,-23.408l38.004,-22.722Z' },
				],
				opacity: [
					{ value : 0, duration : 130 },
					{ value : 1, duration : 150 },
					{ value : 0 },
				],
				easing: 'easeInCirc',
				delay: 0,
				duration: 400,
			}, '-=310')

			// timeline.add({
			// 	targets: explode,
			// 	points: [
			// 	],
			// 	duration: 1000,
			// 	delay : 0,
			// 	easing: 'easeInCirc'
			// })


			this.logo_arrow = timeline;

		},


		setup_anim : function(){
			let targets = this.$refs.icon_anim;

			console.log(targets);

			let timeline = this.$anime.timeline({ autoplay : true, play : true, loop : false });

			timeline.add({
				targets: targets,
				points: [
				],
				easing: 'linear',
				// duration: 3000,
			})

			// timeline.add({
			// 	targets: targets,
			// 	translateX: 300,
			// 	duration: 1000,
			// 	delay : 0,
			// 	easing: 'easeOutExpo'
			// })
			// timeline.add({
			// 	targets: targets,
			// 	translateX: 0,
			// 	duration: 500,
			// 	delay : 0,
			// 	easing: 'easeOutExpo'
			// })

			this.logo_anim = timeline;
		},
	},
	mounted() {
		this.setup_arrow();
		// this.setup_anim();
	},
}

</script>

<style>

:root {
	--icon : 2rem;
}

#icon_bg {
	stroke: var(--colour-accent);
	stroke-width: 2px;
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
