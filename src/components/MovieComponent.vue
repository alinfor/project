<template>
  <div>
    <h2>Liste des films</h2>
    <ul>
      <li v-for="film in films" :key="film.id">{{ film.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('films', ['films']),
  },
  methods: {
    ...mapActions('films', ['fetchFilms']),
  },
  mounted() {
    this.fetchFilms();
  },
};
</script>
