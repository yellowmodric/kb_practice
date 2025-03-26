<template>
  <div
    style="
      background-color: #f9f9f9;
      border: 1px solid #e0e1e6;
      border-radius: 12px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    "
  >
    <h1>{{ currentLine }}</h1>
    <slot>기본 설명 멘트</slot>
    <button
      style="
        background-color: #71a1ff;
        padding: 20px;
        color: white;
        border: none;
        border-radius: 12px;
        cursor: pointer;
      "
    >
      🎲 랜덤 대사 뽑기
    </button>
    <h3>✨ 오늘의 즉흥 대사입니다!</h3>
    <slot
      name="tip"
      style="
        background-color: #dff8fb;
        width: 90%;
        border-radius: 12px;
        text-align: center;
        padding: 20px;
      "
    >
      🎯 TIP:
    </slot>
    <slot name="image" src="" alt="사진"></slot>
  </div>
</template>

<script>
export default {
  name: 'LineCard',
  inject: ['lines'],
  data() {
    return {
      currentLine: '🎭 대사가 아직 없습니다. 버튼을 눌러주세요!',
    };
  },
  methods: {
    randomDialogue() {
      const dialogue = Math.floor(Math.random() * this.lines.length);
      this.currentLine = dialogue;
    },
  },
};
</script>
