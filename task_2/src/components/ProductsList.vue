<template>
	<div class="container">
		<h3>{{ title }}</h3>
<product-card v-for="product in productsListData" :key="product.id" :card-data="product" />
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
	export default {
		name:'ProductsList',
		components:{
			ProductCard
		},
		props: {
			title:{
				type:String,
				default:'Список товарів'
			},
			productsListData: {
				type: Array,
				default:() =>[] 
			},
		},
	}
</script>

<style lang="css" scoped>
.container{
margin-left: 50px;
padding: 20px;
background-color: rgba(95, 158, 160, 0.501);
width: 350px;
border-radius: 20px;
}
h3{
	text-align-last: left;
}
</style>