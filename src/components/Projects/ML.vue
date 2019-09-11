<template>
	<div class="ml" >
        <h2 class="ml__title">Machine Learning Business Card Transcription</h2>
        <p class="ml__subtitle">Front-End, API Development, Python Panda text orientation to fit pre-made ML Model</p>
        <!-- card -->
            <div class="ml__wrapper">
                <p>
                    I developed the entire front-end for our project which wasn't ideal, as well as set up the API and contributed to the panda text orientation
                    <br/> Highlights include: good user experience, mixed results, fantastic about page
                    <br/> This OPENSOURCE project was made by a group of 5 talented and good looking developers at the 5Cs for Harvey Mudd's CS121 - Software Development
                </p>
            </div>
            <div class="ml__wrapper__git">
                <b-button href="https://github.com/andrewlew1s/hmc-transcribers" target="_blank">GitHub</b-button>
            </div>
            <img class="ml__wrapper__pic" alt="pic" src="../../assets/transcribe.png"/>
          </div>
</template>

<script>
export default {
    name: 'ML',
}
</script>

<style lang="scss">

.ml {

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

@media only screen and (max-width: 600px) {

.ml {

	&__wrapper {

		&__pic {
			max-height: 8rem;
			}
		}
	}
}
</style>



