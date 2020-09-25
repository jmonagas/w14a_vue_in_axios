<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <normal-joke />
  </div>
</template>

<script>
import NormalJoke from "./components/NormalJoke.vue";

export default {
  name: "App",
  components: {
    NormalJoke
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: justify;
  margin: 10vh;
  line-height: 2;
}
img {
  height: 9vh;
}
</style>
