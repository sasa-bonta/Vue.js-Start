<template>
  <v-card
    class="mx-auto elevation-5 text-center pa-5 mt-12"
    max-width="350"
    style="border-radius:20px;"
  >
    <v-card-subtitle class="title black--text pa-1">
      Вход
    </v-card-subtitle>
    <v-card-subtitle class="pa-1">
      Пройдите авторизацию <br> для начало покупок
    </v-card-subtitle>
    <v-form>
      <v-text-field
        v-model="username"
        hide-details
        color="red"
        label="Электронная почта или имя пользователя"
      />
      <v-text-field
        v-model="password"
        color="red"
        label="Пароль"
        type="password"
      />
      <v-card-actions>
        <v-btn
          color="red"
          dark
          block
          rounded
          @click="login"
        >
          Войти
        </v-btn>
      </v-card-actions>
    </v-form>
    <p class="mt-3">
      У вас нет аккаунта?
      <span
        class="red--text"
        style="cursor:pointer"
      >
        <router-link :to="{name: 'registration'}">
          Регистрация
        </router-link>
      </span>
    </p>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    login() {
      this.$store.dispatch('auth/login', {username: this.username, password: this.password})
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>

</style>