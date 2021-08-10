<template>
  <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
  >
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
  </div>
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
      this.$store.dispatch('products/loadProducts', {
        link: this.link,
        // page: this.page,
      })
    },
    link: {
      handler() {
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          // page: this.page,
        })
      },
      immediate: true,
    },
  },
  methods: {
    loadMore: function () {
      console.log('test')
      this.$store.dispatch('products/loadProducts', {
        link: this.link,
        page: ++this.page,
      })
    }
  }
}
</script>

<style scoped>

</style>