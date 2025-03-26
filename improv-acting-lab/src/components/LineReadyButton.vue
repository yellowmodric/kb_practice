<template>
  <button
    @click="handleClick"
    style="
      background-color: #ff7675;
      color: white;
      border-radius: 12px;
      text-align: center;
      padding: 1rem;
      cursor: pointer;
    "
  >
    🎥 대사 준비 완료
  </button>
  <p>버튼을 누른 횟수: {{ count }}회</p>
  <slot>여기에 서윤이의 코멘트가 들어갑니다.</slot>
</template>

<script>
export default {
  name: 'LineReadyButton',
  emits: ['ready'],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
      this.$emit('ready');
    },
  },
};
</script>
