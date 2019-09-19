<template>

	<div class="page-bottom">
		<div 
			class="anim-6 text-center alert"
			v-bind:class="{ 'alert-display' : available }" >
				<span class="content text text-bold colour-fill-pop"> 
					Available for work 
				</span>
		</div>
	</div>

</template>

<script>

import user from '~/data/user.js';

export default {
	name: 'c-youtube',
	data(){
		return {
			available : false,
			delay : 3000,
		}
	},
	methods : {
		init : function(){
			let self = this;
			setTimeout( function(){
				self.available = user.available;
			}, self.delay);
		},
	},
	mounted(){
		this.init();
	}
}

</script>

<style>

.anim-6{
	transition: .66s cubic-bezier(0.35, 0.025, 0.3, 1.1);
}

.alert.alert-display{
	opacity: 1;
	transform: translateY(.1rem);
}

.alert{
	opacity: 0;
	transform: translateY(10rem);
}

.alert .content{
	border-radius: .5rem;
	border: 2px solid var(--colour-accent);
	padding: .1rem .5rem;
}

.page-bottom{
	position: absolute;
	bottom: 1rem;
	left: 0;
	width: 100%;
	overflow: hidden;
	padding: .5rem;
}

</style>
