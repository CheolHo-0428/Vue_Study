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

const vm5 = new Vue({
    el: '#app5',
    data:{
        todos: [
            {
                id:'1',
                title:'아침 먹기',
                done: true
            },
            {
                id:'2',
                title:'점심 먹기',
                done: false
            },
            {
                id:'3',
                title:'저녁 먹기',
                done: false
            },
            {
                id:'4',
                title:'간식 먹기',
                done: false
            },
            {
                id:'5',
                title:'야식 먹기',
                done: false
            },
        ]
    }
})

Vue.component('my-todo-item',{
    props: ['todo'],
    template: 
    `<li><input type="checkbox" v-model="todo.done"><span v-bind:class="{done: todo.done}">{{todo.title}}</span></li>`
})