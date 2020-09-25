import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // loudApi: [{
    //   url: "https://geek-jokes.sameerkumar.website/api?format=json"
    // }],
    // snakeApi: [{
    //   url: "https://geek-jokes.sameerkumar.website/api?format=json"
    // }],
  },
  mutations: {},
  actions: {},
  getters: {
    // loudApi(state) {
    //   return state.loudApi.sort((state, loudApi) => {
    //     return this.$store.state.loudApi.toUpperCase()
    //   });
    // },
    // snakeApi(state) {
    //   return state.snakeApi.sort((state, snakeApi) => {
    //     return this.$store.state.snakeApi.toLowerCase()
    //   });
    // },
  },
});
