<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo.svg" alt="logo">
    </div>
    <form name="header__search" class="header__search">
      <input class="search__input" placeholder="Поиск...">
      <button class="search__button">Найти</button>
    </form>
    <div class="header__login">
      <button v-if="!isLogged" class="login__button--unlogged" @click="loginHandler">Войти</button>
      <div v-else class="login__logged">
        <span>{{userName}}</span>
        <button class="login__button--logged" @click="logoutHandler">Выйти</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isLogged() {
      return this.$store.state.isLogged
    },
    userName() {
      return this.$store.state.userName
    }
  },
  methods: {
    loginHandler() {
      this.$store.commit('OnLogin', true)
    },
    logoutHandler() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style lang="scss">
header {
  margin: 0 9%;
  padding: 2% 0;
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr min-content;
}

.header__search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search__input {
  @include input-text;
}

.search__button {
  @include clear-button;
}

.login__button--unlogged {
  @include red-button;
}

.login__logged {
  display: flex;
  align-items: baseline;
}

.login__logged span {
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
}

.login__button--logged {
  @include clear-button;
}
</style>