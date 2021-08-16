<template>
  <v-responsive max-width="260">
<!--    <v-text-field-->
<!--        :value="value"-->
<!--        dense-->
<!--        flat-->
<!--        hide-details-->
<!--        rounded-->
<!--        solo-inverted-->
<!--        v-on:keyup.enter="$emit('submitInput', $event.target.value)"-->
<!--        v-on:keyup="$emit('input', $event.target.value)"-->
<!--    />-->
    <v-autocomplete
        :value="value"
        :items="$store.getters['suggestions/getSuggestions'].map(obj => obj.title)"
        dense
        flat
        hide-details
        persistent-hint
        rounded
        solo-inverted
        v-on:keyup.enter="$emit('submitInput', $event.target.value)"
        v-on:keyup="$emit('input', $event.target.value)"
    />
  </v-responsive>
</template>

<script>
export default {
  name: "Search",
}
</script>

<style scoped>

</style>