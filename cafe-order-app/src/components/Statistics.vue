<template>
  <div>
    <h1>📊 주문 통계</h1>
    <p>총 주문 횟수: {{ orders.length }}</p>
    <p>총 매출: {{ totalPay }}</p>
    <p>가장 인기 있는 음료: {{}} ({{}})</p>
    <p>가장 많이 선택된 사이즈: {{}}</p>
    <p>추가 샷 비율: {{}}%</p>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPay() {
      const total = this.orders.reduce((prev, curr) => {
        return prev.price + curr.price;
      }, 0);
    },
  },
};
</script>
