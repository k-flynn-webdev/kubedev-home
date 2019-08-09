<template>

	<g-link 
		to="/"
		ref="logo"
		class="top-left logo"
		v-bind:class="{ 'intro' : state.intro, 'hide' : state.hide }">

		<svg v-on:click=onClick width="100%" height="100%" viewBox="0 0 81 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">

			<g id="intro_g" ref="intro_g">

				<path id="intro_cube" ref="intro_cube" d="M40.882,78.23l-29.979,-17.845l0,-42.067l29.981,-17.925l29.98,17.925l0,42.067l-29.982,17.845Z" style="fill: hsla(1,100%,100%,0);" />

				<path id="intro_top" ref="intro_top" d="M40.882,36.378l-29.979,-16.843l0,-1.217l29.981,-17.925l29.98,17.925l0,1.343l-29.982,16.717Z" style="fill: hsla(1,100%,100%,0);" />

				<path id="cube_flash" ref="cube_flash" d="M42.296,102.154l-41.412,2.957l0,-105l40.313,2.813l39.687,-2.813l0,105l-38.588,-2.957Z" style="fill: hsla(1,100%,100%,0);" />

			</g>

			<g id="inside_g" ref="inside_g">

				<path id="final_cube" ref="final_cube" d="M40.884,23.567l22.997,13.753l0.003,38.239l-12.078,7.222l-10.922,-6.468l-10.788,6.548l-12.212,-7.303l0,-38.239l12.91,-7.719l10.09,-6.033Z" style="fill: hsla(1,100%,100%,0);" />

				<path id="final_shade" ref="final_shade" d="M40.884,51.074l0,25.239l-10.788,6.548l-12.212,-7.303l0,-38.239l23,13.755Z" style="fill: hsla(1,100%,100%,0);" />

			</g>

			<path ref="bg_cube" class="icon_stroke_pre" d="M30.096,95.584l-24.156,-14.446l0,-49.029l34.944,-20.893l34.943,20.893l0,49.029l-24.021,14.367l-10.924,-6.47l-10.786,6.549Z" style="fill: hsla(1,100%,100%,0);" />


<!-- 			<g class="logo_static">

				<path d="M40.884,23.567l22.997,13.753l0.003,38.239l-12.078,7.222l-10.922,-6.468l-10.788,6.548l-12.212,-7.303l0,-38.239l12.91,-7.719l10.09,-6.033Z" />

				<path d="M40.884,51.074l0,25.239l-10.788,6.548l-12.212,-7.303l0,-38.239l23,13.755Z" />

				<path d="M30.096,95.584l-24.156,-14.446l0,-49.029l34.944,-20.893l34.943,20.893l0,49.029l-24.021,14.367l-10.924,-6.47l-10.786,6.549Z" />

			</g> -->


		</svg>

	</g-link>

</template>

<script>



export default {
	name: 'clogo',
	data() {
		return {
			logo_anim : '',
			logo_anim_reset : '',
			state : {
				intro : true,
				hide : false,
				playing : false,
			},
		};
	},	
	methods : {

		intro : function(){
			let self = this;
			setTimeout( function(){
				self.onClick();
			}, (Math.random() * 1.4) * 1000 );
		},

		anim_finished : function(){
			this.state.hide = true;

			let self = this;
			setTimeout( function(){
				self.state.hide = false;
			}, 1 * 1000 );

			if( this.state.intro ){
				
				this.$root.$emit('intro-complete');

				setTimeout( function(){
					self.state.intro = false;
				}, .4 * 1000 );

			}
			if( this.state.playing ){
				this.state.playing = false;
			}
		},

		onClick : function(){
			if( !this.state.playing ){
				this.reset_anim();
				let self = this;
				setTimeout( function(){
					self.logo_anim.play();
				} ,10);
			}
			// console.log( this.$anime.running.length );
		},

		reset_anim : function(){
			this.$refs.bg_cube.classList.remove("icon_stroke_post");
			let colour_reset = 'hsla(1,1%,100%,0)';
			this.$refs.intro_cube.style.fill = colour_reset;
			this.$refs.intro_top.style.fill = colour_reset;
			this.$refs.cube_flash.style.fill = colour_reset;
			this.$refs.final_cube.style.fill = colour_reset;
			this.$refs.final_shade.style.fill = colour_reset;
		},

		setup_reset_anim : function(){

			let intro_g = this.$refs.intro_g;
			let inside_g = this.$refs.inside_g;

			let intro_cube = this.$refs.intro_cube;
			let intro_top = this.$refs.intro_top;
			let cube_flash = this.$refs.cube_flash;
			let final_cube = this.$refs.final_cube;
			let final_shade = this.$refs.final_shade;

			let timeline = this.$anime.timeline({ autoplay : false, play : false, loop : false });

			timeline.add({
				targets: [ intro_cube, intro_top, cube_flash, final_cube, final_shade ],
				fill: 'hsla(1,1%,100%,0)',
				easing: 'easeOutQuart',
				duration: 1000,
			}, 500)

			this.logo_anim_reset = timeline;

		},

		setup_anim : function(){

			let intro_g = this.$refs.intro_g;
			let intro_cube = this.$refs.intro_cube;
			let intro_top = this.$refs.intro_top;

			let cube_flash = this.$refs.cube_flash;
			let cube_flash_start = this.$refs.intro_cube.getAttribute("d");
			let cube_flash_end = this.$refs.cube_flash.getAttribute("d");

			let inside_g = this.$refs.inside_g;
			let final_cube = this.$refs.final_cube;
			let final_shade = this.$refs.final_shade;

			let bg_cube = this.$refs.bg_cube;
			let self = this;

			let time_cube = 		[50,750];
			let time_cube_top = 	[100,600];
			let time_flash = 		[600,500];
			let time_final_cube = 	[800,1000];

			let colour_off = 'hsla(1,1%,100%,0)';

			let timeline = this.$anime.timeline({ autoplay : false, play : false, loop : false });

			// reset all items //
			timeline.add({
				targets: [intro_g , inside_g],
				translateY: 0,
				easing: 'linear',
				duration: 1,
				begin : function(){
					self.state.playing = true;
				},

			})
			timeline.add({
				targets: [ intro_cube, intro_top, cube_flash, final_cube, final_shade, bg_cube ],
				fill: colour_off,
				easing: 'linear',
				duration: 1,
			})


			timeline.add({
				targets: intro_g,
				translateY: -5,
				easing: 'linear',
				duration: 1,
			})
			timeline.add({
				targets: intro_g,
				translateY: 20,
				easing: 'easeOutCubic',
				duration: time_cube[1],
			})
			timeline.add({
				targets: intro_cube,
				fill: [ 'hsla(1,1%,40%,.3)', 'hsla(1,1%,40%,.4)', 'hsla(1,1%,85%,.3)' ],
				easing: 'easeOutCubic',
				duration: time_cube[1],
			}, time_cube[0] )
			timeline.add({
				targets: intro_top,
				fill: [ 'hsla(1,1%,30%,.33)', 'hsla(1,1%,100%,1)' ],
				easing: 'linear',
				duration: time_cube_top[1],
			}, time_cube_top[0])

			timeline.add({
				targets: cube_flash,
				d: cube_flash_start,
				easing: 'linear',
				duration: 1,
			}, time_flash[0] - 10)

			timeline.add({
				targets: cube_flash,
				d: cube_flash_end,
				fill: [
					{ value : 'hsla(1,100%,100%,1)', duration: 175},
					{ value : colour_off },
				],
				easing: 'easeOutCubic',
				duration: time_flash[1],
			}, time_flash[0])

			timeline.add({
				targets: [ intro_cube, intro_top ],
				fill: colour_off,
				easing: 'linear',
				duration: 1,
			}, time_final_cube[0] - 1)
			timeline.add({
				targets: [ final_cube, final_shade ],
				fill: 'hsla(1,1%,100%,1)',
				easing: 'easeOutCubic',
				duration: 1,
				complete: function(){
					self.$refs.bg_cube.classList.add("icon_stroke_post");
				},
			}, time_final_cube[0] - 30)
		
			timeline.add({
				targets: inside_g,
				translateY: 10,
				easing: 'easeOutCubic',
				duration: 1,
			}, time_final_cube[0] - 10)


			timeline.add({
				targets: inside_g,
				translateY: 0,
				easing: 'easeOutCubic',
				duration: time_final_cube[1],
			}, time_final_cube[0])

			timeline.add({
				targets: final_shade,
				fill: 'hsla(1,1%,50%,1)',
				easing: 'easeOutCubic',
				duration: time_final_cube[1],
				endDelay : 200,
				complete : function(){
					self.anim_finished();
				},
			}, time_final_cube[0])

			this.logo_anim = timeline;
		},

	},
	mounted() {
		this.setup_anim();
		this.setup_reset_anim();
		this.$on('logo', this.onClick );

		this.intro();
	},
}

</script>

<style>

:root {
	--icon : 2rem;
}

.icon_stroke_pre {
	transition: .3s;
	stroke: transparent;
	stroke-width: 2px;
}
.logo .icon_stroke_post {
	stroke: var(--colour-accent);
	stroke-width: 2px;
}

.top-left {
	position: absolute;
	top: var(--margin);
	left: var(--margin);
}

.logo {
	opacity: 1;
	transition: all .1s, opacity .5s;
	width: 3.5rem;
}

.intro.logo {
	width: 50%;
	position: absolute;
	left: 25%;
	top: 10%;
}

.logo.hide {
	opacity: 0;
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
