<template>
	<div class="footer" >
		<div class="footer__credit">
			<b-button class="footer__credit__license" variant="outline-primary" size="sm" v-b-tooltip.hover.left="'Card icons by Smashicons, www.flaticon.com, license: CC 3.0 BY. Other images from free image websites'">Citations</b-button>
			<b-button class="footer__credit__how" variant="outline-primary" size="sm" v-b-tooltip.hover.right="'On submission, the data is stored in a firebase collection. This triggers a firebase cloud function that pings a SendGrid API which sends me an email with your response.'">How does the form work?</b-button>
		</div>
		<b-card class="footer__form" bg-variant="dark">
			<b-form-group
			label-cols-lg="3"
			label="Get in touch!"
			label-class="font-weight-bold pt-0"
			class="mb-0">
			<b-form-group
				label-cols-sm="3"
				label="Name:"
				label-align-sm="right"
				label-for="nested-name">
			<b-form-input id="nested-name" v-model="name"></b-form-input>
			</b-form-group>

			<b-form-group
				label-cols-sm="3"
				label="Email:"
				label-align-sm="right"
				label-for="nested-email">
			<b-form-input id="nested-email" v-model="email"></b-form-input>
			</b-form-group>

			<b-form-group
				label-cols-sm="3"
				label="Message:"
				label-align-sm="right"
				label-for="nested-message">
			<b-form-textarea class="footer__form__message" id="nested-message" v-model="message"></b-form-textarea>
			</b-form-group>
			<b-button variant="outline-light" @click="submit">Submit</b-button>

			</b-form-group>
		</b-card>
		<div class="footer__flex">
			<a href="https://github.com/andrewlew1s" target="_blank" class="footer__flex__col">GitHub</a>
			<a href="" class="footer__flex__col">Resume</a>
			<a href="https://www.linkedin.com/in/andrew-lewis-84765b183/" target="_blank" class="footer__flex__col">LinkedIn</a>
		</div>
	</div>
</template>

<script>
import db from '@/firebase'

export default {
	name: 'Footer',
	data() {
		return {
			name: '',
			email: '',
			message: ''
		}
	},
	methods: {
		submit() {
			const person = {
				email: this.email,
				message: this.message,
				name: this.name
			}
			db.collection('form').add(person).then(() => {
				alert("Form Submitted - Thanks for getting in touch")
			})
		}
	}
}
</script>

<style lang="scss">

.footer {
	margin-top: 6rem;
	background-image: linear-gradient(to top left, rgba(0, 3, 160, 0.952), rgba(0, 144, 240, 0.6));
    padding: 2rem 0;
    font-size: 1.4rem;
	color: white;
	text-align: center;

	&__form {
		margin-left: 25rem;
		margin-right: 25rem;
		margin-bottom: 4rem;
		opacity: .8;

		&__message {
			min-height: 10vh;
		}

	}

	&__form:hover {
		opacity: 1;
	}

	&__credit {
		font-family: monospace;
		margin-bottom: 3rem;

		&__how {
			margin-left: .5rem;
		}

		&__license {
			margin-right: .5rem;
		}
	}

	// linkz
	&__flex {
		display: flex;
		margin-bottom: -1.5rem;

		&__col {
			flex: 1;
			font-family: monospace;
			color: white;
		}
		// get rekt default styles
		&__col:hover {
			color: white;
		}
	}
}

@media only screen and (max-width: 1050px) {

.footer {

	&__form {
		margin-left: 1rem;
		margin-right: 1rem;
		margin-bottom: 2rem;

	}

}

}

@media only screen and (max-width: 350px) {

.footer {

	&__form {
		
		&__how {
			float: none;
			margin-top: 1rem;
		}
	}

	
}

}

</style>


</style>





