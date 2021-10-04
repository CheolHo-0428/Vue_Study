const vm = new Vue({
    el: "#app",
    methods: {
        clickHandler(event){
            console.log(event.currentTarget.className)
        }
    }
})