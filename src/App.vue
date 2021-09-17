<template>
  <router-view />
</template>

<script>

export default {
  name: "App",
  mounted() {
    for (const product of Object.values(this.$store.state.productHistory.items)) {
      if (product.price.length > 1) {
        console.log(product)
      }
    }
  }
}
</script>

