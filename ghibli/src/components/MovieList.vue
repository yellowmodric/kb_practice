<template>
  <h1>🎥 지브리 영화 리스트</h1>
  <br />
  <ul v-if="movies.length">
    <li v-for="movie in movies" :key="movie.id">
      🎬 {{ movie.title }} - {{ movie.director }}
    </li>
  </ul>
</template>

<script setup>
import { inject } from 'vue';

const movies = inject('movieList', []);
</script>
