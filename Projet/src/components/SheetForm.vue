<script setup>
    import { ref } from 'vue'
    import { sheet_id,state } from '../store.js'

    const emit = defineEmits(['response'])

    const {button_text, sheet_init} = defineProps({
        button_text: String,
        sheet_init : Object
    })

    const current_sheet = ref(sheet_init ? {...sheet_init} : {title: " ", group: " ", difficulty: " ", instruments: " ", done: "No", id: -1, id_creator: state.current_user.id, imageData: ""})
    
    function submit(){
        if(current_sheet.value.id === -1){
            current_sheet.value.id = sheet_id.value++
        }

        emit('response', current_sheet.value)
    }


    const base64Image = ref('');
    const convertImageToBase64 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
            base64Image.value = e.target.result;
            console.log(base64Image.value);
            current_sheet.value.imageData = base64Image.value;
            };
            reader.readAsDataURL(file);   
        }
    };

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

            <input type="file" @change="convertImageToBase64" />

        
            <RouterLink to="/sheets">
                <button @click="submit">{{ button_text || 'No button text passed yet' }}</button>
            </RouterLink>
        </form> 
    </main>
</template>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    fieldset{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>