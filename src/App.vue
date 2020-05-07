<template>
  <div id="app">
    <Modal v-if="onLogin" />
    <Header />
    <Toggler />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Toggler from "@/components/toggler.vue";
import Footer from "@/components/footer.vue";
import Modal from "@/components/modal.vue";

export default {
  name: "Home",
  components: {
    Header,
    Toggler,
    Footer,
    Modal
  },
  computed: {
    onLogin() {
      return this.$store.state.onLogin;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Rubik", sans-serif;
  src: url("./assets/fonts/Rubik-Regular.woff2") format("woff2"),
    url("./assets/fonts/Rubik-Regular.woff") format("woff");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  line-height: 19px;
}

// modal


</style>
