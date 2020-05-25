<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="header__search">
      <input class="search__input" placeholder="Поиск..." />
      <button class="search__button" @click="findHandler">
        Найти
      </button>
    </div>
    <div class="header__login">
      <button
        v-if="!isLogged"
        class="login__button--unlogged"
        @click="loginHandler"
      >
        Войти
      </button>
      <div v-else class="login__logged">
        <span v-if="!nameOnEdit" @click="setNameEdit">{{ userName }}</span>
        <input v-else autofocus v-model="name" @blur="changeNameHandler" />
        <button class="login__button--logged" @click="logoutHandler">
          Выйти
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    name: "",
    nameOnEdit: false,
  }),
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    },
    userName() {
      return this.$store.state.userName;
    },
  },
  methods: {
    loginHandler() {
      this.$store.commit("OnLogin", true);
    },
    logoutHandler() {
      this.$store.commit("logout");
    },
    findHandler() {
      event.preventDefault();
    },
    setNameEdit() {
      this.nameOnEdit = true;
      this.name = this.$store.state.userName;
    },
    changeNameHandler() {
      this.$store.commit("changeName", this.name);
      this.nameOnEdit = false;
    },
  },
  mounted() {
    this.name = this.$store.state.userName;
  },
};
</script>

<style lang="scss">
header {
  margin: 0 9%;
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  span {
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    cursor: pointer;
  }
}

.login__button--logged {
  @include clear-button;
}

@media (max-width: 740px) {
  .header {
    flex-flow: row wrap;
    flex-basis: 100%;
  }
  .header__logo {
    order: 0;
  }
  .header__search {
    order: 1;
    margin: 0 auto;
  }
  .header__login {
    order: 0;
  }
}
</style>
