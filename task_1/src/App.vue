<template>
	<div>
<manager-students />
	</div>
</template>

<script>
import ManagerStudents from './components/ManagerStudents.vue'
	export default {
	name:'App',
  components: { ManagerStudents },
	
	}
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>