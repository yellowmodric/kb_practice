<template>
  <ul>
    <li
      style="
        list-style: none;
        background-color: #2c2c2c;
        width: 90%;
        color: white;
        padding: 15px;
        border-radius: 12px;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
      v-for="(expense, index) in expenses"
      :key="index"
    >
      {{ expense.menu }}: {{ expense.price.toLocaleString() }}원
      <i
        @click="emit('delete-list', index)"
        class="fa-solid fa-x"
        style="color: red; cursor: pointer"
      ></i>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  expenses: { type: Array, required: true },
});
const emit = defineEmits(['delete-list']);
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');
</style>
