const vm = new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        toggle (){
            this.show = !this.show;
        }
    }
})