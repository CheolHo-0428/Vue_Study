<template>
    <div>
        <todo-item />
        <todo-creator />
    </div>    
</template>

<script>
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import TodoCreator from './TodoCreator'
import TodoItem from './TodoItem'

export default {
    components: {
        TodoCreator, 
        TodoItem
    },

    data () {
        return {
            db: null
        }
    },
    
    created () { //TodoApp이 생성된 직후에 initDB 작동
      this.initDB()
    },

    methods: {
        initDB () {
            const adapter = new LocalStorage('todo-app') //DB 이름 todo-app
            this.db = lowdb(adapter)
            console.log(this.db)

            //localDB 초기화
            this.db.defaults({
              todos: []
            }).write
        }
    }
}
</script>
