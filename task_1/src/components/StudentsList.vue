<template>
	<h1>Список студентів</h1>
	<table>
		<tr>
			<th>ПІБ</th>
			<th>Середній бал</th>
		</tr>
		<tr v-for="student in studentDataList" :key="student.id">
			<td>{{ student.name }}</td>
			<td>{{student.averageScore}}</td>
		</tr>
	</table>

</template>

<script>

	export default {
		name:'StudentsList',
		props: {
			studentDataList:{
				type:Array,
				default:() => []
			}
		},
	}
	
</script>

<style lang="scss" scoped>

</style>