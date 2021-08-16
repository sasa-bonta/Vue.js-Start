<template>
  <v-container>
    <div
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="!$store.getters['products/getIsLoading']"
        infinite-scroll-throttle-delay="1000"
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

      <v-row
          v-if="$store.getters['products/getIsLoading']"
      >
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
    </div>
  </v-container>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "Cart",
  components: {ProductItem},
  data: () => ({
    page: 1,
  }),
  props: {
    link: {
      required: false,
      defaults: () => '',
      type: String,
    }
  },
  inject: {
    theme: {},
  },
  watch: {
    $route() {
      if (!this.$store.getters["products/getIsLoading"]) {
        this.page = 1
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
        })
      }
    },
    link: {
      handler() {
        if (!this.$store.getters["products/getIsLoading"]) {
          this.page = 1
          this.$store.dispatch('products/loadProducts', {
            link: this.link,
          })
        }
      },
      immediate: true,
    },
  },
  methods: {
    loadMore: function () {
      if (!this.$store.getters["products/getIsLoading"]) {
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          page: ++this.page,
        })
      }
    }
  }
}
</script>

<style scoped>

</style>