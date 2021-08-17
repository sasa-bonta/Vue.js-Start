<template>
  <v-container>
    <v-sheet
        rounded="lg"
        elevation="3"
        max-width="1200"
        outlined
        class="spacing-playground ma-6"
    >
      <div
          v-if="$store.getters['item/getIsLoading']"
      >
        <v-sheet
            class="pa-3"
        >
          <v-skeleton-loader
              class="mx-auto"
              max-width="1200"
              type="card"
          ></v-skeleton-loader>
        </v-sheet>
      </div>

      <div
          v-else
      >
        <template>
          <v-carousel>
            <v-carousel-item
                v-if="!item.img || item.img.length === 0"
                :src="'https://i.stack.imgur.com/y9DpT.jpg'"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
            <v-carousel-item
                v-else
                v-for="(image,i) in item.img"
                :key="i"
                :src="image"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </div>
    </v-sheet>
    <div
        class="text-h3"
    >
      {{ item.title }}
    </div>
    <div
        class="text-h5"
    >
      {{ item.description }}
    </div>
    <div
        class="text-h5"

        v-if="item.price"
    >
      {{ item.price }} €
    </div>
    <div
        class="text-h5"
        v-else
    >
      Договорная
    </div>
  </v-container>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Item",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  inject: {
    theme: {},
  },
  mounted() {
    window.scrollTo(0, 0);
    this.loadItem(this.id)
  },
  computed: {
    ...mapGetters({
      item: 'item/getItem'
    })
  },
  methods: {
    ...mapActions({
      loadItem: 'item/loadItem'
    })
  }
}
</script>

<style scoped>

</style>