import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    getters:{
        cartList(state){
            return state.cartList
        },
        cartLength(state){
            return state.cartList.length
        },
       
    },
    actions: {
        addCart(context, payload) {
            let oldProduct = context.state.cartList.find(item => item.sku.xdSkuId === payload.sku.xdSkuId)
            if (oldProduct) {
                context.commit('addCount', oldProduct)
            } else {
                context.commit('addToCart', payload)
            }
        }
    },
    mutations: {
        addCount(state, payload) {
            Vue.set(payload, 'count', payload.count + 1)
        },
        addToCart(state, payload) {
            state.cartList.push(payload)
        },
        checkedChange(state,payload){
            for(let item of state.cartList){
                if(item.sku.xdSkuId===payload.sku.xdSkuId){
                    Vue.set(item,'checked',item.checked)
                }
            }
        },
        add2Count(state,payload){
            for(let item of state.cartList){
                if(item.sku.xdSkuId===payload.sku.xdSkuId){
                    item.count++;
                }
             }
   
        },
        subCount(state,payload){
            for(let item of state.cartList){
                if(item.sku.xdSkuId===payload.sku.xdSkuId){
                    item.count--;
                }
            }
        }
    },
})
export default store