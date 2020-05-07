<template>
  <section>
    <div class="new">
      <h2>🔥 Новинки</h2>
      <div class="new__items">
        <div class="new__item">
          <div class="item__card">
            <img class="card__img" src="../assets/image1.png" />
            <div class="card__hidden-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum iste facilis repellat quod aut quasi nobis, nisi rem
                sunt, a corrupti ipsum laboriosam ad fuga dolor. Quae quam
                voluptas, commodi qui nam vitae. Omnis sequi, optio perferendis
                aspernatur cum suscipit.
              </p>
            </div>
          </div>
          <p class="item__text">Мульт в кино. Выпуск №103. Некогда грустить!</p>
        </div>
        <div class="new__item">
          <div class="item__card">
            <img class="card__img" src="../assets/image2.png" />
            <div class="card__hidden-text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dolor ratione nemo distinctio quisquam fugiat, quae non
                officia harum voluptates? Aut nesciunt eveniet ad incidunt.
              </p>
            </div>
          </div>
          <p class="item__text">Новый Бэтмен</p>
        </div>
        <div class="new__item">
          <div class="item__card">
            <img class="card__img" src="../assets/image3.png" />
            <div class="card__hidden-text">
              <p>
                Фильм повествует о череде событий, произошедших в Голливуде в
                1969 году, на закате его «золотого века». Известный актер Рик
                Далтон и его дублер Клифф Бут пытаются найти свое место в
                стремительно меняющемся мире киноиндустрии.
              </p>
            </div>
          </div>
          <p class="item__text">Однажды... в Голливуде</p>
        </div>
        <div class="new__item">
          <div class="item__card">
            <img class="card__img" src="../assets/image4.png" />
            <div class="card__hidden-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                magnam optio ex reiciendis molestias.
              </p>
            </div>
          </div>
          <p class="item__text">Стриптизёрши</p>
        </div>
      </div>
    </div>
    <div class="genres">
      <h2>Жанры</h2>
      <div class="genres__items">
        <div class="genres__item item-1">
          <span>😁</span>
          <span>Комедии</span>
        </div>
        <div class="genres__item item-2">
          <span>😭</span>
          <span>Драмы</span>
        </div>
        <div class="genres__item item-3">
          <span>👽</span>
          <span>Фантастика</span>
        </div>
        <div class="genres__item item-4">
          <span>👻</span>
          <span>Ужасы</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 0 9%;
  padding: 2% 0;
}

section > div > h2 {
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 2%;
}

// New

.new__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
}

.new__item {
  display: flex;
  flex-direction: column;
}

.item__card {
  width: 19vw;
  border-radius: 8px;
  position: relative;
}

.card__img {
  width: 100%;
  border-radius: 8px;
}

.card__hidden-text {
  position: absolute;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition-duration: 200ms;
  transition-property: opacity, background-color;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid rgba(0, 0, 0, 0.8);
    border-radius: 6px;
    background: $dGray;
  }
  &:hover {
    padding: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }
}

.item__text {
  font-size: 20px;
  line-height: 24px;
}

// Genres

.genres__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
}

.genres__item {
  width: 19vw;
  height: 16vw;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
  transition-duration: 200ms;
  &:hover {
    opacity: 1;
  }
  &.item-1 {
    background: linear-gradient(136.27deg, #f2c94c 8.44%, #f29a4a 91.36%);
  }
  &.item-2 {
    background: linear-gradient(136.27deg, #f2994a 8.44%, #eb5757 91.36%);
  }
  &.item-3 {
    background: linear-gradient(136.27deg, #56CCF2 8.44%, #2F80ED 91.36%);
  }
  &.item-4 {
    background: linear-gradient(136.27deg, #828282 8.44%, #333333 91.36%);
  }
}

.genres__item :nth-child(1) {
  font-size: 3vw;
  line-height: 2vw;
  margin-top: 30%;
}

.genres__item :nth-child(2) {
  font-size: 20px;
  line-height: 24px;
  margin-top: 10%;
}
</style>
