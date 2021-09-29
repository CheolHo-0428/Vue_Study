const vm = new Vue({
    el: '#app',
    data: {
        todos:[
            {title: '아침먹기'},
            {title: '점심먹기'},
            {title: '저녁먹기'}
        ]
    },
    computed: {
        computedTodos(){
            return this.todos.map((todo, index) => {
                // return Object.assign({}, todo, {
                //     id: index + 1,
                //     done: false
                // })
                return {
                    ...todo,
                    id: index+1,
                    done: false
                }
            })
        }
    }
})