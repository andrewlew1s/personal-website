<template>
	<div class="securitymodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Secure System in Java">
        <div class="securitymodal__wrapper" >
          <div class="d-block text-center">
              <p>
                  This poject used Java Swing to create a basic game (mostly copied from some guy on the internet) and focused out the back end security elements.
                  <br/>Highlights include encrypting all user data in a MySQL database using SHA-256 encyrption over SSL. (TSSL??)
                  <br/> Some basic logging and password strengthing.
                  <br/> This was a solo project part of CS181S - Security Systems?? at Pomona College. 
              </p>
          </div>
          <img class="securitymodal__wrapper__pic" alt="modalpic" src="../../assets/security.png"/>     
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-modal>  
	</div>
</template>

<script>
export default {
    name: 'SecurityModal',
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

.securitymodal {

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
      
    &__pic {
      max-height: 20rem;
    }
  }
}

</style>



