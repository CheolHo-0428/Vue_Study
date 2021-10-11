<template>
    <div class="todo-app">

        <div class="todo-app__actions">
          <div class="filters">
            <router-link
              to ="all"
              tag="button">
              모든 항목 ({{ total }})
            </router-link>
            <router-link
              to="active"
              tag="button">
              해야 할 항목 ({{ activeCount }})
            </router-link>
            <router-link
              to="completed"
              tag="button">
              완료된 항목 ({{ completedCount }})
            </router-link>

            <!-- <button
              :class="{active: filter === 'completed'}"
              @click="changeFilter('completed')">
              완료된 항목 ({{ completedCount }})
            </button> -->
          </div>

          <div class="actions clearfix">
            <div class="float--left">
              <label>
                <input
                  v-model="allDone"
                  type="checkbox">
                <span class="icon">
                  <i class="material-icons">done_all</i>
                </span>
              </label>
            </div>

            <div class="float--right clearfix">
              <button class="btn float--left" @click="scrollToTop">
                <i class="material-icons">expand_less</i>
              </button>
              <button class="btn float--left" @click="scrollToBottom">
                <i class="material-icons">expand_more</i>
              </button>
              <button class="btn btn--danger float--left" @click="clearCompleted">
                  <i class="material-icons">delete_sweep</i>
              </button>
            </div>
          </div>
        </div>

        <div class="todo-app__list">
          <!-- <todo-item
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
            @update-todo="updateTodo"
            @delete-todo="deleteTodo"
          /> -->
          <todo-item
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo" />
        </div>

        <!-- <todo-creator
          class="todo-app__creator"
          @create-todo="createTodo"/> -->
        <todo-creator
          class="todo-app__creator" />
    </div>
</template>

<script>
// import lowdb from 'lowdb'
// import LocalStorage from 'lowdb/adapters/LocalStorage'
// import cryptoRandomString from 'crypto-random-string'
// import _cloneDeep from 'lodash/cloneDeep'
// import _find from 'lodash/find'
// import _assign from 'lodash/assign'
// import _findIndex from 'lodash/findIndex'
// import _forEachRight from 'lodash/forEachRight'
import scrollTo from 'scroll-to'
import TodoCreator from '~/components/TodoCreator'
import TodoItem from '~/components/TodoItem.vue'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    TodoCreator,
    TodoItem
  },

  // todoApp.js로 이관
  // data () {
  //     return {
  //         db: null,
  //         todos: []
  //     }
  // },

  computed: {
    // Helpers
    ...mapState('todoApp', [
      'todos'
    ]),

    ...mapGetters('todoApp', [
      'filteredTodos',
      'total',
      'activeCount',
      'completedCount'
    ]),

    // filteredTodos () {
    //   switch (this.$route.params.id) {
    //     case 'all':
    //     default:
    //       return this.todos
    //     case 'active': // 해야 할 항목
    //       return this.todos.filter(todo => !todo.done)
    //     case 'completed': // 완료된 항목
    //       return this.todos.filter(todo => todo.done)

    //   }
    // },

    // total () {
    //   return this.todos.length
    // },
    // activeCount () {
    //   return this.todos.filter(todo => !todo.done).length
    // },
    // completedCount () {
    //   return this.total - this.activeCount
    // },

    allDone: {
      get () {
        return this.total === this.completedCount && this.total > 0
      },
      set (checked) {
        this.completeAll(checked)
      }
    }
  },

  watch: {
    $route () {
      // state.filter = this.$route.params.id
      // this.$store.commit('todoApp/updateFilter', this.$route.params.id)
      this.updateFilter(this.$route.params.id)
    }
  },

  created () { // TodoApp이 생성된 직후에 initDB 작동
    this.initDB()
  },

  methods: {
    // Helpers
    ...mapMutations('todoApp', [
      'updateFilter'
    ]),

    ...mapActions('todoApp', [
      'initDB',
      'completeAll',
      'clearCompleted'
    ]),
    // initDB () {
    //     const adapter = new LocalStorage('todo-app') //DB 이름 todo-app
    //     this.db = lowdb(adapter)

    //     console.log(this.db)

    //     const hasTodos = this.db.has('todos').value()

    //     if(hasTodos){
    //       this.todos = _cloneDeep(this.db.getState().todos)
    //      } else {
    //         //localDB 초기화
    //         this.db.defaults({
    //           todos: []
    //         }).write()
    //         }
    //      },

    // createTodo (title) {
    //   const newTodo = {
    //     id: cryptoRandomString({ length: 10 }),
    //     title,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     done: false
    //   }

    //   // Create DB
    //   this.db
    //     .get('todos') // lodash
    //     .push(newTodo)  // lodash
    //     .write() // lowdb

    //   // Create Client
    //   this.todos.push(newTodo)
    // },

    // updateTodo (todo, value) {
    //   this.db.get('todos')
    //     .find({id: todo.id})
    //     .assign(value)
    //     .write()

    //  const foundTodo = _find(this.todos, {id: todo.id})
    //  _assign(foundTodo, value)
    // },

    // deleteTodo (todo) {
    //   this.db
    //     .get('todos')
    //     .remove({ id: todo.id })
    //     .write()

    //   const foundIndex = _findIndex(this.todos, {id: todo.id})
    //   this.$delete(this.todos, foundIndex)
    // },

    // changeFilter (filter) {
    //   this.filter = filter
    // },

    // completeAll (checked) {
    //   // DB
    //    const newTodos = this.db
    //    .get('todos')
    //    .forEach(todo => {
    //      todo.done = checked
    //    })
    //    .write()

    //   // Local todos
    //   // this.todos.forEach(todo => {
    //   //   todo.done = checked
    //   // })
    //   this.todos = _cloneDeep(newTodos)
    // },

    // clearCompleted () {
    // 중복체크를 해도 한개만 지워진다.
    // this.todos.forEach(todo => {
    //   if (todo.done) {
    //     this.deleteTodo(todo)
    //   }
    // })

    // 체크된것들 지우는 코드(완전 스크립트만 있는 코드)
    //   this.todos
    //   .reduce((list, todo, index) => {
    //     if (todo.done) {
    //       list.push(index)
    //     }
    //     return list
    //   }, [])
    //   .reverse()
    //   .forEach(index => {
    //     this.deleteTodo(this.todos[index])
    //   })
    // 체크된것들 지우는 코드(라이브러리 사용(lodash))
    //   _forEachRight(this.todos, todo => {
    //     if(todo.done) {
    //       this.deleteTodo(todo)
    //     }
    //   })

    // },
    // 스크롤버튼 애니메이션
    scrollToTop () {
      scrollTo(0, 0, {
        ease: 'linear'
      })
    },

    scrollToBottom () {
      scrollTo(0, document.body.scrollHeight, {
        ease: 'linear'
      })
    }
  }
}
</script>
<style lang="scss">
  @import "scss/style";

  .filters button.router-link-active {
    background: royalblue;
    color: white;
  }
</style>
