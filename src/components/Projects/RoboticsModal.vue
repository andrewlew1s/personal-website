<template>
	<div class="roboticsmodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="ROS Research & Python Navigation">
        <div class="roboticsmodal__wrapper" >
          <div class="d-block text-left">
              <p>
                  Alongside another student at Harvey Mudd College, I documented and improved the substantial codebase we were sent
                  <br/>I helped research the ROS (Robotics Operating System) framework and wrote code in Python to implement basic navigation functions
                  <br/> The project ended with autonomous navigation based off of the "right hand rule"
                  <br/> This was part of a partnership with MITLincolnLabs who sent us their custom remote control car equipped with a LIDAR scanner and other fun gadgets
              </p>
          </div>
          <img class="roboticsmodal__wrapper__pic" alt="modalpic" src="http://fast.scripts.mit.edu/racecar/wp-content/uploads/2016/05/cropped-tst.png"/>     
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-modal>  
	</div>
</template>

<script>
export default {
    name: 'RoboticsModal',
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

.roboticsmodal {

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
      
    &__pic {
      max-height: 10rem;
    }
  }
}

</style>



