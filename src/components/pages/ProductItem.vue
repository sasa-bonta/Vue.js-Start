<template>
  <v-card
      class="mx-auto fill-height card-outter"
      max-width="344"
      :color="`grey ${theme.isDark ? 'darken-3' : 'lighten-5'}`"
  >
    <router-link
        :to="{
          name: 'item',
          params: {
            id: link
          }
        }">
      <v-img
          :src="item.img[0].replace('https://i.simpalsmedia.com/999.md/BoardImages/900x900/noimage.gif', 'https://i.stack.imgur.com/y9DpT.jpg')"
          height="200px"
      />

      <v-card-title>
        {{ item.title }}
      </v-card-title>

    </router-link>

    <v-card-subtitle
        v-if="item.price"
    >
      {{ item.price }} €
    </v-card-subtitle>

    <v-card-subtitle
        v-else
    >
      Договорная
    </v-card-subtitle>

    <v-card-actions
        class="card-actions w-100"
    >
      <v-btn
          color="orange lighten-2"
          text
      >
        Description
      </v-btn>

      <v-spacer/>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider/>

        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ProductItem",
  inject: {
    theme: {},
  },
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    link: function () {
      return this.item.link.substring(4)
    }
  },
}
</script>

<style scoped>
.card-outter {
  position: relative;
  padding-bottom: 50px;
}

.card-actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>