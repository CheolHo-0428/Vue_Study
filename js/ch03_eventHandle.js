const vm = new Vue({
    el: '#app',
    data : {
        todos: [
            {title : '아침 먹기'},
            {title : '점심 먹기'},
            {title : '저녁 먹기'}
        ]
    },

    methods: {
        clickMethod1(title, event){
            console.log('click1')
            console.log(title)
            console.log(event.currentTarget.className)
        },

        clickMethod2(){
            console.log('click2')
            
        }
    }
})