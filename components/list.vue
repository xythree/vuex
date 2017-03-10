

<style lang="sass" scoped>


.listBox {   
    width: 500px;
    margin: 0 auto;
    
    .loading {
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    
    ul {
        display: flex;
        flex-wrap: wrap;
        
        li {
            flex: 1;
            padding: 5px;
            border-bottom: 1px solid #ddd;
            
            p {             
                margin: 0;
            }
        }
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .1s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}


</style>



<template>

    <div class="listBox">        
        <ul>
            <li v-for="(item,index) in list" >
                <p v-text="item.title"></p>
				<p>{{item.price | money}}</p>
                <button @click="add(index)">add</button>
            </li>
        </ul>
		<transition name="fade">
            <div class="loading" v-if="show" >loading...</div>
        </transition>
    </div>

</template>

<script>

import store from "./../vuex/store"

export default {
    store,
    data() {
        return {
            show: true,
            list: []
        }
    },
	filters: {
		money(value) {
			return "￥" + value
		}
	},
    methods: {
        add(index) {
            this.$store.dispatch({
                type: "add",
                arr: this.list[index]
            })			
        }
    },
    created() {
    
        setTimeout(() => {
            this.show = false
            
            this.list = [{
                id: 1,
                title: "11111",
				price: 11
            }, {
                id: 2,
                title: "22222",
				price: 32
            }, {
                id: 3,
                title: "33333",
				price: 16
            }, {
                id: 4,
                title: "44444",
				price: 3
            }, {
                id: 5,
                title: "55555",
				price: 60
            }]          
            
        }, 1000)
        
    },
    mounted() {
        
    }
}

</script>







