<template>
	<div class="container">
		<h3>{{ title }}</h3>
<cart-item v-for="product in cartListData" :key="product.id" :cart-item-data="product"/>

	</div>
</template>

<script>
// import mapGetters from 'vuex'
import CartItem from './CartItem.vue';
	export default {
		name:'CartProduct',
		components:{
       CartItem
		},
		props: {
			title: {
				type: String,
				default:'Корзина' 
			},
			cartListData:{
				type:Array,
				default:() => []
			}
		},
		computed:{
			// ...mapGetters(['getTotalPrice'])
		}
	}
</script>

<style lang="css" scoped>
.container{

}
h3{
	text-align: left;
}
</style>