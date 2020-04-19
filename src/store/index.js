import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state: info that we want to share across the whole app
    user: { id: 'abc123', name: 'Katy' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: '...', organizer: 'Bianca' },
      { id: 2, title: '...', organizer: 'Sadio' },
      { id: 3, title: '...', organizer: 'Jessica' },
      { id: 4, title: '...', organizer: 'Lilia' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    // getters:  compute derived state based on store state
    catLength: function(state) {
      return state.categories.length
    },
    getEventById: function(state) {
      // way to write dynamic getters, to which we can pass an argument
      return function(id) {
        return state.events.find(event => event.id === id)
      }
    }
  }
})
