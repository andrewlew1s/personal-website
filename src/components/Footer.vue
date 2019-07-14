<template>
	<div class="footer" >
		<div class="footer__credit">
			<b-button variant="outline-primary" size="sm" v-b-popover.hover="'Card icons by Smashicons, www.flaticon.com, license: CC 3.0 BY. Other images from multiple free image websites'">Citations</b-button>
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
				label-for="nested-street">
			<b-form-input id="nested-street"></b-form-input>
			</b-form-group>

			<b-form-group
				label-cols-sm="3"
				label="Email:"
				label-align-sm="right"
				label-for="nested-city">
			<b-form-input id="nested-city"></b-form-input>
			</b-form-group>

			<b-form-group
				label-cols-sm="3"
				label="Message:"
				label-align-sm="right"
				label-for="nested-state">
			<b-form-input class="footer__form__message" id="nested-state"></b-form-input>
			</b-form-group>

			<b-button variant="outline-light">Submit</b-button>

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
export default {
	name: 'Footer'
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
		margin-top: .5rem;
		margin-bottom: 2rem;
	}

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

</style>



