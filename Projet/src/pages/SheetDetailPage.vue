<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { state, sheet_id } from '../store.js';

const btn = ref('Save')
               
const route = useRoute();
const current_sheet_id = parseInt(route.params.id, 10);

const sheet = ref(state.sheets.find((sheet) => sheet.id === current_sheet_id));


</script>

<template>
  <main>
    <article>
      <h2>Sheet Details</h2>
      <h3>Name : {{ sheet.title }}</h3>
      <h3>Group : {{ sheet.group }}</h3>
      <h3>Difficulty : {{ sheet.difficulty }}</h3>
    </article>
    
  </main>

</template>

<style scoped>

</style>