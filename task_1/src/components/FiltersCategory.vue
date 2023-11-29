<template>
	<div>
<div>
	<h3>Система оцінювання</h3>
	<select v-model="selectedScore" >
		<option value="1">12-бальна система</option>
		<option value="2">5-бальна система</option>
	</select>
</div>
<div>
	<h3>Категорії студентів</h3>
	<select v-model="selectedCategory" >
		<option value="5">Відмінник</option>
		<option value="4">Хорошист</option>
		<option value="3">Трійочник</option>
		<option value="2">Двійочник</option>
	</select>
</div>
	</div>
</template>

<script>

import {mapActions} from 'vuex'
	export default {
name:'FiltersCategory',
 data(){
	return{
	selectedScore:null,
	selectedCategory:null
	}
 },
 watch:{
		selectedScore(newVal){
	 
		  this.chooseSelectedScore(newVal)
		},
		selectedCategory(newVal){
			this.chooseSelectedCategory(newVal)
		}
	},
 methods:{
  ...mapActions(['chooseSelectedScore', 'chooseSelectedCategory'])
	 
 },

	}
</script>

<style lang="scss" scoped>

</style>