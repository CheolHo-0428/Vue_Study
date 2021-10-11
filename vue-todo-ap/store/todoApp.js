import Vue from'vue'

import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import cryptoRandomString from 'crypto-random-string'
import _find from 'lodash/find'
import _assign from 'lodash/assign'
import _findIndex from 'lodash/findIndex'
import _cloneDeep from 'lodash/cloneDeep'
import _forEachRight from 'lodash/forEachRight'

export default {
    //독립모듈 실행 여부
    namespaced: true,

    // Data(함수여야 한다.)
    state: () => ({
        db: null,
        todos: []
    }),

    // Computed
    getters: {
        total(state) {
            return state.todos.length
        },
        activeCount(state) {
            return state.todos.filter(todo => !todo.done).length
        },
        completedCount(state, getters) {
            return getters.total - getters.activeCount
        },
    },

    // Methods
    // 실제 값을 변경할 때(비동기 안됨) ex) 위의 state 값을 변경 할 수 있다.
    // 사용할 때는 commit으로 불러올 수 있다.
    mutations: {
        assignDB(state, db) {
            state.db = db
        },

        createDB (state, newTodo) {
            state.db
            .get('todos') // lodash
            .push(newTodo)  // lodash
            .write() // lowdb
        },

        updateDB (state, { todo, value }) {
            state.db.get('todos')
            .find({id: todo.id})
            .assign(value)
            .write()
        },

        deleteDB (state, todo) {
            state.db
              .get('todos')
              .remove({ id: todo.id })
              .write()
        },
        
        assignTodos(state, todos) {
            state.todos = todos
        },

        pushTodo (state, newTodo) {
            state.todos.push(newTodo)
        },

        assignTodo (state, {foundTodo, value}) {
            _assign(foundTodo, value)
        },

        deleteTodo (state, foundIndex) {
            Vue.delete(state.todos, foundIndex)
        },

        updateTodo (state, { todo, key, value }) {
            todo[key] = value
        },
        
    },

    // Methods
    // 일반 로직(비동기 가능) ex)위의 state 값을 변경 할 수 없다.
    actions: {
        initDB({ state, commit }) {
            const adapter = new LocalStorage('todo-app') //DB 이름 todo-app

            //state.db = lowdb(adapter)
            commit('assignDB', lowdb(adapter)) // mutations을 사용
            console.log(state.db)

            const hasTodos = state.db.has('todos').value()

            if (hasTodos) {
                // state.todos = _cloneDeep(state.db.getState().todos)
                commit('assignTodos', _cloneDeep(state.db.getState().todos)) // mutations을 사용
            } else {
                //localDB 초기화
                state.db.defaults({
                    todos: []
                }).write()
            }
        },

        createTodo ({ state, commit }, title) {
            const newTodo = {
              id: cryptoRandomString({ length: 10 }),
              title,
              createdAt: new Date(),
              updatedAt: new Date(),
              done: false
            }
  
            // Create DB
            // state.db
            //   .get('todos') // lodash
            //   .push(newTodo)  // lodash
            //   .write() // lowdb
            commit('createDB', newTodo)

            // Create Client
            // state.todos.push(newTodo)
            commit('pushTodo', newTodo)
          },

          updateTodo ({ state, commit }, { todo, value }) {
            // Update DB
            // state.db.get('todos')
            //   .find({id: todo.id})
            //   .assign(value)
            //   .write()
            commit('updateDB', { todo, value })
  
           const foundTodo = _find(state.todos, { id: todo.id })
            // _assign(foundTodo, value)
            commit('assignTodo', { foundTodo, value })
          },

          deleteTodo ({ state, commit }, todo) {
            //Delete DB
            // state.db
            //   .get('todos')
            //   .remove({ id: todo.id })
            //   .write()
            commit('deleteDB', todo)

            const foundIndex = _findIndex(state.todos, {id: todo.id})
            // Delete Client
            // Vue.delete(state.todos, foundIndex)
            commit('deleteTodo', foundIndex)
          },

          completeAll ({ state, commit }, checked) {
            // DB
             const newTodos = state.db
             .get('todos')
             .forEach(todo => {
               //todo.done = checked
               commit('updateTodo', { todo, key: 'done', value: checked })
             })
             .write() 

            state.todos = _cloneDeep(newTodos)
          },

          clearCompleted ({state, dispatch}) {
            _forEachRight(state.todos, todo => {
              if(todo.done) {
                //this.deleteTodo(todo)
                dispatch('deleteTodo', todo)
              }
            })
          },

    }
}