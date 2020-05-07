<template>
  <div class="modal__wraper" @click.self="overlayClickHandler">
    <div class="modal">
      <h1>Вход</h1>
      <form @submit.prevent="submitHandler">
        <input class="modal__text-input" maxlength="14" placeholder="Логин" type="text" />
        <input class="modal__text-input" placeholder="Пароль" type="text" />
        <label style="checkbox">
          <input class="modal__checkbox-input" type="checkbox" />
          <span class="checkbox-input__line"/>
          <span class="checkbox-input__label">Запомнить</span>
        </label>
        <button class="modal__button">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    overlayClickHandler() {
      this.$store.commit('OnLogin', false)
    },
    submitHandler(evt) {
      this.$store.commit('changeUserName', evt.target[0].value)
      this.$store.commit('OnLogin', false)
    }
  }
}
</script>

<style lang="scss">
.modal__wraper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 304px;
  height: 394px;
  padding: 36px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
}

.modal form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.modal__text-input {
  margin: 23px 0;
  width: 232px;
  @include input-text;
}

.modal__checkbox-input {
opacity: 0;
margin: 0;
width: 0;
height: 0;
}

.checkbox {
display: flex;
align-items: flex-start;
}

.checkbox-input__line {
  display: inline-block;
  border: 1px solid $black;
  box-sizing: border-box;
  border-radius: 4px;
  width: 16px;
  height: 16px;
  position: relative;
}

.modal__checkbox-input:checked + .checkbox-input__line:before {
  content: '';
  position: absolute;
  display: block;
  width: 2px;
  height: 5px;
  background-color: $red;
  left: 2px;
  top: 5px;
  transform: rotate(-45deg);
}

.modal__checkbox-input:checked + .checkbox-input__line:after {
  content: '';
  position: absolute;
  display: block;
  width: 2px;
  height: 10px;
  background-color: $red;
  left: 7px;
  top: 2px;
  transform: rotate(40deg);
}

.checkbox-input__label {
  font-size: 16px;
  line-height: 19px;
  padding-left: 10px;
}

.modal__button {
  align-self: center;
  margin-top: 100px;
  @include red-button;
}
</style>