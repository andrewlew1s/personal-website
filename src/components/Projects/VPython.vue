<template>
	<div class="vpython" >
        <h2 class="vpython__title">VPython Game</h2>
        <p class="vpython__subtitle">This was my first ever project!</p>
        <!-- card -->    
            <div class="vpython__wrapper">
                <p>
                    The project was coded in python using the vpython library. You are the orange ball, and you have to knock the two green balls into the goal to win while avoiding the flying aliens trying to knock you into your own goal
                    <br/>Both the code itself and the game aren't exactly the best, and if I were to do it again it would be very different
                    <br/>However the whole point is to have this pure and as a memory for myself. I kept it as close to the original submission as possible, but I did have to do some upgrades for python3, as vpython has changed and uses glowscript now
                    <br/> It makes me really happy
                </p>
            </div>
            <div class="vpython__wrapper__git">
                <b-button href="https://github.com/andrewlew1s/vpython-game" target="_blank">GitHub</b-button> 
            </div>
            <img class="vpython__wrapper__pic" alt="pic" src="../../assets/vpython.gif"/>
          </div>
</template>

<script>
export default {
    name: 'VPython',
}
</script>

<style lang="scss">

.vpython {
  
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



