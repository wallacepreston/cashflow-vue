<template>
  <div id="app">
    <v-app>
      <NavBar/>
      <router-view :key="$route.fullPath"/>
    </v-app>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  box-sizing: border-box;
  width: 90vw;
  padding: 0 20px 20px;
  margin: 0 auto;
}
</style>