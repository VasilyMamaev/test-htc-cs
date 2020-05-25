<template>
  <div class="vuebar-element" v-bar>
    <div class="chanels__wraper">
      <div class="chanel" v-for="chanel of chanels" :key="chanel.name">
        <div class="chanel__logo">
          <img :src="chanel.logo" />
        </div>
        <div class="chanel__info">
          <h3>{{ chanel.name }}</h3>
          <div
            v-for="(show, i) of chanel.shows"
            :key="show[0]"
            :class="i === 0 ? 'now' : null"
          >
            <span>{{ show[0] }}</span>
            <span>{{ show[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mockChanels } from "@/mock/mock-data.js";

export default {
  name: "Chanels",
  data: () => ({
    chanels: mockChanels,
  }),
};
</script>

<style lang="scss">
.chanels__wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chanel {
  display: flex;
  width: 96%;
  min-height: 16vw;
  margin: 0 20px 10px 10px;
  background-color: $gray;
  border-radius: 8px;
  &:last-child {
    margin: 0 20px 0px 10px;
  }
}

.chanel__logo {
  width: 33.3%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chanel__info {
  width: 66.6%;
  padding: 4% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.chanel__info h3 {
  font-size: 20px;
  line-height: 24px;
  margin: 0;
}

.chanel__info span {
  font-size: 16px;
  line-height: 19px;
  margin-right: 20px;
}

.chanel__info .now {
  color: $red;
}

///////////////////////////////
// scrollbar

.vuebar-element {
  margin: 2% 9% 0 9%;
  height: 40vw;
  width: 80%;
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  background-color: $gray;
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: $dGray;
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: $black;
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: $black;
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: $black;
}

@media (max-width: 740px) {
  .vuebar-element {
    height: 100%;
  }
}

@media (max-width: 570px) {
  .chanel__logo {
    display: none;
  }
}
</style>
