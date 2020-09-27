<template>
  <div id="app">
    <div id="top">
      <img alt="Geek Logo" src="./assets/logo.png" />
    </div>
    <div id="main">
      <joke-button></joke-button>
      <normal-joke></normal-joke>
      <loud-joke></loud-joke>
      <snake-joke></snake-joke>
    </div>
  </div>
</template>

<script>
import JokeButton from "./components/JokeButton.vue";
import NormalJoke from "./components/NormalJoke.vue";
import LoudJoke from "./components/LoudJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";

export default {
  name: "App",
  components: {
    JokeButton,
    NormalJoke,
    LoudJoke,
    SnakeJoke
  },
  mounted: function() {
    this.$store.dispatch("getJokes");
  }
};
</script>

<style scoped>
#app {
  margin: 3vh;
  padding: 3vw;
  line-height: 1.5;
  background-color: rgb(212, 228, 228);
}
img {
  height: 10vh;
  margin-left: 30px;
}
#top {
  display: grid;
}
#main {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  background-color: burlywood;
}
</style>
