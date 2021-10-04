Vue.component('my-comp',{
    template: '<div><slot :my-slot-data="message"></slot></div>',
    data(){
        return{
            message: 'Hello Slot~??'
        }
    }
})

const vm = new Vue({
    el: '#app'
})