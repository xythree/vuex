

import Vue from "vue"
import Vuex from "vuex"
import * as actions from "./actions"
import * as getters from "./getters"



Vue.use(Vuex)




export default new Vuex.Store({
    state: {
        carList: []
    },
    mutations: {
        addCarList(state, arr) {            
			var flag = false
			if (state.carList.length) {
				state.carList.forEach(function (t, i) {

					if (t.id == arr.id) {
						t.nums++
						flag = true
					}
				})
				state.carList = state.carList.map(t => t)
			}

			if (!flag) {				
				state.carList.push(Object.assign(arr, {nums: 1}))
			}
        },
        removeCarList(state, arr) {
            state.carList = state.carList.filter(function (t) {
                return t.id != arr.id
            })
        }
    },
    actions,
    getters
})













