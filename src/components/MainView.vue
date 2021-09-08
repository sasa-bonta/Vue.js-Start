<template>
  <div>
    <RouterView />
    <ErrorSnackbar />
  </div>
</template>

<script>
import ErrorSnackbar from "./pages/ErrorSnackbar";

export default {
  name: "MainView",
  components: {ErrorSnackbar},
}
</script>

<style scoped>

</style>