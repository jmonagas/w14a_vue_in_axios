<template>
  <div id="app">
    <img alt="Geek Logo" src="./assets/logo.png" />
    <br />
    <normal-joke></normal-joke>
    <!-- <loud-joke></loud-joke>
    <snake-joke></snake-joke>
    <joke-button></joke-button> -->
  </div>
</template>

<script>
import NormalJoke from "./components/NormalJoke.vue";
// import LoudJoke from "./components/LoudJoke.vue";
// import SnakelJoke from "./components/SnakeJoke.vue";
// import JokeButton from "./components/JokeButton.vue";

export default {
  name: "App",
  components: {
    NormalJoke
    // LoudJoke,
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  font-size: 1.2vw;
  text-align: justify;
  margin: 10vh;
  padding: 5vw;
  line-height: 2;
  background-color: rgb(242, 247, 247);
}
img {
  height: 15vh;
}
</style>
