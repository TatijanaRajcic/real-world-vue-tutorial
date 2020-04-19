<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <BaseIcon />
    <!-- BaseIcon is a global component, we did not have to import it in order to use it -->
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events')
      .then(dbResult => (this.events = dbResult.data))
      .catch(error => console.log(error))
  }
}
</script>