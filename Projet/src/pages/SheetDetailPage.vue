<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { state, sheet_id } from '../store.js';
import Comment from '../components/Comment.vue';


const btn = ref('Save')

const route = useRoute();
const current_sheet_id = parseInt(route.params.id, 10);
const sheet = ref(state.sheets.find((sheet) => sheet.id === current_sheet_id));

function seeFile_() {
  window.open('/sheets/'+sheet.value.imageData);
}

/* function seeFile(name) {
  const reader = new FileReader();
  reader.onload = (e) => {
    base64Image.value = e.target.result;
  };
  const file=reader.readAsDataURL(name);
  window.open(file);
} */

const convertBase64ToImage = () => {
  if (sheet.value.imageData) {
    const image = new Image();
    image.src = sheet.value.imageData;
    return image;
  }
  return null;
};

function seeFile(name) {
  const image = convertBase64ToImage();
  if (image) {
    const w = window.open('');
    w.document.write(image.outerHTML);
  }
}


</script>

<template>
  <main>
    <article>

      <img :src="sheet.name" v-if="sheet.name" alt="Image en base64" />

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
    <section v-if="sheet.id>4">
      <button @click="seeFile(sheet.name)">See the sheet</button>
    </section>
    <section v-else>
      <button @click="seeFile_()">See the shet</button>
    </section>
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