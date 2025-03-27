<template>
  <div style="display: flex; gap: 1rem">
    <input type="text" placeholder="항목명 입력" v-model="item" />
    <input type="number" placeholder="0" v-model.number="amount" />
    <select :value="category">
      <option value="식비">식비</option>
      <option value="교통">교통</option>
      <option value="쇼핑">쇼핑</option>
    </select>
    <button
      style="
        background-color: #00ffc5;
        color: black;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px;
        font-weight: bold;
        width: 60px;
      "
      @click="inputHandler"
    >
      추가
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ExpenseForm',
  setup(props, context) {
    const item = ref('');
    const amount = ref(0);
    const category = ref('');

    const inputHandler = () => {
      context.emit('input-value', item.value, amount.value, category.value);
      item.value = '';
      amount.value = 0;
    };

    return { item, amount, inputHandler, category };
  },
  emits: ['input-value'],
};
</script>

<style>
input {
  background-color: #2a2a2a;
  color: #5c5b5b;
  padding: 10px;
  border: 1px solid #434343;
  border-radius: 10px;
  margin-top: 10px;
}
select {
  color: #5c5b5b;
  background-color: #2a2a2a;
  border-radius: 12px;
  height: 50px;
  padding: 10px;
  width: 100px;
}
</style>
