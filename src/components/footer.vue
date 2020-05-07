<template>
  <footer>
    <div class="footer__logo">
      <img src="../assets/footer-logo.png">
    </div>
    <div class="footer__contacts">
      <span>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</span>
      <span>+7 (3412) 93-88-61, 43-29-29</span>
      <a>htc-cs.ru</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: $gray;
  display: flex;
  align-items: center;
  height: 120px;
  margin-top: 6vw;
}

.footer__logo {
  margin-left: 10%;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
}
</style>