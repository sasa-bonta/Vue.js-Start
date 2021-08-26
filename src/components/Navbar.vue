<template>
  <div>
    <v-app-bar
      app
      flat
      elevation="4"
      :collapse="false"
    >
      <v-container
        class="py-0 fill-height hidden-sm-and-down"
      >
        <v-btn
          v-for="pathLink in links"
          :key="pathLink.route"
          :to="pathLink.route"
          text
        >
          {{ pathLink.title }}
        </v-btn>

        <v-spacer />

        <Search
          v-model="inputData"
          @submitInput="search"
        />

        <v-spacer />
        <!--profile-->
        <v-menu
          offset-y
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-badge
              avatar
              bordered
              color="deep-purple accent-4"
              offset-x="10"
              offset-y="10"
              content="3"
            >
              <v-avatar
                size="40"
                v-bind="attrs"
                v-on="on"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
              </v-avatar>
            </v-badge>
          </template>
          <!--profile options-->
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <Settings />
              </v-list-item-title>
            </v-list-item>

            <v-sheet class="pa-5">
              <v-switch
                :input-value="isDarkModeEnabled"
                inset
                label="Dark Mode"
                @change="changeDarkMode"
              />
            </v-sheet>
          </v-list>
        </v-menu>
      </v-container>

      <!--Drawer for mobile-->
      <v-container
        class="hidden-md-and-up"
      >
        <v-row
          class="d-flex align-center justify-space-around"
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

          <Search
            v-model="inputData"
            class="justify-center"
            @submitInput="search"
          />

          <!--profile-->
          <v-menu
            offset-y
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-badge
                avatar
                bordered
                color="deep-purple accent-4"
                offset-x="10"
                offset-y="10"
                content="3"
              >
                <v-avatar
                  size="40"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
                </v-avatar>
              </v-badge>
            </template>
            <!--profile options-->
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <Settings />
                </v-list-item-title>
              </v-list-item>

              <v-sheet class="pa-5">
                <v-switch
                  :input-value="isDarkModeEnabled"
                  inset
                  label="Dark Mode"
                  @change="changeDarkMode"
                />
              </v-sheet>
            </v-list>
          </v-menu>
        </v-row>
      </v-container>
    </v-app-bar>
    <!--Drawer-->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="position:fixed; top:0; left:0; overflow-y:scroll;"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="pathLink in links"
            :key="pathLink.route"
            :to="pathLink.route"
          >
            <v-list-item-title>{{ pathLink.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <Categories />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Settings from "./Settings";
import {mapGetters} from "vuex";
import Search from "./Search";
import Categories from "./Categories";

export default {
  name: "Navbar",
  components: {Categories, Search, Settings},
  data: () => ({
    links: [
      {title: 'Dashboard', route: '/dashboard'},
      {title: 'Messages', route: '/messages'},
      {title: 'Products', route: '/products'},
      {title: 'Updates', route: '/updates'},
      {title: 'Cart', route: '/cart'},
    ],
    items: [
      {title: 'Profile'},
      {title: 'Help and Assistance'},
      {title: 'Log out'},
    ],
    inputData: '',
    suggestions: [],
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getDarkModeEnabled',
      isProductsLoading: 'products/getIsLoading',
    }),
    link: function () {
      return this.$route.path
    },
    fullPath: function () {
      return this.$route.fullPath
    }
  },
  watch: {
    isDarkModeEnabled: {
      handler() {
        this.$vuetify.theme.dark = this.isDarkModeEnabled
      },
      immediate: true,
    },
    link: function () {
      if (this.link !== '/products') {
        this.inputData = ''
      }
    },
    fullPath: function () {
      if (!this.$route.query.link?.includes('/search/')) {
        this.inputData = ''
      }
    },
    inputData: function () {
      this.$store.dispatch('suggestions/showSuggestions', this.inputData)
    },
    group() {
      this.drawer = false
    },
  },
  created() {
    this.$root.$refs.Navbar = this;
  },
  methods: {
    changeDarkMode() {
      this.$store.commit('settings/setDarkModeEnabled', !this.isDarkModeEnabled)
    },
    search(value) {
      if (value !== '' && `/ru/search/?query=${value}` !== this.$route.query.link && !this.isProductsLoading) {
        window.scrollTo(0, 0);
        this.$store.commit('products/setList', [])
        this.$router.push({
          name: 'products',
          query: {
            link: `/ru/search/?query=${value}`
          }
        })
      }
    },
  },
}
</script>

<style scoped>
.d-flex .justify-center {
  margin: auto;
  width: 50%;
}
</style>