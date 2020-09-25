<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <normal-joke msg="Get a Geek Joke" />
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
  text-align: center;
  margin-top: 5vh;
}
img {
  height: 9vh;
}
</style>
