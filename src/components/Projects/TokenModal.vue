<template>
	<div class="tokenmodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Ethereum Tokens for Adventure Corporation">
        <div class="tokenmodal__wrapper" >
          <div class="d-block text-left">
              <p>
                  I developed a number of ERC721 standard Ethereum Tokens while working for Adventure Corporation, an LA based start-up.
                  <br/>Highlights include developing a <a class="tokenmodal__wrapper__link" target="_blank" href="http://www.tankgod.net">"Tank God"</a> token for the up an coming producer, Tank God, most well known for his collaboration with Post Malone on "Rockstar." The token itself delivers the song "Rockstar" as an mp3, as well as other metadata
                  <br/> This was part of a partnership with Columbia Records
                  <br/> Other pages and tokens I personally developed include: 
                  <br/> <a class="tokenmodal__wrapper__link" target="_blank" href="http://www.articles.taxi">"Articles Taxi"</a> - A site to read research papers produced by Adventure Corporation members
                  <br/> <a class="tokenmodal__wrapper__link" target="_blank" href="http://www.petcollect.net">"Pet Collect"</a> - A site that has VR experiences created in AFrame
              </p>
          </div>
          <img class="tokenmodal__wrapper__pic" alt="modalpic" src="../../assets/tank.png"/>     
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-modal>  
	</div>
</template>

<script>
export default {
    name: 'TokenModal',
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

.tokenmodal {

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
      
    &__pic {
      max-height: 20rem;
    }

    &__link {
      color:black;
      font-weight: bold;
    }

    &__link:hover {
      color:black;
    }
  }
}

</style>



