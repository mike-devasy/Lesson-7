(function(){"use strict";var t={2302:function(t,r,e){var c=e(9242),n=e(3396);function a(t,r,e,c,a,o){const i=(0,n.up)("product-manager");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i)])}var o=e(7139);const i=t=>((0,n.dD)("data-v-ccf4a5a8"),t=t(),(0,n.Cn)(),t),u=i((()=>(0,n._)("option",{value:"1",selected:""},"Виберіть валюту",-1))),d=i((()=>(0,n._)("option",{value:"grn"},"Гривня",-1))),s=i((()=>(0,n._)("option",{value:"dol"},"Долар",-1))),l=[u,d,s],p={class:"container-manager"},f=i((()=>(0,n._)("h2",null,"Вітаємо вас на нашому сайті !",-1))),v={class:"pay-block"},m={class:"pay-block__action"},g=i((()=>(0,n._)("span",null,"Разом до оплати",-1))),L=i((()=>(0,n._)("button",null,"Оплатити",-1)));function P(t,r,e,a,i,u){const d=(0,n.up)("products-list"),s=(0,n.up)("cart-product");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":r[0]||(r[0]=t=>i.selectCurrency=t)},l,512),[[c.bM,i.selectCurrency]]),(0,n._)("div",p,[(0,n._)("div",null,[f,(0,n.Wm)(d,{"products-list-data":t.getProductList},null,8,["products-list-data"])]),(0,n._)("div",v,[(0,n.Wm)(s,{"cart-list-data":t.getCartList},null,8,["cart-list-data"]),(0,n._)("div",m,[g,(0,n.Uk)(" "+(0,o.zw)(t.getTotalPrice)+" ",1),L])])])],64)}const y={class:"container"};function _(t,r,e,c,a,i){const u=(0,n.up)("product-card");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("h3",null,(0,o.zw)(e.title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.productsListData,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.id,"card-data":t},null,8,["card-data"])))),128))])}const w={class:"wrapper"},h={class:"product"};function C(t,r,e,c,a,i){return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",h,[(0,n._)("span",null,(0,o.zw)(e.cardData.title),1),(0,n.Uk)(),(0,n._)("span",null,(0,o.zw)(e.cardData.price),1)]),(0,n._)("button",{class:"product-button",onClick:r[0]||(r[0]=r=>t.onSelectProduct(e.cardData.id))},(0,o.zw)(e.buttonTitle),1)])}var b=e(65),D={name:"ProductCard",props:{cardData:{type:Object,default:()=>({})},buttonTitle:{type:String,default:"Купити"}},methods:{...(0,b.nv)(["onSelectProduct"])}},k=e(89);const O=(0,k.Z)(D,[["render",C],["__scopeId","data-v-ec154f48"]]);var T=O,I={name:"ProductsList",components:{ProductCard:T},props:{title:{type:String,default:"Список товарів"},productsListData:{type:Array,default:()=>[]}}};const j=(0,k.Z)(I,[["render",_],["__scopeId","data-v-30a3cf58"]]);var x=j;const z={class:"container"};function S(t,r,e,c,a,i){const u=(0,n.up)("cart-item");return(0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("h3",null,(0,o.zw)(e.title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cartListData,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.id,"cart-item-data":t},null,8,["cart-item-data"])))),128))])}const F={class:"wrapper"},Z={class:"product"};function M(t,r,e,c,a,i){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",Z,[(0,n._)("span",null,(0,o.zw)(e.cartItemData.title),1),(0,n.Uk)(),(0,n._)("span",null,(0,o.zw)(e.cartItemData.price),1)]),(0,n._)("button",{class:"product-button",onClick:r[0]||(r[0]=r=>t.onDeselectProduct(e.cartItemData.id))},"Видалити")])}var R={name:"CartItem",props:{cartItemData:{type:Object,default:()=>({})}},methods:{...(0,b.nv)(["onDeselectProduct"])}};const U=(0,k.Z)(R,[["render",M],["__scopeId","data-v-d4a6f396"]]);var A=U,H={name:"CartProduct",components:{CartItem:A},props:{title:{type:String,default:"Корзина"},cartListData:{type:Array,default:()=>[]}},computed:{}};const W=(0,k.Z)(H,[["render",S],["__scopeId","data-v-dc96122e"]]);var Y=W,K={name:"ProductManager",components:{ProductsList:x,CartProduct:Y},data(){return{selectCurrency:"1"}},computed:{...(0,b.Se)(["getProductList","getCartList","getTotalPrice"])},watch:{selectCurrency(t){this.onChangeCurrency(t)}},created(){return this.onLoadProductList()},methods:{...(0,b.nv)(["onLoadProductList","onChangeCurrency"])}};const E=(0,k.Z)(K,[["render",P],["__scopeId","data-v-ccf4a5a8"]]);var V=E,q={name:"App",components:{ProductManager:V}};const B=(0,k.Z)(q,[["render",a]]);var G=B;e(560);const J=[{title:"Хліб",price:24,id:1},{title:"Молоко",price:31,id:2},{title:"Ковбаса",price:350,id:3},{title:"Шовдарь",price:950,id:4},{title:"Пікниця",price:210,id:5},{title:"Вода",price:15,id:6},{title:"Ноутбук",price:52999,id:7},{title:"Комплект моніторів",price:25e3,id:8},{title:"Інвертор",price:13e3,id:9},{title:"Аккумулятор",price:11e3,id:10}];var N=(0,b.MT)({state:{products:J,cartList:[],productList:[],totalPrice:0,dollarRate:37,selectCurrency:"1"},getters:{getProducts:({productList:t})=>t,getCartList(t){return"dol"===t.selectCurrency?t.cartList.map((r=>({...r,price:(r.price/t.dollarRate).toFixed(2)}))):t.cartList},getTotalPrice(t){return"dol"===t.selectCurrency?(t.totalPrice/t.dollarRate).toFixed(2):t.totalPrice},getProductList(t){return"dol"===t.selectCurrency?t.productList.map((r=>({...r,price:(r.price/t.dollarRate).toFixed(2)}))):t.productList}},mutations:{showProductList(t){t.productList=t.products},addProductToCart(t,r){const e=t.productList.find((t=>r===t.id));t.cartList.push(e),t.productList=t.productList.filter((t=>r!==t.id)),t.totalPrice=t.cartList.reduce(((t,r)=>t+parseFloat(r.price)),0)},addProductToProductList(t,r){const e=t.cartList.find((t=>r===t.id));t.productList.push(e),t.cartList=t.cartList.filter((t=>r!==t.id)),t.totalPrice=t.cartList.reduce(((t,r)=>t+parseFloat(r.price)),0)},switchCurrency(t,r){t.selectCurrency=r}},actions:{onSelectProduct({commit:t},r){t("addProductToCart",r)},onDeselectProduct({commit:t},r){t("addProductToProductList",r)},onLoadProductList({commit:t},r){t("showProductList",r)},onChangeCurrency({commit:t},r){t("switchCurrency",r)}},modules:{}});(0,c.ri)(G).use(N).mount("#app")}},r={};function e(c){var n=r[c];if(void 0!==n)return n.exports;var a=r[c]={exports:{}};return t[c].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,c,n,a){if(!c){var o=1/0;for(s=0;s<t.length;s++){c=t[s][0],n=t[s][1],a=t[s][2];for(var i=!0,u=0;u<c.length;u++)(!1&a||o>=a)&&Object.keys(e.O).every((function(t){return e.O[t](c[u])}))?c.splice(u--,1):(i=!1,a<o&&(o=a));if(i){t.splice(s--,1);var d=n();void 0!==d&&(r=d)}}return r}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[c,n,a]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var c in r)e.o(r,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:r[c]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,c){var n,a,o=c[0],i=c[1],u=c[2],d=0;if(o.some((function(r){return 0!==t[r]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(u)var s=u(e)}for(r&&r(c);d<o.length;d++)a=o[d],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(s)},c=self["webpackChunktask2"]=self["webpackChunktask2"]||[];c.forEach(r.bind(null,0)),c.push=r.bind(null,c.push.bind(c))}();var c=e.O(void 0,[998],(function(){return e(2302)}));c=e.O(c)})();
//# sourceMappingURL=app.363b1aff.js.map