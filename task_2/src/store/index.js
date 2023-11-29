import { createStore } from "vuex";
import {products} from '@/constants/data'
export default createStore({
  state: {
		products,
		cartList:[],
		productList:[],
		totalPrice:0,
		dollarRate:37,
		selectCurrency:'1'
	},
  getters: {
		getProducts:({productList}) => productList,
		getCartList:({cartList}) => cartList,
		getTotalPrice:({totalPrice}) => totalPrice,
		getSwitchCurrency(state){
			if(state.selectCurrency === 'dol'){
	 state.productList = state.products.map((product) => ({
  ...product,
  price: (product.price / state.dollarRate).toFixed(2)
}));
 
}
else return 	state.productList = state.products
		},
	},
  mutations: {
		showProductList(state){
			state.productList = state.products

		},
		addProductToCart(state, productId){
			const objProduct = 	state.productList.find((product) => productId === product.id) 
			state.cartList.push(objProduct)
			state.productList = state.productList.filter((product) => productId !== product.id)
		 state.totalPrice = state.cartList.reduce((prev, product) => (prev + parseFloat(product.price)), 0)
		},
		addProductToProductList(state, productId){
			const objProduct = 	state.cartList.find((product) => productId === product.id) 
			state.productList.push(objProduct)
			state.cartList= state.cartList.filter((product) => productId !== product.id)
		 state.totalPrice = state.cartList.reduce((prev, product) => (prev + parseFloat(product.price)), 0)
    
		},
    switchCurrency(state, currency){
			state.selectCurrency = currency 
		}
	},
  actions: {
		onSelectProduct({commit} ,productId){
			commit('addProductToCart', productId)
		},
		onDeselectProduct({commit} ,productId){
			commit('addProductToProductList', productId)
		},
		onLoadProductList({commit}, products){
			commit('showProductList', products)
		},
		onChangeCurrency({commit}, currency){
			commit('switchCurrency', currency)
		}
	},
  modules: {},
});
