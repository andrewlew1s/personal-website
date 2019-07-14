<template>
	<div class="roboticsmodal" >
		<b-button id="show-btn" @click="showModal">Learn More</b-button>
        <b-modal ref="my-modal" hide-footer title="ROS Research & Python Navigation">
        <div class="d-block text-center">
            <p>
                I worked with another student at Harvey Mudd College> We were told to document and improve the substantial codebase we were sent.
                <br/>I helped research the ROS (Robotics Operating System) language?? and wrote code in Python to implement basic navigation functions
                <br/> The project ended with autonomous navigation based off of the "right hand rule."
                <br/> This was part of a partnership with MITLincolnLabs who sent us their custom remote control car equipped with a LIDAR scanner and other fun gadgets
            </p>
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


</style>



