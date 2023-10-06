<script setup>
    import { ref } from 'vue'
    import { sheet_id,state } from '../store.js'

    const emit = defineEmits(['response'])

    const {button_text, sheet_init} = defineProps({
        button_text: String,
        sheet_init : Object
    })

    const current_sheet = ref(sheet_init ? {...sheet_init} : {title: " ", group: " ", difficulty: " ", instruments: " ", done: "No", id: -1, id_creator: state.current_user.id})
    
    function submit(){
        if(current_sheet.value.id === -1){
            current_sheet.value.id = sheet_id.value++
        }

        emit('response', current_sheet.value)
    }
</script>

<template>
    <main>
        <form @submit.prevent>
            <fieldset >
                <label for="sheet-title"> Sheet Title : </label>
                <input type="text" id="sheet-title" name="sheet-title" v-model= "current_sheet.title" placeholder="Sheet title"> 
            </fieldset>
            <fieldset>
                <label for="sheet-group">Sheet group : </label>
                <input type="text" id="sheet-group" name="sheet-group" v-model= "current_sheet.group" placeholder="sheet group">
            </fieldset>
            <fieldset>
                <label for="instru">Instrument</label>
                <select id="sheet-instrument" name="sheet-instrument" v-model="current_sheet.instruments">
                    <option value="Saxophone">Saxophone</option>
                    <option value="Piano">Piano</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Drums">Drums</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="sheet-difficulty">Difficulty level</label>
                <select id="sheet-difficulty" name="sheet-difficulty" v-model="current_sheet.difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Professional">Professional</option>
                </select>
            </fieldset>


            <RouterLink to="/">
                <button @click="submit">{{ button_text || 'No button text passed yet' }}</button>
            </RouterLink>
        </form> 
    </main>
</template>

<style scoped>
fieldset {
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width: 20%;
    margin: 0 auto;
    margin-bottom: 2%;
    border: none;
}
input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 auto;
}
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0 auto;
}
button {
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

button:hover {
  background-color:#FCB90C;
  color: black;
}

button span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

</style>