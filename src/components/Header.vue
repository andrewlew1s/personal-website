<template>
	<div class="header" >
		<div class ="header__textbox" >
			<span class="header__textbox__name">Andrew Lewis</span>
			<span class="header__textbox__title">Software Engineer</span>
			<b-button v-scroll-to="{el: '#scroll'}" class="header__textbox__button" variant="outline-info">See Projects</b-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">

.header {

		position: relative;
		background-repeat: no-repeat;
		object-fit: cover;
		height: 95vh;
		background-position: top;
		background-size: cover;
		background-image: linear-gradient(to right bottom, rgba(30, 32, 172, 0.7), rgba(50, 185, 219, 0.6)), url(../assets/circle.gif);
		clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);

		&__textbox {

			position: absolute;
			color: white;
			top: 50%;
			left: 50%;
			transform: translate( -50%, -50% );
			text-align: center;
			text-transform: uppercase;
			line-height: 1.3;

			&__title {
			font-size: 0.8rem;
			font-weight: 400;
			letter-spacing: 0.4rem;
			display: block;
			animation: rightIn 1.2s ease-out;
			animation-duration: 1.2s;
			animation-timing-function: ease-out;
			animation-delay: 0s;
			animation-iteration-count: 1;
			animation-direction: normal;
			animation-fill-mode: none;
			animation-play-state: running;
			animation-name: rightIn;
			margin-bottom: 2rem;

		}

		@keyframes rightIn {
			0% {
				opacity: 0;
				transform: translateX(5rem);
			}
			80% {
				transform: translateX(-0.5rem);
			}
			100% {
				opacity: 1;
				transform: translate(0);
			}
		}

		&__name {
			font-size: 1rem;
			font-weight: 400;
			letter-spacing: 0.6rem;
			display: block;
			animation: leftIn 1.2s ease-out;
			animation-duration: 1.2s;
			animation-timing-function: ease-out;
			animation-delay: 0s;
			animation-iteration-count: 1;
			animation-direction: normal;
			animation-fill-mode: none;
			animation-play-state: running;
			animation-name: leftIn;

		}

		@keyframes leftIn {
			0% {
				opacity: 0;
				transform: translateX(-5rem);
			}
			80% {
				transform: translateX(0.5rem);
			}
			100% {
				opacity: 1;
				transform: translate(0);
			}
		}

		}

}

@media only screen and (max-width: 450px) {

	.header {

		&__textbox {
			top: 50%;

			&__title {
				margin-bottom: 7rem;
			}

			&__name {
				margin-top: 8rem;
				letter-spacing: 0.3rem;
			}
		}
	}

}

@media only screen and (min-width: 1000px) {

	.header {

		&__textbox {
			top: 50%;

			&__title {
				margin-bottom: 2rem;
				font-size: small;
				letter-spacing: .3rem;
			}

			&__name {
				margin-top: 8rem;
				letter-spacing: 0.2rem;
			}
		}
	}
}

@media only screen and (min-width: 1500px) {

	.header {

		&__textbox {
			top: 45%;
		}
	}
}

</style>