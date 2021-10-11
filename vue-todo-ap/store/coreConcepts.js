export default {
  namespaced: true,
  // Data
  state: () => ({
    a: 123,
    b: []
  }),

  // Computed
  getters: {
    someGetter1 (state, getters) {
      return state.a + 1
    },

    someGeeter2 (state, getters) {
      return state.a + getters.someGetter1
    }
  },

  // methods
  mutations: {
    someMutation (state, payload) {
      state.a = 789
      state.b.push(payload)
    }
  },

  // methods
  actions: {
    someAction1 ({ state, getters, commit, dispatch }, payload) {
      commit('someMutation', payload)
    },

    someAction2 (context, payload) {
      commit('someMutation')
      context.dispatch('someAction1', payload)
    }
  }
}
