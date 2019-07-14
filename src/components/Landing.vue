<template>
	<div class="landing">
		<Header />
		<About />
		<Features />
		<Projects />
		<Footer />
	</div>
</template>

<script>
import Header from './Header.vue'
import About from './About.vue'
import Features from './Features.vue'
import Projects from './Projects/Projects.vue'
import Footer from './Footer.vue'

export default {
	name: 'Landing',
	components: {
	Header,
	About,
	Features,
	Projects,
	Footer
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



