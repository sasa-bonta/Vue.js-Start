<template>
  <div id="app">
    <v-app id="inspire">
      <div
        class="pa-0"
        style="max-height:100vh;overflow:hidden;"
      >
        <router-view />
        <div
          class="text-center mt-6"
        >
          <p class="ma-0">
            - ИЛИ -
          </p>
          <v-btn
            color="grey"
            rounded
            outlined
            class="ma-2"
            width="200"
          >
            <v-icon
              left
              color="blue"
            >
              mdi-facebook
            </v-icon>
            Вход с Facebook
          </v-btn>
          <br>
          <v-btn
            color="grey"
            rounded
            outlined
            class="ma-2"
            width="200"
          >
            <v-icon
              left
              color="red"
            >
              mdi-google
            </v-icon>
            Вход с Google
          </v-btn>
        </div>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Auth",
  data: () => ({
    show: false,
  }),
}
</script>

<style scoped>

</style>