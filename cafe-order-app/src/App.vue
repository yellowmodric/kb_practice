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
      v-if="selectedDrink"
    >
      선택한 음료: {{ selectedDrink.name }}
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
    <OrderSummary
      v-if="selectedDrink"
      :drink="selectedDrink"
      :selectedOptions="selectedOptions"
      @place-order="placeOrder"
    />
    <OrderHistory :orders="orderHistory" />
    <button
      style="
        background-color: #8fbc8f;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        margin-top: 1rem;
        cursor: pointer;
        font-size: medium;
      "
      v-if="orderHistory.length > 0"
    >
      통계 보기
    </button>
    <Statistics
      v-if="orderHistory.length > 0"
      :orders="orderHistory"
    ></Statistics>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import DrinkOptions from './components/DrinkOptions.vue';
import OrderSummary from './components/OrderSummary.vue';
import OrderHistory from './components/OrderHistory.vue';
import Statistics from './components/Statistics.vue';

export default {
  name: 'App',
  components: {
    MenuList,
    DrinkOptions,
    OrderSummary,
    OrderHistory,
    Statistics,
  },
  data() {
    return {
      menuList: [
        { name: '아메리카노', price: 4000 },
        { name: '카페라떼', price: 4500 },
        { name: '바닐라라떼', price: 4800 },
        { name: '콜드브루', price: 5000 },
      ],
      selectedDrink: null,
      selectedOptions: {},
      orderHistory: [],
    };
  },
  methods: {
    select(drinkName) {
      // 사용자가 선택한 메뉴 이름 찾기기
      const drink = this.menuList.find((m) => m.name === drinkName);

      // 만약 같은 음료를 다시 클릭했을 경우 옵션 초기화화
      if (this.selectedDrink && this.selectedDrink.name === drinkName) {
        this.selectedDrink = null;
        this.selectedOptions = {};

        this.$nextTick(() => {
          this.selectedDrink = drink;
        });
        // 다른 음료를 선택하면 새로운 음료로 업데이트, 옵션 초기화
      } else {
        this.selectedDrink = drink;
        this.selectedOptions = {};
      }
    },
    optionChange(options) {
      this.selectedOptions = { ...this.selectedOptions, ...options };
    },
    placeOrder() {
      if (this.selectedDrink) {
        alert(`${this.selectedDrink.name} 주문이 완료되었습니다!`);

        const order = {
          time: new Date().toLocaleString(),
          drinkName: this.selectedDrink.name,
          size: this.selectedOptions.size,
          extraShot: this.selectedOptions.extraShot,
          ice: this.selectedOptions.ice,
          price: this.selectedDrink.price,
        };
        this.orderHistory.unshift(order);

        this.selectedDrink = null;
        this.selectedOptions = {};
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
}
</style>
