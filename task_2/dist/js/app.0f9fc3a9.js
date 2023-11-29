(function(){"use strict";var t={6949:function(t,r,e){var c=e(9242),n=e(3396);function o(t,r,e,c,o,a){const i=(0,n.up)("product-manager");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(i)])}var a=e(7139);const i=t=>((0,n.dD)("data-v-6b6ac1f7"),t=t(),(0,n.Cn)(),t),u=i((()=>(0,n._)("option",{value:"1",selected:""},"Виберіть валюту",-1))),d=i((()=>(0,n._)("option",{value:"grn"},"Гривня",-1))),s=i((()=>(0,n._)("option",{value:"dol"},"Долар",-1))),l=[u,d,s],p={class:"container-manager"},f=i((()=>(0,n._)("h2",null,"Вітаємо вас на нашому сайті !",-1))),v={class:"pay-block"},m={class:"pay-block__action"},g=i((()=>(0,n._)("span",null,"Разом до оплати",-1))),P=i((()=>(0,n._)("button",null,"Оплатити",-1)));function L(t,r,e,o,i,u){const d=(0,n.up)("products-list"),s=(0,n.up)("cart-product");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":r[0]||(r[0]=t=>i.selectCurrency=t)},l,512),[[c.bM,i.selectCurrency]]),(0,n._)("div",p,[(0,n._)("div",null,[f,(0,n.Wm)(d,{"products-list-data":t.getProducts},null,8,["products-list-data"])]),(0,n._)("div",v,[(0,n.Wm)(s,{"cart-list-data":t.getCartList},null,8,["cart-list-data"]),(0,n._)("div",m,[g,(0,n.Uk)(" "+(0,a.zw)(t.getTotalPrice)+" ",1),P])])])],64)}const w={class:"container"};function y(t,r,e,c,o,i){const u=(0,n.up)("product-card");return(0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("h3",null,(0,a.zw)(e.title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.productsListData,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.id,"card-data":t},null,8,["card-data"])))),128))])}const _={class:"wrapper"},h={class:"product"};function C(t,r,e,c,o,i){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",h,[(0,n._)("span",null,(0,a.zw)(e.cardData.title),1),(0,n.Uk)(),(0,n._)("span",null,(0,a.zw)(e.cardData.price),1)]),(0,n._)("button",{class:"product-button",onClick:r[0]||(r[0]=r=>t.onSelectProduct(e.cardData.id))},(0,a.zw)(e.buttonTitle),1)])}var b=e(65),D={name:"ProductCard",props:{cardData:{type:Object,default:()=>({})},buttonTitle:{type:String,default:"Купити"}},methods:{...(0,b.nv)(["onSelectProduct"])}},k=e(89);const O=(0,k.Z)(D,[["render",C],["__scopeId","data-v-ec154f48"]]);var T=O,I={name:"ProductsList",components:{ProductCard:T},props:{title:{type:String,default:"Список товарів"},productsListData:{type:Array,default:()=>[]}}};const j=(0,k.Z)(I,[["render",y],["__scopeId","data-v-30a3cf58"]]);var z=j;const S={class:"container"};function x(t,r,e,c,o,i){const u=(0,n.up)("cart-item");return(0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("h3",null,(0,a.zw)(e.title),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.cartListData,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.id,"cart-item-data":t},null,8,["cart-item-data"])))),128))])}const Z={class:"wrapper"},M={class:"product"};function F(t,r,e,c,o,i){return(0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",M,[(0,n._)("span",null,(0,a.zw)(e.cartItemData.title),1),(0,n.Uk)(),(0,n._)("span",null,(0,a.zw)(e.cartItemData.price),1)]),(0,n._)("button",{class:"product-button",onClick:r[0]||(r[0]=r=>t.onDeselectProduct(e.cartItemData.id))},"Видалити")])}var U={name:"CartItem",props:{cartItemData:{type:Object,default:()=>({})}},methods:{...(0,b.nv)(["onDeselectProduct"])}};const A=(0,k.Z)(U,[["render",F],["__scopeId","data-v-d4a6f396"]]);var H=A,W={name:"CartProduct",components:{CartItem:H},props:{title:{type:String,default:"Корзина"},cartListData:{type:Array,default:()=>[]}},computed:{}};const Y=(0,k.Z)(W,[["render",x],["__scopeId","data-v-dc96122e"]]);var K=Y,R={name:"ProductManager",components:{ProductsList:z,CartProduct:K},data(){return{selectCurrency:"1"}},computed:{...(0,b.Se)(["getProducts","getCartList","getTotalPrice"])},watch:{selectCurrency(t){this.onChangeCurrency(t)}},created(){return this.onLoadProductList()},methods:{...(0,b.nv)(["onLoadProductList","onChangeCurrency"])}};const E=(0,k.Z)(R,[["render",L],["__scopeId","data-v-6b6ac1f7"]]);var V=E,q={name:"App",components:{ProductManager:V}};const B=(0,k.Z)(q,[["render",o]]);var G=B;e(560);const J=[{title:"Хліб",price:24,id:1},{title:"Молоко",price:31,id:2},{title:"Ковбаса",price:350,id:3},{title:"Шовдарь",price:950,id:4},{title:"Пікниця",price:210,id:5},{title:"Вода",price:15,id:6},{title:"Ноутбук",price:52999,id:7},{title:"Комплект моніторів",price:25e3,id:8},{title:"Інвертор",price:13e3,id:9},{title:"Аккумулятор",price:11e3,id:10}];var N=(0,b.MT)({state:{products:J,cartList:[],productList:[],totalPrice:0,dollarRate:37,selectCurrency:"1"},getters:{getProducts:({productList:t})=>t,getCartList:({cartList:t})=>t,getTotalPrice:({totalPrice:t})=>t,getSwitchCurrency(t){if("dol"!==t.selectCurrency)return t.productList=t.products;t.productList=t.products.map((r=>({...r,price:(r.price/t.dollarRate).toFixed(2)})))}},mutations:{showProductList(t){t.productList=t.products},addProductToCart(t,r){const e=t.productList.find((t=>r===t.id));t.cartList.push(e),t.productList=t.productList.filter((t=>r!==t.id)),t.totalPrice=t.cartList.reduce(((t,r)=>t+parseFloat(r.price)),0)},addProductToProductList(t,r){const e=t.cartList.find((t=>r===t.id));t.productList.push(e),t.cartList=t.cartList.filter((t=>r!==t.id)),t.totalPrice=t.cartList.reduce(((t,r)=>t+parseFloat(r.price)),0)},switchCurrency(t,r){t.selectCurrency=r}},actions:{onSelectProduct({commit:t},r){t("addProductToCart",r)},onDeselectProduct({commit:t},r){t("addProductToProductList",r)},onLoadProductList({commit:t},r){t("showProductList",r)},onChangeCurrency({commit:t},r){t("switchCurrency",r)}},modules:{}});(0,c.ri)(G).use(N).mount("#app")}},r={};function e(c){var n=r[c];if(void 0!==n)return n.exports;var o=r[c]={exports:{}};return t[c].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(r,c,n,o){if(!c){var a=1/0;for(s=0;s<t.length;s++){c=t[s][0],n=t[s][1],o=t[s][2];for(var i=!0,u=0;u<c.length;u++)(!1&o||a>=o)&&Object.keys(e.O).every((function(t){return e.O[t](c[u])}))?c.splice(u--,1):(i=!1,o<a&&(a=o));if(i){t.splice(s--,1);var d=n();void 0!==d&&(r=d)}}return r}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[c,n,o]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var c in r)e.o(r,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:r[c]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,c){var n,o,a=c[0],i=c[1],u=c[2],d=0;if(a.some((function(r){return 0!==t[r]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(u)var s=u(e)}for(r&&r(c);d<a.length;d++)o=a[d],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(s)},c=self["webpackChunktask2"]=self["webpackChunktask2"]||[];c.forEach(r.bind(null,0)),c.push=r.bind(null,c.push.bind(c))}();var c=e.O(void 0,[998],(function(){return e(6949)}));c=e.O(c)})();
//# sourceMappingURL=app.0f9fc3a9.js.map