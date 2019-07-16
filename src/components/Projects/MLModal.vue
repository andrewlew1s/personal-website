<template>
	<div class="mlmodal" >
    <!-- modal -->
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="Front-End, API Development, Python Panda text orientation to fit pre-made ML Model by Zanadlar???! research">
        <!-- card -->
          <div class="mlmodal__wrapper" >     
            <div class="d-block text-center">
                <p>
                    I developed entire Front-End for our Project which overall was a bit lame but I did decide to do it in  a framework no-one knew i.e. this one
                    <br/>Highlights include: good user experience, mixed results, fantastic about page
                    <br/> This OPENSOURCE project was made by a group of 5 talented and good looking developers at the 5Cs for Harvey Mudd's CS121 - Software Development, and also maybe for Mike's company kinda 
                </p>
            </div>
            <img class="mlmodal__wrapper__pic" alt="modalpic" src="../../assets/transcribe.png"/>
          </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-modal>
	</div>
</template>

<script>
export default {
    name: 'MLModal',
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

.mlmodal {

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



