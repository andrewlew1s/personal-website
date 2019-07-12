<template>
	<div class="features" >
		<div class="features__cards">
			<b-card-group deck>
				<b-card class="features__cards__content">
					<img class="features__cards__content__svg" alt="im an svg!" src="../assets/web.svg"/>
					<h4 class="features__cards__content__header">Front-End</h4>
					<b-card-text>HTML5 & CSS</b-card-text>
					<b-card-text>Javascript</b-card-text>
					<b-card-text>Vue</b-card-text>
					<b-card-text>React</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<img class="features__cards__content__svg" alt="im an svg!" src="../assets/network.svg"/>
					<h4 class="features__cards__content__header">Back-End</h4>
					<b-card-text>Express</b-card-text>
					<b-card-text>Python Flask</b-card-text>
					<b-card-text>Firebase Cloud Functions</b-card-text>
					<b-card-text>Java</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<img class="features__cards__content__svg" alt="im an svg!" src="../assets/database.svg"/>
					<h4 class="features__cards__content__header">Databases</h4>
					<b-card-text>MySQL</b-card-text>
					<b-card-text>Firebase RT & Cloud Firestore</b-card-text>
					<b-card-text>AWS DynamoDB</b-card-text>
				</b-card>

				<b-card class="features__cards__content">
					<img class="features__cards__content__svg" alt="im an svg!" src="../assets/cloud.svg"/>
					<h4 class="features__cards__content__header">Deployment</h4>
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

			&__svg {
				max-height: 4vh;
				margin-bottom: 1rem;
				}

			&__header {
				margin-bottom: 1rem;
			}

		}
	}
}

@media only screen and (max-width: 850px) {
	.features {

		&__cards {
			margin-top: 8rem;
			margin-left: 1rem;
			margin-right: 1rem;

			&__content {

				&__header {

					font-size: medium;
				}
			}
		}
	}
}



@media only screen and (max-width: 450px) {

	.features {

		height: 160vh;
		margin-top: 2rem;

		&__cards {

			font-size: x-small;
			margin-top: 4rem;

			&__content {

				&__svg {
				max-height: 3vh;
				margin-bottom: .5rem;
				}

				&__header {
					font-size: x-small;
					margin-bottom: 1rem;
				}
			}
		}
	}
}

</style>



