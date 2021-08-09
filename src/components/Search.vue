<template>
  <v-responsive max-width="260">
    <v-text-field
        :value="searchValue"
        dense
        flat
        hide-details
        rounded
        solo-inverted
        v-on:keyup.enter="$emit('submitInput', $event.target.value)"
    />
  </v-responsive>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchValue: {
      type: String,
      required: false,
      default: '',
    },
  },
  model: {
    prop: 'searchValue',
    event: 'submitInput'
  },
}
</script>

<style scoped>

</style>