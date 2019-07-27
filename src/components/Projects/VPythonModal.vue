<template>
	<div class="vpythonmodal" >
    <!-- modal -->
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Game Developed in VPython">
        <!-- card -->
          <div class="vpythonmodal__wrapper" >     
            <div class="d-block text-left">
                <p>
                    This was my first ever project. It was coded in python using the vpython library.
                    <br/>Both the code itself and the game aren't exactly the best, and if I were to do it again I would do it very differently.
                    <br/>However the whole point is to keep this pure and as a memory, keeping it as close to the original as possible. I did have to do some upgrades for python3, as vpython changed and uses glowscript now. It makes me really happy to see it now as it shows how far I've come. 
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
  }
}
</style>



