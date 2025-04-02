<template>
  <div
    style="background-color: #181818; color: #8f8f8f; width: 100%; height: 100%"
  >
    <MovieList></MovieList>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import axios from 'axios';
import MovieList from './components/MovieList.vue';

const movieList = ref([]);
const url = '/api/movies';

const requestAPI = async () => {
  try {
    const response = await axios.get(url);
    movieList.value = response.data;
  } catch (error) {
    console.log('실패: ', error);
  }
};

provide('movieList', movieList);

requestAPI();
</script>
