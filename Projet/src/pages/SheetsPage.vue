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
  <main>
    <h1>Sheets</h1>

    <fieldset>
      
      <label for="instru">Instrument</label>
      <select name="instru" id="instru" v-model="selectedInstrument">
          <option value="">--Every instruments--</option>
          <option value="Saxophone">Saxophone</option>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Drums">Drums</option>
      </select>

      <label for="difficulty">Difficulty level</label>
      <select name="difficulty" id="difficulty" v-model="selectedDifficulty">
          <option value="">--Any difficulty--</option>
          <option value="Easy">1</option>
          <option value="Medium">2</option>
          <option value="Hard">3</option>
          <option value="Professional">4</option>
      </select>

      <label for="done">Learned ?</label>
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
                    <p>" "</p>
                    <template #details>| See details</template>

                  </SheetItem>
          </li>
      </ul>
    <RouterLink id="add-button" to='/add-sheets' class="link">
      <button>Add a sheet</button>
    </RouterLink>
  </main>
</template>

<style>

main{
  text-align: center;
}

ul{
  background-color: #D9D9D9;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  width: fit-content;
  border: 1rem solid #D9D9D9;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
li{
  background-color: black;
  color: white;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
}
li a{
  color: white;
}

#button{
  margin-top: 50rem;
}
</style>
