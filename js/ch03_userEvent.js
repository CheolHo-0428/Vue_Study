Vue.component('my-comp', {
    template: '<div @click="updateMsg">{{ myMsg }}</div>',
    props: {
        myMsg : String
    },
    methods: {
        updateMsg(){
           // this.myMsg = 'Good!'
           this.$emit('my-event', 'Good')
        }
    }
})

const vm = new Vue({
    el: '#app',
    data(){
        return{
            message: 'Hello'
        }
    },
    methods:{
        updateMessage(value){
            this.message = value
        }
    }
})