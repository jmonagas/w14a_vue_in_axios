import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: []
  },
  mutations: {
    changeJokes: function (state, data) {
      state.jokes = data;
    }
  },
  actions: {
    getJokes: function (context) {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
          method: "Get"
        })
        .then(response => {
          context.commit("changeJokes", response.data.joke);
          console.log(response.data.joke);
          this.joke = response.data.joke;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {},
});
