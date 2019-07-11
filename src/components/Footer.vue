<template>
	<div id="scroll" class="footer" >
		<div class="footer__flex">
			<div class="footer__flex__col">GitHub</div>
			<div class="footer__flex__col">LinkedIn</div>
			<div class="footer__flex__col">Resume</div>
		</div>
		<div class="footer__credit">
			<b-button size="sm" v-b-popover.hover="'Card icons made by Smashicons from www.flaticon.com is licensed by CC 3.0 BY'">Citations</b-button>
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
	background-color: rgba(2, 27, 168, 0.911);
    padding: 2rem 0;
    font-size: 1.4rem;
	color: white;
	text-align: center;

	&__credit {
		font-family: monospace;
		margin-top: 2rem;
	}

	&__flex {
		display: flex;

		&__col {
			flex: 1;
		}
	}
}

</style>



