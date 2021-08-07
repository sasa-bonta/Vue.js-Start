<template>
  <v-sheet
    rounded="lg"
    elevation="3"
  >
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-toolbar
        color="teal"
        dark
      >
        <v-toolbar-title>Topics</v-toolbar-title>

        <v-spacer />
      </v-toolbar>

      <div
        v-for="(item, i) in $store.getters['categories/getList']"
        :key="'category-' + i"
      >
        <v-list
          v-if="!item.parentLink"
        >
          <v-list-group
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template
              v-slot:activator
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name" />
              </v-list-item-content>
            </template>

            <div
              v-for="(subCategory, j) in $store.getters['categories/getList']"
              :key="'subCategories-' + j"
            >
              <v-list-item
                v-if="subCategory.parentLink === item.link"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subCategory.name" />
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-group>
        </v-list>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "Categories",
  mounted() {
    this.$store.dispatch('categories/fetchCategories')
  }
}
</script>

<style scoped>

</style>