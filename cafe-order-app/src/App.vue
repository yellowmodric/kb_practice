<template>
  <div style="padding: 20px">
    <h1>카페 주문 앱</h1>
    <h2>메뉴 선택</h2>
    <div>
      <MenuList
        v-for="(menu, index) in menuList"
        :key="index"
        :name="menu.name"
        :price="menu.price"
        @select-drink="select"
      />
    </div>
    <p
      style="
        width: 40%;
        background-color: lightblue;
        padding: 10px;
        border: 1px solid gray;
      "
    >
      선택한 음료: {{ selectedDrink }}
    </p>
    <DrinkOptions
      style="
        width: 70%;
        background-color: lightblue;
        border: 1px solid gray;
        padding: 10px;
      "
      :selectedDrink="selectedDrink"
      v-if="selectedDrink"
      @options-changed="optionChange"
    />
    <div
      v-if="selectedDrink"
      style="
        background-color: lightgray;
        width: 70%;
        padding: 10px;
        border: 1px solid gray;
        margin-top: 20px;
      "
    >
      <h2>현재 선택 옵션:</h2>
      <p>사이즈: {{ selectedOptions.size }}</p>
      <p>추가샷: {{ selectedOptions.extraShot ? '추가함' : '없음' }}</p>
      <p>얼음 양: {{ selectedOptions.ice }}</p>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import DrinkOptions from './components/DrinkOptions.vue';

export default {
  name: 'App',
  components: { MenuList, DrinkOptions },
  data() {
    return {
      menuList: [
        { name: '아메리카노', price: 4000 },
        { name: '카페라떼', price: 4500 },
        { name: '바닐라라떼', price: 4800 },
        { name: '콜드브루', price: 5000 },
      ],
      selectedDrink: '',
      selectedOptions: {},
    };
  },
  methods: {
    select(e) {
      return (this.selectedDrink = e);
    },
    optionChange(options) {
      this.selectedOptions = options;
    },
  },
};
</script>
