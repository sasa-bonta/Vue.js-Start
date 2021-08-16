<template>
  <v-app id="inspire">
    <Navbar />
    <v-main>
      <v-container
        fluid
      >
        <v-row>
          <v-col cols="2">
            <Categories />
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              elevation="2"
            >
              <MainView />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainView from "./components/MainView";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

export default {
  components: {Categories, Navbar, MainView},
}
</script>

