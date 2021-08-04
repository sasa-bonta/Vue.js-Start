<template>
  <v-app-bar
      app
      color="white"
      flat
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

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
        ></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">

          <v-badge
              avatar
              bordered
              color="deep-purple accent-4"
              offset-x="10"
              offset-y="10"
              content="3"
          >
            <v-avatar size="40"
                      v-bind="attrs"
                      v-on="on"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
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

          <Settings/>

          <v-sheet class="pa-5">
            <v-switch
                v-model="switch1"
                inset
                :label="`Dark Mode: ${switch1.toString()}`"
            ></v-switch>
          </v-sheet>

        </v-list>
      </v-menu>

    </v-container>
  </v-app-bar>
</template>

<script>
import Settings from "./Settings";
export default {
  name: "Navbar",
  components: {Settings},
  data: () => ({
    links: [
      {title: 'Dashboard', route: '/dashboard'},
      {title: 'Messages', route: '/messages'},
      {title: 'Profiles', route: '/profiles'},
      {title: 'Updates', route: '/updates'},
      {title: 'Cart', route: '/cart'},
    ],
    items: [
      {title: 'Profile'},
      {title: 'Help and Assistance'},
      {title: 'Log out'},
    ],
    switch1: true,
    switch2: false,
  }),
}
</script>

<style scoped>

</style>