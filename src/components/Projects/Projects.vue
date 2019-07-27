<template>
	<div class="projects" >
		<h1 class="projects__title" id="scroll"> Projects </h1>
		<b-card-group deck class="projects__cards" >
			<b-card class="projects__cards__tokens"
				img-alt="Card Image"
				text-variant="white">
				<b-card-text class="projects__cards__tokens__title">
				ERC721 Token Development
				</b-card-text>	
				<token-modal />			
			</b-card>

			<b-card class="projects__cards__security"
				img-alt="Card Image"
				text-variant="white">
				<b-card-text class="projects__cards__security__title">
				Secure System in Java
				</b-card-text>
				<security-modal />
			</b-card>

			<b-card class="projects__cards__vpython"
				img-alt="Card Image"
				text-variant="white">
				<b-card-text class="projects__cards__vpython__title">
				VPython Game
				</b-card-text>
				<v-python-modal />
			</b-card>
		</b-card-group>

		<b-card-group deck>
			<b-card class="projects__cards__bizniz"
				img-alt="Card Image"
				text-variant="white">
				<b-card-text class="projects__cards__bizniz__title">
				Machine Learning Business Card Transcription
				</b-card-text>
				<m-l-modal />
			</b-card>
			<b-card class="projects__cards__roboto"
				img-alt="Card Image"
				text-variant="white">
				<b-card-text class="projects__cards__roboto__title">
				Robotics Research for Harvey Mudd & MITLincolnLabs
				</b-card-text>
				<robotics-modal />
			</b-card>
		</b-card-group>

	</div>
</template>

<script>
import TokenModal from './TokenModal.vue'
import SecurityModal from './SecurityModal.vue'
import MLModal from './MLModal.vue'
import RoboticsModal from './RoboticsModal.vue'
import VPythonModal from './VPythonModal.vue'

export default {
	name: 'Projects',
	components: {
		TokenModal,
		SecurityModal,
		MLModal,
		RoboticsModal,
		VPythonModal
    }
}
</script>

<style lang="scss">

.projects {
	text-align: center;
	margin-top: 10rem;
	margin-left: 1rem;
	margin-right: 1rem;

	&__title {
		font-family: monospace;
		margin-bottom: 2rem;
	}

	&__cards {
		margin: 1rem;
		min-height: 20vh;

		&__tokens {
			background-image: url('../../assets/eth.png');
			background-repeat: no-repeat;
			background-size: cover;
			overflow: hidden;

			&__title {
				font-size: x-large;
				font-weight: bold;
				text-shadow:
				1px 1px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			}
		}

		&__security {
			background-image: url('../../assets/security.png');
			background-repeat: no-repeat;
			background-size: cover;
			overflow: hidden;

			&__title {
				font-size: x-large;
				font-weight: bold;
				text-shadow:
				1px 1px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			}
		}

		&__bizniz {
			background-image: url('../../assets/bizniz.png');
			background-repeat: no-repeat;
			background-size: cover;
			overflow: hidden;
			min-height: 25vh;

			&__title {
				font-size: x-large;
				font-weight: bold;
				text-shadow:
				1px 1px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			}

		}

		&__roboto {
			background-image: url('../../assets/roboto.png');
			background-repeat: no-repeat;
			background-size: cover;
			overflow: hidden;

			&__title {
				font-size: x-large;
				font-weight: bold;
				text-shadow:
				1px 1px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			}
		}

		&__vpython {
			background-image: url('../../assets/vpython.png');
			background-repeat: no-repeat;
			background-size: cover;
			overflow: hidden;

			&__title {
				font-size: x-large;
				font-weight: bold;
				text-shadow:
				1px 1px 0 #000,
				-1px -1px 0 #000,
				1px -1px 0 #000,
				-1px 1px 0 #000,
				1px 1px 0 #000;
			}
		}

	}

}

</style>



