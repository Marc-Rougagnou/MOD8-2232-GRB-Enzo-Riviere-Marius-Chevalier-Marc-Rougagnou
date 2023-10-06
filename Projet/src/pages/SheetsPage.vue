<script setup>
import { computed, ref } from "vue";
import SheetItem from "../components/SheetItem.vue";
import { state } from "../store.js";

let input = ref("");
let selectedInstrument = ref("");
let selectedDifficulty = ref("");
let selectedDone = ref("");


const filteredList = computed(() => {
  return state.sheets.filter((sheet) =>
    (sheet.title.toLowerCase().includes(input.value.toLowerCase()) ||
    sheet.group.toLowerCase().includes(input.value.toLowerCase())) &&
    (sheet.instruments.toLowerCase().includes(selectedInstrument.value.toLowerCase())) &&
    (sheet.difficulty.toLowerCase().includes(selectedDifficulty.value.toLowerCase())) &&
    (sheet.done.toLowerCase().includes(selectedDone.value.toLowerCase()))
  );
});
</script>

<template>
  <h1>Sheets</h1>

  <main>

    <fieldset>
      <label for="instru">Instrument: </label>
      <select name="instru" id="instru" v-model="selectedInstrument">
          <option value="">--Every instruments--</option>
          <option value="Saxophone">Saxophone</option>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Drums">Drums</option>
      </select>

      <label for="difficulty">Difficulty level: </label>
      <select name="difficulty" id="difficulty" v-model="selectedDifficulty">
          <option value="">--Any difficulty--</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Professional">Professional</option>
      </select>

      <label for="done">Learned ? </label>
      <select name="done" id="done" v-model="selectedDone">
          <option value="">--Done and undone--</option>
          <option value="Yes">Done</option>
          <option value="No">Undone</option>
      </select>

    </fieldset>

    <input type="text" placeholder="Search for sheets..." v-model="input"/>
      
    <ul>
        <li  v-for="sheet in filteredList" :key="sheet.id">
          <SheetItem :id="sheet.id" class="link">
            <template #info>
              {{ "Name : " + sheet.title + " | Group : " + sheet.group + " | Instrument : " + sheet.instruments + " | Difficulty :  " + sheet.difficulty + " | Done : " + sheet.done}}
            </template>
            
            <template #details>| See details</template>
          </SheetItem>
        </li>
    </ul>
    <RouterLink to='/add-sheets' class="link">Add a sheet</RouterLink>
  </main>
</template>

<style>
main{
  text-align: center;
}

ul{
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  text-align: center;
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
 
}
li{
  
  color: white;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}
li a{
  color: white;
}
</style>
