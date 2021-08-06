<template>
  <v-row>
    <v-col
      v-for="i in 6"
      :key="i"
      cols="6"
    >
      <ProductItem />
    </v-col>
  </v-row>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "Cart",
  components: {ProductItem}
}
</script>

<style scoped>

</style>