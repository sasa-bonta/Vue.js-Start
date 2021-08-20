<template>
  <v-card
    class="mx-auto fill-height card-outer"
    max-width="344"
    :color="`grey ${theme.isDark ? 'darken-3' : 'lighten-5'}`"
  >
    <router-link
      :to="{
        name: 'item',
        params: {
          id: link
        }
      }"
    >
      <v-img
        :src="previewImage"
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
    },
    previewImage: function () {
      return this.item.img[0]
        .replace('https://i.simpalsmedia.com/999.md/BoardImages/900x900/noimage.gif', 'https://i.stack.imgur.com/y9DpT.jpg')
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

a {
  text-decoration: none;
}

.v-card__title {
  color: black;
}
</style>