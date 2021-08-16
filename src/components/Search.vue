<template>
  <v-responsive max-width="260">
    <v-autocomplete
        v-model="value"
        :items="$store.getters['suggestions/getSuggestions'].map(obj => obj.title)"
        dense
        flat
        hide-details
        persistent-hint
        rounded
        solo-inverted
        v-on:keyup="$emit('input', $event.target.value)"
        v-on:keyup.enter="$emit('submitInput', $event.target.value)"
        @change="select"
    />
  </v-responsive>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    value: ''
  }),
  methods: {
    select() {
      if (this.value !== '' && this.value !== this.$route.query.search) {
        window.scrollTo(0, 0);
        this.$store.commit('products/setList', [])
        this.$router.push({
          name: 'products',
          query: {
            link: `/ru/search/?query=${this.value}`
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>