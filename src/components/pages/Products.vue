<template>
  <v-container>
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="!getIsLoading"
      infinite-scroll-throttle-delay="1000"
    >
      <v-row>
        <v-col
          v-for="item in getList"
          :key="item.link"
          :cols="colsValue"
        >
          <ProductItem
            :item="item"
          />
        </v-col>
      </v-row>
      <!--Loading Skeleton-->
      <v-row
        v-if="getIsLoading"
      >
        <v-col
          v-for="index in 6"
          :key="index"
          :cols="colsValue"
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Cart",
  components: {ProductItem},
  props: {
    link: {
      required: false,
      default: '',
      type: String,
    }
  },
  data: () => ({
    page: 1,
  }),
  inject: {
    theme: {},
  },
  computed: {
    ...mapGetters({
      getIsLoading: 'products/getIsLoading',
      getList: 'products/getList',
    }),
    colsValue() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 12
        case 'sm':
          return 6
        case 'md':
          return 4
        case 'lg':
          return 4
        case 'xl':
          return 3
      }
      return 4
    },
  },
  watch: {
    $route() {
      if (!this.getIsLoading) {
        this.page = 1
        this.loadProducts({
          link: this.link,
        })
      }
    },
    link: {
      handler() {
        if (!this.getIsLoading) {
          this.page = 1
          this.loadProducts({
            link: this.link,
          })
        }
      },
      immediate: true,
    },
  },
  methods: {
    loadMore: function () {
      if (!this.getIsLoading) {
        this.loadProducts({
          link: this.link,
          page: ++this.page,
        })
      }
    },
    ...mapActions({
      loadProducts: 'products/loadProducts',
    }),
  }
}
</script>

<style scoped>

</style>