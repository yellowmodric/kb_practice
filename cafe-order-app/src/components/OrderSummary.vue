<template>
  <div>
    <h1>🧾 주문 내역서</h1>
    <p>주문 시간: {{ currentTime }}</p>
    <hr style="border: dashed 1px #d2b48c" />
    <p>음료: {{ selectedDrink }}</p>
    <p>사이즈:</p>
    <p>추가 샷:</p>
    <p>얼음 양:</p>
    <hr style="border: dashed 1px #d2b48c" />
    <p>결제 금액: {{}}원</p>
    <button>주문 확정하기</button>
  </div>
</template>

<script>
const today = new Date();

export default {
  name: 'OrderSummary',
  props: ['selectedDrink', 'selectedOptions'],
  computed: {
    currentTime() {
      return today.toLocaleString();
    },
  },
};
</script>
