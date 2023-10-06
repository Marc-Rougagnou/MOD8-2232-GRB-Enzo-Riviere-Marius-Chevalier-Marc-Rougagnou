<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { state, sheet_id } from '../store.js';
import Comment from '../components/Comment.vue';

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
      <fieldset id="done-field">
        <select name="done" id="done" v-model="sheet.done">
          <option value="Yes">Done</option>
          <option value="No">Undone</option>
        </select>
      </fieldset>
    </article>
    <h1>Comments of the sheet</h1>
    <Comment :sheet_init="sheet">
    </Comment>
  </main>

</template>

<style scoped>
#done-field {
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 20%;
  margin: 0 auto;
  margin-bottom: 2%;
  border: none;
}

</style>