const vm1 = new Vue({
    el:'#app1',
    data:{
        msgA:'Message A.',
        msgB:'Message B.'
    },
    methods:{
        changeMessage(){
            this.msgA = 'Change message A'
            this.msgB = 'Change message B'
        }
    },
    computed:{},
    watch: {
        msgA(value){
            console.log(value)
        }
    },
    
})

console.log(vm1);