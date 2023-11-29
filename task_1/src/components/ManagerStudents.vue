<template>
	<div >
		<students-list :student-data-list="getStudListWithScoreAndCategory"/>
		<filters-category />
	</div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import FiltersCategory from './FiltersCategory.vue'
import StudentsList from './StudentsList.vue'
export default {
    name: 'ManagerStudents',
    components: {
        StudentsList,
				FiltersCategory
    },
		computed:{
...mapGetters(['getStudListWithScoreAndCategory'])
		},
		created() {
    this.onLoadStudentArray();
  },
		methods: {
    ...mapActions(["onLoadStudentArray"]),
  },



}
</script>

<style>

</style>
