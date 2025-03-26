<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    "
  >
    <h1>improv-acting-lab 🎭</h1>
    <LineReadyButton @ready="handleReady">
      <div
        style="
          background-color: #f1f2f6;
          border: 1px solid #dfe4ea;
          border-radius: 12px;
          padding: 14px;
          max-width: 400px;
        "
      >
        오늘도 넌 멋질 거야! 🎤 자신 있게 무대에 올라가!
      </div>
    </LineReadyButton>
    <LineCard></LineCard>
  </div>
</template>

<script>
import LineReadyButton from './components/LineReadyButton.vue';
import LineCard from './components/LineCard.vue';

export default {
  components: { LineReadyButton, LineCard },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleReady() {
      this.count++;
      console.log(`대사 준비 완료! (총 ${this.count}회 눌림)`);
    },
  },
};
</script>
