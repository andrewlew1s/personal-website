<template>
	<div class="tokenmodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Ethereum Tokens for Adventure Corporation">
        <div class="d-block text-center">
            <p>
                I developed a number of ERC721 standard Ethereum Tokens while working for Adventure Corporation, an LA based start-up.
                <br/>Highlights include developing a "Tank God" token for the up an coming producer, Tank God, most well known for his collaboration with Post Malone on "Rockstar."
                <br/> The token itself delivers the song "Rockstar" as an mp3, as well as other metadata.
                <br/> This was part of a partnership with Columbia Records
                <br/> <a href="www.tank-god.net">Tank God</a>
            </p>
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


</style>



