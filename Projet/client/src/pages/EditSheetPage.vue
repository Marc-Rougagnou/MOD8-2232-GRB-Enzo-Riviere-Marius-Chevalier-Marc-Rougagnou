<script setup>

import { onMounted, ref,watch } from 'vue'
import SheetForm from "../components/SheetForm.vue";
import { useRoute } from 'vue-router'

import router from '../router';
import sheetService from '../services/sheet-service.js';


const edit_btn = ref('Save')
               
const route = useRoute();
const current_sheet_id = parseInt(route.params.id, 10);
const sheets = ref([]);
const current_sheet = ref({});
const sheet_id=ref();
const saveclick=ref(false)
let sheet_id_current=ref()
let current_store=ref()

watch(saveclick,async ()=>{
    if (saveclick.value===true) {
        await updateSheet();
        saveclick.value=false;
    }
    
});



onMounted(async () => {
    const response = await sheetService.findSheet(current_sheet_id);
    current_sheet.value = response.sheet[0];
    const response2=await sheetService.findSheets();
    sheets=response2.sheets;
    current_store=current_sheet.value
    sheet_id_current=current_sheet.value.id
});


function onFormSubmit(sheet,id_sheet){
    current_sheet.value=sheet
    sheet_id.value=id_sheet
    saveclick.value=true
}

//We delete the sheet when we click on the delete button
function remove(){
    sheetService.deleteSheet(sheet_id_current)
    router.push('/');
}

async function updateSheet()
{
//Not the best way to do it but we were obliged to do it like this because of the time and difficulties with emit
//The user can enter just one of the values to modify the sheet
    if (current_sheet.value.title===""){
        current_sheet.value.title=current_store.title
    }
    if(current_sheet.value.group_name===""){
        current_sheet.value.group_name=current_store.group_name
    }
    if(current_sheet.value.instruments===""){
        current_sheet.value.instruments=current_store.instruments
    }
    if(current_sheet.value.difficulty===""){
        current_sheet.value.difficulty=current_store.difficulty
    }
    if(current_sheet.value.done===""){
        current_sheet.value.done=current_store.done
    }
    if(current_sheet.value.imageData===""){
        current_sheet.value.imageData=current_store.imageData
    }
    await sheetService.updateSheet(sheet_id_current, current_sheet.value.title, current_sheet.value.group_name, current_sheet.value.instruments, current_sheet.value.difficulty,current_sheet.value.imageData)
    router.push('/sheets')
}
</script>

<template>
    <main id="back">
        <h2>Title: {{ current_sheet.title}}</h2>
        <h2>Group: {{ current_sheet.group_name }}</h2>
        <h2>Instruments: {{ current_sheet.instruments }}</h2>
        <h2>Difficulty: {{ current_sheet.difficulty }}</h2>

        <button id="delete-button" @click="remove()">Delete</button>
        <SheetForm :sheet_init="current_sheet.value" :button_text="edit_btn" @response = "onFormSubmit"></SheetForm>
    </main>
</template>

<style scoped>

h2{
    padding-top: 1rem;
}

#delete-button {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    margin-top: 2%;
    background-color: var(--color-link);
    color: var(--color-grey);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
    font-size: 1.2em;
    font-weight: bold;
    width: fit-content;
}
#delete-button:hover {
    background-color: var(--color-red);
    color: var(--color-white);
}


</style>