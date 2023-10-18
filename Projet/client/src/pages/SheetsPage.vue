<script setup>
import { computed, ref, onMounted, watch } from "vue";
import SheetItem from "../components/SheetItem.vue";
import sheetService from "../services/sheet-service.js";

const input = ref("");
const selectedInstrument = ref("");
const selectedDifficulty = ref("");
const selectedDone = ref("");
const sheets = ref();
const filteredList = ref([])

onMounted(async () => {
  
  const response = await sheetService.findSheets();
  sheets.value = response.sheets;
  filteredList.value = response.sheets;
  filteredList_;
  
});

watch([input, selectedInstrument, selectedDifficulty, selectedDone,filteredList.value], async () => {
  console.log("watch");
  const response = await sheetService.findSheets();
  sheets.value = response.sheets;
  filteredList.value = response.sheets;
  filteredList_();
  
});

input.value=" ";
input.value="";

async function filteredList_(){
  
  filteredList.value = sheets.value.filter((sheet) =>
    (sheet.title.toLowerCase().includes(input.value.toLowerCase()) ||
     sheet.group_name.toLowerCase().includes(input.value.toLowerCase())) &&
    (sheet.instruments.toLowerCase().includes(selectedInstrument.value.toLowerCase())) &&
    (sheet.difficulty.toLowerCase().includes(selectedDifficulty.value.toLowerCase())) &&
    (sheet.done.toLowerCase().includes(selectedDone.value.toLowerCase()))
  );
}

</script>

<template>
  <main>
    <h1>Sheets</h1>

    <fieldset id="f1">

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

    <input id="sheetsearch" type="text" placeholder="Search for sheets..." v-model="input"/>

      <ul>
        <li  v-for="sheet in filteredList" :key="sheet.id">
          <SheetItem :id="sheet.id" class="link">
            <template #info>
              {{ "Name : " + sheet.title + " | Group : " + sheet.group_name + " | Instrument : " + sheet.instruments + " | Difficulty : " +sheet.difficulty + " | Done : " + sheet.done + " | "}}
            </template>
            <p>" "</p>
            <template #details>See details</template>
          </SheetItem>
        </li>
      </ul>
    <RouterLink id="add-button" to='/add-sheets' class="link">
      <button class="custom-button">Add a sheet</button>
    </RouterLink>
  </main>
</template>

<style>
main{
  text-align: center;
  background-image: url('../../img/back-sheet-list.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 110vh;
}

@media (prefers-color-scheme: dark){
  main{
    background-image: url('../../img/backsheetpage.jpg');
  }
}

h1{
  color: var(--color-link);
  text-align: center;
  padding:1rem;
}

ul{
  background-color: var(--color-grey);
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  width: fit-content;
  border: 1rem solid var(--color-grey);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
li{
  background-color: var(--color-black);
  color: var(--color-white);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border: 0.2rem solid var(--color-black);
  border-radius: 0.5rem;
}
li a{
  color: var(--color-white);
}

.filters label {
  font-weight: bold;
}

.filters select {
  padding: 0.5rem;
  border: 2px solid var(--color-link);
  border-radius: 0.5rem;
  font-size: 1rem;
}
input{
  border: 2px solid var(--color-black);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

#f1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border: 2px solid var(--color-link);
  border-radius: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto; 
  width: fit-content;
}
fieldset label{
  margin-right: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;

}
fieldset select{
  margin-right: 1rem;
  border: 2px solid var(--color-black);
  border-radius: 0.5rem;
  padding: 0.5rem;

}

#sheetsearch{
  margin :10px;
  border: 2px solid var(--color-black);
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 40%;
}
.custom-button {
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

.custom-button:hover {
  background-color:var(--color-link);
  color: var(--color-black);
}

.custom-button span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
.link{
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  #f1{
    flex-direction: column;
    
  }
  #sheetsearch{
    width: 80%;
  }
  #add-button{
    margin-top: 1rem;
  }
  
}

</style>




