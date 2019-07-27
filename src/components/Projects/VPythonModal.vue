<template>
	<div class="vpythonmodal" >
    <!-- modal -->
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Game Developed in VPython">
        <!-- card -->
          <div class="vpythonmodal__wrapper" >     
            <div class="d-block text-center">
                <p>
                    This was my first ever project. It was coded in python using the vpython library.
                    <br/>Both the code itself and the game aren't exactly the best, and if I were to do it again I would do it very differntly.
                    <br/>However the whole point is to keep this pure and as a memory, keeping it exactly how I originally built it. I had to do some upgrades for python3. It makes me really happy to see it now as it shows how far I've come. 
                </p>
            </div>
            <img class="vpythonmodal__wrapper__pic" alt="modalpic" src="../../assets/vpython.png"/>
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
      
    &__pic {
      top: 50%;
      max-height: 15rem;
    }
  }
}
</style>



