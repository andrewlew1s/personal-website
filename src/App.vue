<template>
  <div class="app">
	<Landing />
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>


<style lang="scss">

.app {
	background-color: rgba(228, 228, 228, 0.575);
}

</style>