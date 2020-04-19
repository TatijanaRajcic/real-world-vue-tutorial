import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// SOLUTION 1 FOR GLOBAL COMPONENTS: DECLARE THEM ONE BY ONE (But not really scalable)
// import BaseIcon from '@/components/BaseIcon.vue' // register Global components (that we use everywhere, so to avoid having to import them in every file)
// Vue.component('BaseIcon', BaseIcon) // register Global component step 2. Make sure to do it before we create an instance of Vue

// SOLUTION 2 FOR GLOBAL COMPONENTS: USE AUTOMATIC GLOBAL REGISTRATION (code coming from the docs)
// Then, when we create them, should start with "Base"
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
