<template>
	<div class="about" >
		<div class ="about__textbox" >
			<img class="about__pic" alt="me!" src="../assets/me.png"/>
			<h2 class="about__title">Results Orientated <br> Full Stack Development </h2>
			<div class="about__svgs">
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/firebase.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/vue.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/node.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/java.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/python.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/react.svg"/>
				<img class="about__svgs__svg" alt="im an svg!" src="../assets/aws.svg"/>
			</div>
			<span class="about__textbox__description">Senior at Claremont McKenna College majoring in Computer Science at Harvey Mudd College.
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

	&__pic {
		border-radius: 50%;
		width: 160px;
		height: 160px;
		margin-left: 30rem;
		margin-top: 3rem;
	}

	&__title {
		font-family: monospace;
		margin-right: 20rem;

	}

	&__textbox {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		margin-bottom: 6rem;
		font-size: 1.2em;

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
		margin-left: 1.5rem;

		&__svg {
			margin-top: 3rem;
			max-height: 7vh;
			margin: 1rem;
		}
	}
}

@media only screen and (max-width: 1100px) {

.about {

	&__textbox {
		font-size: 1em;
	}

	&__svgs {

		&__svg {
			max-height: 3vh;
			margin: 1rem;
		}
	}
}


}


@media only screen and (max-width: 450px) {

.about {


	&__svgs {

		margin-left: 0;

		&__svg {
			max-height: 4vh;
			margin: .1rem;
		}
	}

	&__pic {
		border-radius: 50%;
		width: 70px;
		height: 70px;
		margin-left:12rem;
		margin-top: 0rem;
		margin-bottom: 1rem;
	}

	&__title {
		margin-right: 0;
		margin-left: .3rem;
		font-size: x-large;
	}

	&__textbox {
		margin-bottom: 6rem;
		width: auto;

		&__description {
			margin-top: 2rem;
			margin-left: 3rem;
			margin-right: 3rem;
			padding: 1rem;
			font-family: monospace;

		}
	}

}
}

</style>



