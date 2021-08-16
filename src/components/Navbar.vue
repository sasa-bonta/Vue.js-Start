<template>
  <!--    <v-app-bar-->
  <!--        app-->
  <!--        flat-->
  <!--        color="white"-->
  <!--    >-->
  <v-app-bar
      app
      flat
      elevation="4"
  >
    <v-container class="py-0 fill-height">
      <v-btn
          v-for="link in links"
          :key="link.route"
          :to="link.route"
          text
      >
        {{ link.title }}
      </v-btn>

      <v-spacer/>

      <Search
          @submitInput="search"
          v-model="inputData"
      />

      <v-spacer/>

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
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"/>
            </v-avatar>
          </v-badge>
        </template>
        <v-list>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <Settings/>
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
  </v-app-bar>
</template>

<script>
import Settings from "./Settings";
import {mapGetters} from "vuex";
import Search from "./Search";

export default {
  name: "Navbar",
  components: {Search, Settings},
  methods: {
    changeDarkMode() {
      this.$store.commit('settings/setDarkModeEnabled', !this.isDarkModeEnabled)
    },
    search(value) {
      if (value !== '' && value !== this.$route.query.search) {
        window.scrollTo(0, 0);
        this.$store.commit('products/setList', [])
        this.$router.push({
          path: 'products',
          query: {
            link: `/ru/search/?query=${value}`
          }
        })
      }
    },
  },
  created() {
    this.$root.$refs.Navbar = this;
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
  },
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getDarkModeEnabled'
    }),
    link: function () {
      return this.$route.path
    },
    fullPath: function () {
      return this.$route.fullPath
    }
  },
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
  }),
}
</script>

<style scoped>

</style>