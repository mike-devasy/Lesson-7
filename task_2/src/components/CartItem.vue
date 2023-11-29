<template>
	<div class="wrapper">
		<div class="product">
		<span>{{ cartItemData.title }}</span>   <span>{{cartItemData.price }}</span>
		</div>
		<button  class="product-button"  @click="onDeselectProduct(cartItemData.id)" >Видалити</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
	export default {
		name:'CartItem',
		props: {
			cartItemData: {
				type: Object,
				default:() => ({}) 
			},
		},
		methods:{
			...mapActions(['onDeselectProduct'])
		}
	}
</script>

<style lang="css" scoped>
.wrapper{
	width: 300px;
padding-bottom: 10px;
display: flex;
justify-content: space-between;
}
.product{
	width: 200px;
display: flex;
justify-content: space-between;
}
.product-button{
	padding: 5px;
border-radius: 5px;
border:none;
background-color:rgba(47, 79, 79, 0.715);
color:azure;
cursor: pointer;
}
span{
	display: inline-block;
}
</style>