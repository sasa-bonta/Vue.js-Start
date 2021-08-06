<template>
  <v-sheet
    rounded="lg"
    elevation="3"
  >
    <v-list color="transparent">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Categories
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2" />


      <v-list-item
        v-for="(item, index) in $store.getters['categories/getList']"
        :key="index"
        link
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item
        link
        color="grey lighten-4"
      >
        <v-list-item-content>
          <v-list-item-title>
            Refresh
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  name: "Categories",
  // data: () => {},
  mounted() {
    this.$store.dispatch('categories/fetchCategories')
  }
}
</script>

<style scoped>

</style>