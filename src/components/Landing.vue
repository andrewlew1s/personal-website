<template>
	<div class="landing">
		<Header />
		<About />
		<p id="scroll">CONTENT</p>
	</div>
</template>

<script>
import Header from './Header.vue'
import About from './About.vue'

export default {
	name: 'Landing',
	components: {
	Header,
	About
	}
}
</script>

<style lang="scss">

.landing {

	border: 1rem white solid;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

}

</style>



