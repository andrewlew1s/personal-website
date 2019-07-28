<template>
	<div class="securitymodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Secure System in Java">
        <div class="securitymodal__wrapper" >
          <div class="d-block text-left">
              <p>
                  This project used Java to create and focus on back end security elements. I used Java Swing to create a basic game
                  <br/>Sensitive user data was encrypted in a MySQL database using SHA-256 encryption. All data was sent from the client to the server over SSL
                  <br/> Included sign-up, login, logout, password strengthing, password reset and logging features
                  <br/> This was a solo project for CS181S - Secure Systems at Pomona College
                  <br/> <a href="https://github.com/andrewlew1s/secureGame" target="_blank" class="securitymodal__wrapper__git">GitHub Link</a> 
              </p>
          </div>
          <img class="securitymodal__wrapper__gif" alt="modalpic" src="../../assets/security.gif"/>     
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
      
    &__gif {
      max-height: 25rem;
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



