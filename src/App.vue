<template>
  <HeadersPage/>
</template>

<script lang="ts">
import './index.css'; 
import { defineComponent } from 'vue';
import HeadersPage from './components/HeadersPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeadersPage,
  }
});
</script>
