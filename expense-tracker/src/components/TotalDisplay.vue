<template>
  <h3
    style="
      color: #00ffc5;
      margin-top: 1rem;
      background-color: #2a2a2a;
      text-align: center;
      padding: 10px;
      border-radius: 12px;
    "
  >
    ⏱ 총 지출: ₩ {{ total.toLocaleString() }}
  </h3>
</template>

<script>
export default {
  name: 'TotalDisplay',
  props: ['total'],
};
</script>
