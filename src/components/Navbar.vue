<template>
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

    <!--On mobile-->
    <v-container
      class="hidden-md-and-up"
    >
      <v-row
        class="d-flex align-center justify-space-around"
      >
        <v-menu
          offset-y
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="pathLink in links"
                :key="pathLink.route"
                :to="pathLink.route"
                text
              >
                <v-list-item-content>
                  <v-btn v-text="pathLink.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <div class="searchMobile d-flex justify-center">
          <Search
            v-model="inputData"
            class="justify-center"
            @submitInput="search"
          />
        </div>
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
</template>

<script>
import Settings from "./Settings";
import {mapGetters} from "vuex";
import Search from "./Search";

export default {
  name: "Navbar",
  components: {Search, Settings},
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
  created() {
    this.$root.$refs.Navbar = this;
  },
  methods: {
    changeDarkMode() {
      this.$store.commit('settings/setDarkModeEnabled', !this.isDarkModeEnabled)
    },
    search(value) {
      if (value !== '' && `/ru/search/?query=${value}` !== this.$route.query.link && !this.$store.getters['products/getIsLoading']) {
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
.searchMobile {
  margin: auto;
  width: 50%;
}
</style>