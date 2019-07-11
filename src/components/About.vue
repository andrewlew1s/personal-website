<template>
	<div class="about" >
		<div class ="about__textbox" >
			<img class="about__pic" alt="me!" src="../assets/me.png"/>
			<h2 class="about__">Results Orientated <br> Professional Development </h2>
			<div class="about__svgs">
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/firebase.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/vue.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/node.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/java.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/python.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/react.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/aws.svg"/>
			</div>
			<span class="about__textbox__description">I'm a Senior at Claremont McKenna College majoring in Computer Science at Harvey Mudd College.
				<br> Current Blockchain Developer (Ethereum) at Adventure Corporation, CA USA.
				<br> Paid Web Developer at Holistics Web Dev Team, UK.
				<br> Past robotics researcher for MITLincolnLabs & HMC.
			</span>
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
		margin-top: 2rem;
	}

	&__textbox {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		&__description {
			margin-top: 2rem;
			margin-left: 3rem;
			margin-right: 3rem;
			padding: 1rem;
			font-family: monospace;
		}

	}

	&__svgs {
		display: flex;
		flex-direction: row;

		&__svg {
			margin-top: 3rem;
			max-height: 6vh;
			padding: .1rem;
		}
	}
}

// @media only screen and (max-width: 800px) {}


</style>



