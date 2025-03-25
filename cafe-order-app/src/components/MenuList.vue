<template>
  <button
    @click="$emit('select-drink', name)"
    style="margin: 5px; padding: 10px; cursor: pointer"
  >
    {{ name }} ({{ price }}원)
  </button>
</template>

<script>
export default {
  name: 'MenuList',
  props: ['name', 'price'],
  emits: ['select-drink'],
};
</script>
