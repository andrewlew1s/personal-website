<template>
	<div class="robotics" >
        <h2 class="robotics__title">Robotics Research for Harvey Mudd & MITLincolnLabs</h2>
        <p class="robotics__subtitle">ROS Research & Python Navigation</p>
        <!-- card -->
            <div class="robotics__wrapper">
                <p>
                    Alongside another student at Harvey Mudd College, I documented and improved the substantial codebase we were sent
                    <br/>I helped research the ROS (Robotics Operating System) framework and wrote code in Python to implement basic navigation functions
                    <br/> The project ended with autonomous navigation based off of the "right hand rule"
                    <br/> This was part of a partnership with MITLincolnLabs who sent us their custom remote control car equipped with a LIDAR scanner and other fun gadgets
                </p>
            </div>
            <img class="robotics__wrapper__pic" alt="pic" src="../../assets/roboto.png"/>
          </div>
</template>

<script>
export default {
    name: 'Robotics',
}
</script>

<style lang="scss">

.robotics {

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

.robotics {

	&__wrapper {

		&__pic {
			max-height: 8rem;
			}
		}
	}
}
</style>



