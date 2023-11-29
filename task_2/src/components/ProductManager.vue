<template>
			<select v-model="selectCurrency">
					<option value="1" selected >Виберіть валюту</option>
					<option value="grn">Гривня</option>
					<option value="dol">Долар</option>
				</select>
	<div class="container-manager">
		<div>
				<h2>Вітаємо вас на нашому сайті !</h2>
		
			<products-list :products-list-data="getProductList"  />
		</div>
		<div class="pay-block">
<cart-product :cart-list-data="getCartList"/>
	<div class="pay-block__action">
		<span>Разом до оплати</span>
		{{ getTotalPrice }}
		<button>Оплатити</button>
	</div>
</div>
	</div>
</template>
<script>
import ProductsList from './ProductsList.vue'
import CartProduct from './CartProduct.vue'
import { mapActions, mapGetters } from 'vuex';
	export default {
		name:'ProductManager',
		components:{
			ProductsList,CartProduct
		},
		data(){
return{
	selectCurrency:'1'
}
		},
		computed:{
			...mapGetters(['getProductList', 'getCartList', 'getTotalPrice' ]),
 
		},
		watch:{
			selectCurrency(newVal){
				this.onChangeCurrency(newVal)
			}
		},
		created(){
			return this.onLoadProductList()
		},
		methods:{
		...mapActions(['onLoadProductList', 'onChangeCurrency'])	
		}
	}
</script>

<style lang="css" scoped>
h2{
	margin-bottom: 50px;
}
.container-manager{
display: flex;
gap:50px;
}
.pay-block{
background-color: rgba(95, 158, 160, 0.501);
margin-top: 100px;
	padding: 20px;
width: 350px;
border-radius: 20px;
}
.pay-block__action{
	display: flex;
	width: 300px;
padding-bottom: 10px;
justify-content: space-between;
color:brown;

}
.select-block{
	width: 600px;
	height: 50px;
	display: flex;
	gap: 100px;
	justify-content: space-between;
	align-items: center;
}
select{
	font-size: 20px;
}
button{
	border-radius:5px;
	border:none;
	cursor:pointer;
}
</style>