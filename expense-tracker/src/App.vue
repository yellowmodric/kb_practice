<template>
  <div class="app">
    <h1>💸 Simple Budget Diary</h1>
    <ExpensForm @input-value="inputResult"></ExpensForm>
    <h3 style="color: #00ffc5; margin-top: 1rem">🖥 지출 내역</h3>
    <ExpenseList
      :expenses="state.menuList"
      :state="state"
      @delete-list="deleteList"
    ></ExpenseList>
    <TotalDisplay :total="total"></TotalDisplay>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import ExpensForm from './components/ExpensForm.vue';
import TotalDisplay from './components/TotalDisplay.vue';
import ExpenseList from './components/ExpenseList.vue';

export default {
  name: 'App',
  components: { ExpensForm, TotalDisplay, ExpenseList },

  setup() {
    const state = reactive({ menuList: [] });

    const inputResult = (menu, price) => {
      state.menuList.push({ menu, price });
    };

    const total = computed(() => {
      let totalValue = 0;
      state.menuList.forEach((item) => {
        totalValue += item.price;
      });
      return totalValue;
    });

    const deleteList = (index) => {
      state.menuList.splice(index, 1);
    };

    const categoryTotal = computed(() => {});

    return { state, inputResult, total, deleteList };
  },
};
</script>

<style>
.app {
  background-color: #1e1e1e;
  color: #f0f0f0;
  padding: 30px;
  font-family: 'Segoe UI', sans-serif;
  max-width: 700px;
  margin: 50px auto;
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  max-height: 500px;
}
h1 {
  color: #00ffc5;
}
</style>
