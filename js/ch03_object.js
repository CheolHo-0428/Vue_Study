const vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {title: '아침 먹기'},
            {title: '점심 먹기'},
            {title: '저녁 먹기'}
        ],
        heropy: {
            name: 'HEROPY',
            age: 35
        }
    },
    methods: {
        pushTodo(){
            //this.todos.push({title: '야식먹기'});
            this.$set(this.todos, 3, {title: '야식먹기'});            
        },
        
        addHomepage(){
            this.$set(this.heropy, 'homepage', 'heropy.blogs');
        }
    }
})