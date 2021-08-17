<template>
  <v-responsive max-width="260">
    <v-autocomplete
        v-model="value"
        :items="$store.getters['suggestions/getSuggestions'].map(obj => obj.title)"
        :loading="$store.getters['suggestions/getIsSearchSuggestionsLoading']"
        dense
        flat
        hide-details
        persistent-hint
        rounded
        solo-inverted
        @keydown="$emit('input', $event.target.value)"
        v-on:keyup.enter="$emit('submitInput', $event.target.value)"
        @change="$emit('submitInput', $event)"
    />
  </v-responsive>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    value: ''
  }),
}
</script>

<style scoped>

</style>