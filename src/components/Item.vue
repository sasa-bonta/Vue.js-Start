<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>