<template>
  <v-card
    class="mx-auto elevation-5 text-center pa-5 mt-12"
    max-width="350"
    style="border-radius:20px;"
  >
    <v-card-subtitle class="title black--text pa-1">
      Регистрация
    </v-card-subtitle>
    <v-card-subtitle class="pa-1">
      Пройдите регистрацию <br> для начало покупок
    </v-card-subtitle>
    <v-text-field
      hide-details
      color="red"
      label="Электронная почта или имя пользователя"
    />
    <v-text-field
      hide-details
      color="red"
      label="Пароль"
      type="password"
    />
    <v-text-field
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
      >
        Войти
      </v-btn>
    </v-card-actions>
    <p class="mt-3">
      У вас есть уже аккаунт? <span
        class="red--text"
        style="cursor:pointer"
      >
        <router-link :to="{name: 'login'}">
          Авторизация
        </router-link>
      </span>
    </p>
  </v-card>
</template>

<script>
export default {
  name: "Registration"
}
</script>

<style scoped>

</style>