const vm = new Vue({
    el: '#app',
    data : {
        message : 'Hello Vue!',
        actor : true
    }
})

const vm3 = new Vue({
    el: '#app3',
    data:{
        show: false,
        message: 'Hello World!',
        items:[
            {
                id: '1',
                message: 'good'
            },
            {
                id: '2',
                message: 'good2'
            },
            {
                id: '3',
                message: 'good3'
            }
        ]
    }
})

const vm4 = new Vue({
    el: '#app4',
    data: {
        message: '',
        toggle: false
    },
    methods: {
        toggleElement(){
            this.toggle = !this.toggle
        }
    }
})