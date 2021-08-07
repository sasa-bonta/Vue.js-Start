<template>
  <v-container
    v-if="$store.getters['products/getIsLoading']"
  >
    <v-sheet
      class="pa-3"
    >
      <v-row>
        <v-col
          v-for="index in 6"
          :key="index"
          cols="4"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
  <v-container
    v-else
  >
    <v-row>
      <v-col
        v-for="(item, index) in $store.getters['products/getList']"
        :key="item.link + '-' + index"
        cols="4"
      >
        <ProductItem
          :item="item"
        />
      </v-col>
    </v-row>
  </v-container>
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
  inject: {
    theme: {
    },
  },
  mounted() {
    this.$store.dispatch('products/loadProducts', this.link)
  }
}
</script>

<style scoped>

</style>