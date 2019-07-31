<template>
	<div class="token" >
        <h2 class="token__title">ERC721 Token Development</h2>
        <p class="token__subtitle">Ethereum Tokens for Adventure Corporation</p>
        <!-- card -->    
            <div class="token__wrapper">
                <p>
                     I developed a number of ERC721 standard Ethereum Tokens while working for Adventure Corporation, an LA based start-up.
                  <br/>Highlights include developing a <a class="token__wrapper__link" target="_blank" href="http://www.tankgod.net">"Tank God"</a> token for the up an coming producer, Tank God, most well known for his collaboration with Post Malone on "Rockstar." The token itself delivers the song "Rockstar" as an mp3, as well as other metadata
                  <br/> This was part of a partnership with Columbia Records
                  <br/> Other pages and tokens I personally developed include:
                  <br/> <a class="token__wrapper__link" target="_blank" href="http://www.articles.taxi">"Articles Taxi"</a> - A site to read research papers produced by Adventure Corporation members
                  <br/> <a class="token__wrapper__link" target="_blank" href="">"Pet Collect"</a> - A site that has VR experiences created in AFrame 
                </p>
            </div>
            <div class="token__wrapper__git">
                <b-button href="https://github.com/andrewlew1s/hmc-transcribers" target="_blank">GitHub</b-button> 
            </div>
            <img class="token__wrapper__pic" alt="pic" src="../../assets/tank.png"/>
          </div>
</template>

<script>
export default {
    name: 'Token',
}
</script>

<style lang="scss">

.token {
  
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

    &__link {
      color:black;
      font-weight: bold;
    }

    &__link:hover {
      color:black;
    }
      
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



