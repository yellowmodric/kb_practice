<template>
  <div>
    <h1>{{ selectedDrink }} 옵션 선택</h1>
    <p>사이즈:</p>
    <label>
      <input type="radio" v-model="size" value="small" @change="emitOptions" />
      Small
    </label>
    <label>
      <input type="radio" v-model="size" value="medium" @change="emitOptions" />
      Medium
    </label>
    <label>
      <input type="radio" v-model="size" value="large" @change="emitOptions" />
      Large </label
    ><br />
    <label
      ><input
        type="checkbox"
        value="false"
        v-model="extraShot"
        @change="emitOptions"
      />샷 추가</label
    ><br />
    <span>얼음 양: </span>
    <select v-model="ice" @change="emitOptions">
      <option value="적게">적게</option>
      <option value="보통">보통</option>
      <option value="많이">많이</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DrinkOptions',
  props: ['selectedDrink'],
  emits: ['options-changed'],
  data() {
    return {
      size: 'medium',
      ice: '보통',
      extraShot: false,
    };
  },
  methods: {
    emitOptions() {
      this.$emit('options-changed', {
        size: this.size,
        extraShot: this.extraShot,
        ice: this.ice,
      });
    },
  },
};
</script>
