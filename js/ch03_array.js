const vm = new Vue({
    el: "#app",
    data: {
        todos : [
            {title : '아침먹기'},
            {title : '점심먹기'},
            {title : '저녁먹기'}
        ]
    },
    methods: {
        pushTodo () {
            this.todos.push({title : '야식먹기'})
        }
    }
})