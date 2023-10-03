<script setup>
    // import { ref } from 'vue'

    // const {button_text, sheet_init} = defineProps({
    //     button_text: String,
    //     sheet_init : Object
    // })

    // const current_sheet = ref(sheet_init ? {...sheet_init} : {title: " ", author: " ", pageCount: " ", id: -1})
</script>

<template>
    <!-- <main>
        <form @submit.prevent>
            <fieldset>
                <label for="sheet-title"> Sheet Title : </label>
                <input type="text" id="sheet-title" name="sheet-title" v-model= "current_sheet.title" placeholder="Sheet title"> 
            </fieldset>
            <fieldset>
                <label for="sheet-group">Sheet group : </label>
                <input type="text" id="sheet-group" name="sheet-group" v-model= "current_sheet.group" placeholder="sheet group">
            </fieldset>
            <fieldset>
                <label for="sheet-instrument">Instrument for the sheet : </label>
                <input type="text" id="sheet-instrument" name="sheet-instrument" v-model= "current_sheet.pageCount" placeholder="Page count">
            </fieldset>
            <fieldset>
                <label for="sheet-difficulty">Difficulty of the sheet : </label>
                <input type="text" id="sheet-difficulty" name="sheet-difficulty" v-model= "current_sheet.pageCount" placeholder="Page count">
            </fieldset>
            <RouterLink to="/">
                <button @click="submit">{{ button_text || 'No button text passed yet' }}</button>
            </RouterLink>
        </form> 
    </main> -->
</template>
