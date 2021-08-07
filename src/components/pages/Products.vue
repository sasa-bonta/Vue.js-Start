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
  components: {ProductItem},
  props: {
    link: {
      required: false,
      defaults: () => '',
      type: String,
    }
  },
  mounted() {
   console.log(this.link)
  }
}
</script>

<style scoped>

</style>