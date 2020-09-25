<template>
  <div>
    <normal-joke />
    <loud-joke />
    <button @click="getLoudJoke">Loud Joke</button>
  </div>
</template>

<script>
// import NormalJoke from "./NormalJoke";
import axios from "axios";

export default {
  name: "loud-joke",
  //   components: {NormalJoke},
  methods: {
    getLoudJoke: function() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "Get"
        })
        .then(response => {
          console.log(response);
          this.joke = response.data.joke.toUpperCase();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>