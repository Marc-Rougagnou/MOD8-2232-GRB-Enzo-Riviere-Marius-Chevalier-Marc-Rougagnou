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
                      {{ "Name : " + sheet.title + " | Group : " + sheet.group + " | Instrument : " + sheet.instruments + " | Difficulty : " +sheet.difficulty + " | Done : " + sheet.done + " | "}}
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

h1{
  color: #FCB90C;
  text-align: center;
  padding:1rem;
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

.filters label {
  font-weight: bold;
}

.filters select {
  padding: 0.5rem;
  border: 2px solid #FCB90C;
  border-radius: 0.5rem;
  font-size: 1rem;
}
input{
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

#f1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border: 2px solid #FCB90C;
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
  border: 2px solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem;

}

#sheetsearch{
  margin :10px;
  border: 2px solid #000000;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 40%;
}
.custom-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(148, 147, 147, 0.9);
  color: #fff;
  border: 2px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;
}

.custom-button:hover {
  background-color:#FCB90C;
  color: black;
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




