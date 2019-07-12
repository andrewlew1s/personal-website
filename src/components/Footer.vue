<template>
	<div class="footer" >
		<div class="footer__credit">
			<b-button variant="outline-primary" size="sm" v-b-popover.hover="'Card icons by Smashicons, www.flaticon.com, license: CC 3.0 BY. Other images from multiple free image websites'">Citations</b-button>
		</div>
		<div class="footer__flex">
			<a href="https://github.com/andrewlew1s" target="_blank" class="footer__flex__col">GitHub</a>
			<a href="https://www.linkedin.com/in/andrew-lewis-84765b183/" target="_blank" class="footer__flex__col">LinkedIn</a>
			<a href="" class="footer__flex__col">Resume</a>
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

	&__credit {
		font-family: monospace;
		margin-top: .5rem;
		margin-bottom: 4rem;
	}

	&__flex {
		display: flex;

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



