<template>
	<div class="security" >
        <h2 class="security__title">Secure System in Java</h2>
        <p class="security__subtitle">Built for CS181S - Secure Systems at Pomona College</p>
        <!-- card -->    
            <div class="security__wrapper">
                <p>
                    This project used Java to create and focus on back end security elements. I used Java Swing to create a basic game
                  <br/>Sensitive user data was encrypted in a MySQL database using SHA-256 encryption. All data was sent from the client to the server over SSL
                  <br/> Included sign-up, login, logout, password strengthing, password reset and logging features
                </p>
            </div>
            <div class="security__wrapper__git">
                <b-button href="https://github.com/andrewlew1s/secureGame" target="_blank">GitHub</b-button> 
            </div>
            <img class="security__wrapper__pic" alt="pic" src="../../assets/security.gif"/>
          </div>
</template>

<script>
export default {
    name: 'Security',
}
</script>

<style lang="scss">

.security {
  
  margin-top: 1rem;
  border-top: 1px black dashed;

  &__title {
      
      font-family: monospace;
      margin-top: 2rem;
  }

  &__subtitle {
      font-family: monospace;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
      
    &__pic {
      top: 50%;
      max-height: 15rem;
    }

    &__git {
        margin-bottom: 1rem;
    }
  }
}
</style>



