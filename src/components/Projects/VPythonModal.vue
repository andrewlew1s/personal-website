<template>
	<div class="vpythonmodal" >
    <!-- modal -->
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Game Developed in VPython">
        <!-- card -->
          <div class="vpythonmodal__wrapper" >     
            <div class="d-block text-left">
                <p>
                    This was my first ever project. It was coded in python using the vpython library. You are the ball, and you have to knock the other balls into the goal to win while avoiding the flying aliens trying to knock you into your own goal
                    <br/>Both the code itself and the game aren't exactly the best, and if I were to do it again I would do it very differently
                    <br/>However the whole point is to have this pure and as a memory for myself. I kept it as close to the original submission as possible, but I did have to do some upgrades for python3, as vpython has changed and uses glowscript now. It makes me really happy to see it now and reminds me how far I've come
                    <br/> <a href="https://github.com/andrewlew1s/vpython-game" target="_blank" class="vpythonmodal__wrapper__git">GitHub Link</a> 
                </p>
            </div>
            <div class="vpythonmodal__wrapper__gif" alt="modalpic"/>
          </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-modal>
	</div>
</template>

<script>
export default {
    name: 'VPythonModal',
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      }
    }
}
</script>

<style lang="scss">

.vpythonmodal {

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
      
    &__gif {
      position: relative;
      background-repeat: no-repeat;
      object-fit: cover;
      background-size: cover;
      background-image: url(../../assets/vpythongif.gif);
      top: 50%;
      min-height: 15rem;
    }

    &__git {
      color: black;
      margin-top: 1rem;
    }

    &__git:hover {
      color: black;
    }
  }
}
</style>



