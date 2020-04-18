<template>
  <div>
    <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach cleanup',
        date: 'Tues Aubg 19'
      }
    }
  }
}
</script>

<style scoped>
h4 {
  color: green;
}
</style>