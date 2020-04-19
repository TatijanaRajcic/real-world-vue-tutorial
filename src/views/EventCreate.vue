<template>
  <div>
    <div>
      <h1>Create an event please {{user.name}}</h1>
    </div>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{catLength}} categories</p>
    <p>{{getEventById(1)}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['catLength','getEventById']), // getting info from the getters directly
    ...mapState(['user', 'categories']) // shorter syntax for getting info from the state directly
  }
}
</script>
