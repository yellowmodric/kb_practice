<template>
  <div
    style="
      background-color: #fffaf0;
      width: 50%;
      border-radius: 1rem;
      padding: 1rem;
      margin-top: 1rem;
    "
  >
    <h1>🧾 주문 내역서</h1>
    <p>주문 시간: {{ currentTime }}</p>
    <hr style="border: dashed 1px #d2b48c" />
    <p v-if="drink">음료: {{ drink.name }}</p>
    <p>사이즈: {{ selectedOptions.size }}</p>
    <p>추가 샷: {{ selectedOptions.extraShot ? '추가함' : '없음' }}</p>
    <p>얼음 양: {{ selectedOptions.ice }}</p>
    <hr style="border: dashed 1px #d2b48c" />
    <p v-if="drink">결제 금액: {{ drink.price.toLocaleString() }}원</p>
    <button
      style="
        background-color: #d2b48c;
        color: white;
        border: none;
        padding: 12px;
        border-radius: 7px;
        cursor: pointer;
      "
      @click="$emit('place-order')"
    >
      주문 확정하기
    </button>
  </div>
</template>

<script>
const today = new Date();

export default {
  name: 'OrderSummary',
  props: {
    drink: {
      type: Object,
      required: true,
    },
    selectedOptions: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentTime() {
      return today.toLocaleString();
    },
  },
};
</script>
