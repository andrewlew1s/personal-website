<template>
	<div class="features" >
		<div class="features__cards">
			<b-card-group deck>
				<b-card class="features__cards__content">
					<h4>Front-End</h4>
					<b-card-text>HTML5 & CSS</b-card-text>
					<b-card-text>Javascript</b-card-text>
					<b-card-text>Vue</b-card-text>
					<b-card-text>React</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<h4>Server</h4>
					<b-card-text>Express</b-card-text>
					<b-card-text>Flask</b-card-text>
					<b-card-text>Firebase Cloud Functions</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<h4>Databases</h4>
					<b-card-text>MySQL</b-card-text>
					<b-card-text>Firestore</b-card-text>
					<b-card-text>DynamoDB</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<h4>Deployment</h4>
					<b-card-text>Express SSR on AWS EC2</b-card-text>
					<b-card-text>Firebase Hosting</b-card-text>
					<b-card-text>Amazon S3</b-card-text>
				</b-card>
			</b-card-group>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Features'
}
</script>

<style lang="scss">

.features {
	position: relative;
	background-repeat: no-repeat;
	object-fit: cover;
	height: 65vh;
	background-position: top;
	background-size: cover;
	background-image: linear-gradient(to top left, rgba(30, 32, 172, 0.7), rgba(50, 185, 219, 0.6)), url(../assets/featured.jpeg);
    transform: skewY(-5deg);
	margin-top: 10rem;

	&__cards {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 20rem;
		transform: skewY(5deg);

		&__content {
			text-align: center;
		}
	}

}

</style>



