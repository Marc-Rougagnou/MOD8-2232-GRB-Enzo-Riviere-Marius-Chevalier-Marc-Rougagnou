<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { state, sheet_id } from '../store.js';
import Comment from '../components/Comment.vue';


const btn = ref('Save')

const route = useRoute();
const current_sheet_id = parseInt(route.params.id, 10);
const sheet = ref(state.sheets.find((sheet) => sheet.id === current_sheet_id));


const convertBase64ToImage = () => {
  if (sheet.value.imageData) {
    const image = new Image();
    image.src = sheet.value.imageData;
    return image;
  }
  return null;
};

function seeFile_() {
  window.open('/sheets/'+sheet.value.imageData);
}

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
      <h1>Sheet Details</h1>
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
    
    <section v-if="sheet.id>4">
      <button @click="seeFile(sheet.name)" class="see">See the sheet</button>
    </section>
    <section v-else>
      <button @click="seeFile_()" class="see">See the shet</button>
    </section>
    <h1>Comments of the sheet</h1>
    <Comment :sheet_init="sheet">
    </Comment>
  </main>

</template>

<style scoped>

.see {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--color-grey);
  color: var(--color-white);
  border: 2px solid var(--color-black);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;
}

.see:hover {
  background-color:var(--color-link);
  color: var(--color-black);
}

h3{
  text-align: center;
  padding: 0.5rem;
  margin-bottom: 1%;
  
}

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