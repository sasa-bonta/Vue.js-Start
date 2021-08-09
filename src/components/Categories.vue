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
          color="blue darken-4"
          dark
      >
        <v-toolbar-title>Categories</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-navigation-drawer
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          width="100%"
          permanent
      >
        <v-progress-linear
            v-if="$store.getters['categories/getIsLoading']"
            indeterminate
            height="6"
            color="pink lighten-1"
        />
        <div
            v-for="(item, i) in $store.getters['categories/getList']"
            :key="'category-' + i"
        >
          <v-list
              v-if="!item.parentLink"
          >
            <v-divider class="my-2"/>
            <v-list-group
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
            >
              <template
                  v-slot:activator
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"/>
                </v-list-item-content>
              </template>
              <div
                  v-for="(subCategory, j) in $store.getters['categories/getList']"
                  :key="'subCategory-' + j"
                  class="subCategories"
              >
                <v-list-item
                    v-if="subCategory.parentLink === item.link"
                >
                  <router-link
                      :to="{ path: 'products',
                           query: {
                             link: subCategory.link
                           } }"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="subCategory.name">
                        <router-link
                            to="/products"
                            v-text="subCategory.name"
                        />
                      </v-list-item-title>
                    </v-list-item-content>
                  </router-link>
                </v-list-item>
              </div>
            </v-list-group>
          </v-list>
        </div>
      </v-navigation-drawer>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "Categories",
  mounted() {
    if (!this.$store.getters['categories/getList'].length) {
      this.$store.dispatch('categories/fetchCategories')
    }
  }
}
</script>

<style scoped>
.v-application .primary--text {
  color: #EC407A !important;
  caret-color: #EC407A !important;
  font-weight: bold;
}

.v-application a {
  color: #ffffff;
  text-decoration: none;
}

.subCategories {
  margin-left: 20px;
  font-weight: normal;
}
</style>