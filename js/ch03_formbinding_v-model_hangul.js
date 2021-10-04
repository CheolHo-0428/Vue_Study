const vm = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue!'
    },
    methods: {
        bindMessage(event){
            this.message = event.target.value
        }
    }
})