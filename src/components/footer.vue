<template>
  <footer>
    <div class="footer__logo">
      <img src="../assets/footer-logo.png" />
    </div>
    <div class="footer__contacts">
      <span
        >426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246
        (ДК «Металлург»)</span
      >
      <span>+7 (3412) 93-88-61, 43-29-29</span>
      <a href="https://htc-cs.ru/">htc-cs.ru</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: $gray;
  display: flex;
  align-items: center;
  min-height: 120px;
  margin-top: 6vw;
}

.footer__logo {
  height: 64px;
  margin-left: 10%;
}

.footer__contacts {
  padding: 0;
  height: 64px;
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  span {
    font-size: 16px;
    line-height: 19px;
  }
  a {
    margin-top: auto;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1f4766;
  }
}

@media (max-width: 344px) {
  footer {
    flex-direction: column-reverse;
    .footer__logo {
      margin-top: 40px;
    }
  }
}
</style>
