<template>
  <v-responsive max-width="260">
    <v-autocomplete
      v-model="value"
      :items="suggestions.map(obj => obj.title)"
      :loading="isSuggestionsLoading"
      dense
      flat
      hide-details
      persistent-hint
      rounded
      solo-inverted
      @keyup="$emit('input', $event.target.value)"
      @keyup.enter="$emit('submitInput', $event.target.value)"
      @change="$emit('submitInput', $event)"
    />
  </v-responsive>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Search",
  data: () => ({
    value: ''
  }),
  computed: {
    ...mapGetters({
      suggestions: 'suggestions/getSuggestions',
      isSuggestionsLoading: 'suggestions/getIsSearchSuggestionsLoading',
    }),
  },
}
</script>

<style scoped>

</style>