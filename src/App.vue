<template>
  <HeadersPage/>
  <MovieComponent/>
</template>

<script lang="ts">
import './index.css'; 
import { defineComponent } from 'vue';
import HeadersPage from './components/HeadersPage.vue';
import MovieComponent from './components/MovieComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeadersPage,
    MovieComponent
}
});
</script>
