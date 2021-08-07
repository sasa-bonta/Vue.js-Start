<template>
  <v-container
    v-if="$store.getters['products/getIsLoading']"
  >
    <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="pa-3"
    >
      <v-row>
        <v-col
          cols="6"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          />
        </v-col>
        <v-col
          cols="6"
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
        v-for="i in 6"
        :key="i"
        cols="6"
      >
        <ProductItem />
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