import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogged: false,
    onLogin: false,
    userName: "",
  },
  mutations: {
    OnLogin(state, payload) {
      state.onLogin = payload;
    },
    changeUserName(state, payload) {
      state.userName = payload;
      state.isLogged = true;
    },
    logout(state) {
      state.userName = "";
      state.isLogged = false;
    },
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
    changeName(state, value) {
      state.userName = value;
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
