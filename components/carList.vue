


<style lang="sass" scoped>





</style>



<template>

    
    <ul class="carList" >
        <li v-for="(item, index) in carList" >
            <p><span v-text="item.title" ></span> <span>X {{item.nums}}</span> <button @click="del(index)">Delete</button></p>
			<p>{{item.nums*item.price | money}}</p>
        </li>
    </ul>
    

</template>



<script>

import store from "./../vuex/store"

export default {
    store,
    data() {
        return {

        }
    },
	filters: {
		money(value) {
			return "￥" + value
		}
	},
    computed: {
        carList() {
            return this.$store.getters.getList
        }
    },
    methods: {
		del(index) {			
			this.$store.dispatch({
				type: "remove",
				arr: this.carList[index]
			})
		}
    },
    created() {
        
    },
    mounted() {
        
    }
}

</script>







