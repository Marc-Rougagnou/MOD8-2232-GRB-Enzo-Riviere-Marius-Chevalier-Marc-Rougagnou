<script setup>

import { ref } from 'vue'
import SheetForm from "../components/SheetForm.vue";
import { useRoute } from 'vue-router'
import { state } from '../store.js';
import router from '../router';


const edit_btn = ref('Save')
               
const route = useRoute();
const current_sheet_id = parseInt(route.params.id, 10);

const sheet = ref(state.sheets.find((sheet) => sheet.id === current_sheet_id));

const index = state.sheets.findIndex(s => s.id === sheet.value.id);

function remove(del_sheet){

    state.sheets = state.sheets.filter((cur_sheet) => cur_sheet !== del_sheet)

router.push('/');
}

</script>

<template>
    <button id="delete-button" @click="remove(sheet)">Delete</button>
    <SheetForm :sheet_init="sheet" :button_text="edit_btn" @response = "(update_sheet) => state.sheets[index] = update_sheet"></SheetForm>
</template>

<style scoped>

</style>