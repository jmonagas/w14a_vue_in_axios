<template>
  <div id="app">
    <img alt="Logo" src="./assets/logo.png" />
    <jokebutton />
    <div id="main">
      <button class="btn" @click="pick(1)">Loud Joke</button>
      <button class="btn" @click="pick(2)">Snake Joke</button>
      <button class="btn" @click="pick(3)">Normal Joke</button>
    </div>
    <loudjoke v-if="opt == 1" />
    <normaljoke v-if="opt == 3" />
    <snakejoke v-if="opt == 2" />
  </div>
</template>

<script>
import jokebutton from "./components/jokebutton";
import snakejoke from "./components/snakejoke";
import normaljoke from "./components/normaljoke";
import loudjoke from "./components/loudjoke";

export default {
  name: "App",
  components: {
    jokebutton,
    snakejoke,
    normaljoke,
    loudjoke
  },
  data: function() {
    return {
      opt: 3
    };
  },
  methods: {
    pick(opt) {
      this.opt = opt;
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 10vh;
  padding: 2vh;
  background: rgb(255, 206, 131);
  min-height: 80vh;
}
img {
  height: 10vh;
  margin-left: 30px;
  margin-top: 30px;
}
.btn {
  padding: 1vh 2vh;
}
#main {
  padding: 2vh 3vh;
  margin-left: 30px;
}
</style>