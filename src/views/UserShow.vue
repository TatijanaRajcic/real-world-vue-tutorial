<template>
  <h1>Hey {{username}}</h1>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    },
  },
}
</script>

<style>
</style>