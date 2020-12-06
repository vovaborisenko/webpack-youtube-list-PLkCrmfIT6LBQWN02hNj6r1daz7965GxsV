<template>
  <div class="example">
    <h2>Hello from Vue</h2>
    <div>{{ message }}</div>
    <div>{{ getMessage }}</div>
    <input type="text" v-model="message">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    message: 'Vue is ready!'
  }),
  computed: {
    ...mapGetters(['getMessage'])
  }
}
</script>

<style lang="sass">

</style>
