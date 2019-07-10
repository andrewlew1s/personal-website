<template>
	<div class="landing">
		<div >
			<h1 class="landing__centered">Andrew Lewis</h1>
			<img class="landing__gif" alt="This is an animated gif" src="../assets/circle.gif">
		</div>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
			<p>CONTENT</p>
	</div>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style lang="scss">

.landing {

	border: 2rem white solid;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;


	&__gif {

		max-width: 100%;
		overflow: hidden;
		object-fit: contain;

	}

	&__centered {

		opacity: 0.7;
		position: absolute;
		color: white;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -40%);
		z-index: 1;

	}

}

@media only screen and (max-width: 800px) {

	.landing__centered {
		top: 28%;
		transform: translate(-50%, 50%);
		font-size: x-large;
	}

}

@media only screen and (max-width: 500px) {

	.landing__centered {
		top: 13%;
		transform: translate(-50%, -10%);
		font-size: small;
	}

}




</style>



