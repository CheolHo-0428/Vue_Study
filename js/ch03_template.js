const vm = new Vue({
    el:'#app',
    data: {
        msg: 'Hello Vue!',
        className: 'normal'
    },
    methods: {
        changeClassName(){
            this.className='active'
        }
    }
})