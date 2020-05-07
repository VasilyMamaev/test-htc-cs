<template>
  <div class="chanels__wraper">
    <div class="chanel" v-for="chanel of chanels" :key="chanel.name">
      <div class="chanel__logo">
        <img :src="chanel.logo"/>
      </div>
      <div class="chanel__info">
        <h3>{{chanel.name}}</h3>
        <table>
          <tr v-for="(show, i) of chanel.shows" :key="show[0]" :class="i === 0 ? 'now' : null">
            <td>{{show[0]}}</td>
            <td>{{show[1]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mockChanels } from '@/mock/mock-data.js'

export default {
  name: 'Chanels',
  data: () => ({
    chanels: mockChanels
  })
  
}
</script>

<style lang="scss">
.chanels__wraper {
  margin: 2% 9% 0 9%;
  padding: 0 10px 2% 2%;
  height: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track{
    background: $gray;
  }
  &::-webkit-scrollbar-thumb{
    border: 2px solid $gray;
    border-radius: 6px;
    background: $dGray;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: $black;
  }
}

.chanel {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  min-height: 16vw;
  margin: 0 10px 10px 10px;
  background-color: $gray;
  border-radius: 8px;
}

.chanel__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chanel__info {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.chanel__info h3 {
  font-size: 20px;
  line-height: 24px;
  margin-top: 0;
}

.chanel__info td{
  font-size: 16px;
  line-height: 19px;
}

.chanel__info .now {
  color: $red;
}

</style>