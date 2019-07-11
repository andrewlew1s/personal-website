<template>
	<div class="landing">
		<Header />
		<About />
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
	display: block;

}

</style>



