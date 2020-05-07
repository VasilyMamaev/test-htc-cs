<template>
<main>
  <div class="toggler">
    <nav>
      <router-link to="/" exact-active-class="active" class="toggler__item">Фильмы</router-link>
      <router-link to="Chanels" active-class="active" class="toggler__item">Телеканалы</router-link>
    </nav>
  </div>
  <router-view/>
</main>
</template>

<script>

export default {
  name: 'Toggler',
}
</script>

<style lang="scss" >
.toggler {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.toggler > nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10%;
}

.toggler__item {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  box-sizing: border-box;
  transition-duration: 400ms;
  &:hover {
    color: $dGray;
  }
  &.active {
    border-bottom: 2px solid $red;
    color: $red;
  }
}
</style>