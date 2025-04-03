<template>
    <div
      style="
        background-color: #f7f7f7;
        width: 50%;
        padding: 0 1rem;
        border: 1px solid gray;
        border-radius: 0.5rem;
        margin-top: 1rem;
      "
    >
      <h1>🧾 주문 내역</h1>
      <p v-if="orders.length > 0">
          <ul>
              <li style="list-style: none;" v-for="(order, index) in orders" :key="index">
                  🕗 {{ order.time }} <br>
                  음료: {{ order.drinkName }} <br>
                  사이즈: {{ order.size }} <br>
                  추가샷: {{ order.extraShot ? '추가함' : '없음' }} <br>
                  얼음 양: {{ order.ice }} <br>
                  금액: {{ order.price }}
                  <hr style="border: 0.5px dashed gray;">
              </li>
          </ul>
      </p>
      <p v-else>주문 내역이 없습니다.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderHistory",
    props: {
      orders: {
        type: Array,
        required: true,
      },
    },
  };
  </script>