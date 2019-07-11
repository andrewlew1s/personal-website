<template>
	<div class="about" >

		<div class ="about__textbox" >
			<img class="about__pic" alt="me!" src="../assets/me.png"/>
			<h2 class="about__">Results Orientated <br> Professional Development </h2>

			<span class="about__textbox__description">I'm a Senior @Claremont McKenna College majoring in Computer Science @Harvey Mudd College. Current Blockchain Developer @Adventure Corporation, CA USA. Paid Web Developer at Holistics Web Dev Team, UK. Past robotics researcher for MITLincolnLabs & HMC.</span>
		</div>

	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style lang="scss">

.about {

	display: flex;
	flex-direction: row;
	align-items: center;

	&__pic {
		border-radius: 50%;
		width: 120px;
		height: 120px;
		margin-left: 30rem;
	}

	&__textbox {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		&__description {
			margin-top: 10rem;
			margin-left: 3rem;
			margin-right: 3rem;
			padding: 1rem;
		}

	}
}

// @media only screen and (max-width: 800px) {}


</style>



