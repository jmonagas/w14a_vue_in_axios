<template>
  <div class="something">
    <h4>Geek Jokes</h4>
    <br />
    <p>{{ joke }}</p>
    <br />
    <button @click="getNormalJoke">Normal Joke</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "normal-joke",
  data() {
    return {
      joke: "Click Button to Reveal"
    };
  },
  methods: {
    getNormalJoke: function() {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "Get"
        })
        .then(response => {
          console.log(response);
          this.joke = response.data.joke;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.$root.$on("getNormalJoke", this.getNormalJoke);
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5 {
  margin: auto;
}
</style>
