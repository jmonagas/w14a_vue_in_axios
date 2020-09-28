<template>
  <div>
    <h3 @click="newJoke">Click Here to Get a Geek Joke</h3>
    <p>Click the Buttons to Modify</p>
  </div>
</template>

<script>
export default {
  name: "joke-button",
  methods: {
    newJoke() {
      this.$store.dispatch("newJoke");
    }
  }
};
</script>

<style scoped>
h3 {
  margin-left: 30px;
}
p {
  margin-left: 30px;
}
</style>