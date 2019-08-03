<template>
	
	<div class="profile colour-fill-pop">

		<div style="display: table-row-group;">
			
			<div style="display: table-row;">

				<div class="content-cell">

					<div class="text-center" style="position: relative;">

						<g-image class="profile-shot" src="~/assets/images/profile-shot-01.png" width="500"/>

						<p class="text location"> London, UK </p>

					</div>

				</div>

				<div class="content-cell">

					<div class="text-center text-content">

						<p class="text"> About </p>

						<p class="text-small">

							Passionate about solving problems, after many years of working in games as a technical animator I've collected a unique combination of skills.

						</p>

					</div>

				</div>

			</div>

		</div>


		<!-- <div class="column-shot text-center"> -->
	
		<!-- <div class="text-left column-half">

			<div class="text-center cell">

				<g-image class="profile-shot" src="~/assets/images/profile-shot-01.png" width="500"/>

				<p class="text"> London, UK </p>

			</div>

		</div>


		<div class="text-right column-half">

			<div class="text-center cell">

				<g-image class="profile-shot" src="~/assets/images/profile-shot-01.png" width="500"/>

				<p class="text"> London, UK </p>

			</div>

		</div> -->


		<!-- </div> -->

		<!-- <div class="column-content text-center">
			
			<p class="text"> About </p>

			<p class="text-small">

				Passionate about solving problems, after many years of working in games as a technical animator I've collected a unique combination of skills.

			</p>

			<p class="text"> Skills </p>

			<p class="text-small">
				
				Maya, 3d Animation, C#, Python, Node, Express, Javascript, CSS, HTML, VueJS

			</p> -->

		<!-- </div> -->



	</div>

</template>

<script>
export default {
	name: 'c-profile',
}
</script>

<style>

.content-cell {
	height: 5rem;
	display: table-cell;
	vertical-align: top;
	padding: .5rem;
	position: relative;
}

.profile {
	display: table;
	border-collapse: collapse;
	margin: 0 auto;
	padding: calc(var(--margin)*.5);
	max-width: 25rem;
	border: 1px solid var(--colour-pop);
	position: relative;
}

.text-content {
	/*padding-top: 10%;*/
}

.profile .profile-shot {
	max-width: 8rem;
	border-radius: 100%;
	overflow: hidden;
	border: 1px solid black;
}

@media only screen and (max-width: 500px) {
	.profile .profile-shot {
		max-width: 5.5rem;
	}
}

.profile .location {

}

</style>
