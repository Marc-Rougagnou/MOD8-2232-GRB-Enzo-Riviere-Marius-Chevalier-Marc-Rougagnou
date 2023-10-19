<script setup>
import { onMounted, ref,watch } from 'vue';
import router from '../router';
import useAuthenticationService from "../services/authentication-service.js";
import accountService from "../services/account-service.js";

const user = useAuthenticationService().user;
const curuser=ref([])



const emit = defineEmits(['response'])

onMounted(async () => {
    curuser.value=await accountService.findAccountByUsername(user.value.username);
    console.log(curuser.value.id)
});

const { button_text, sheet_init } = defineProps({
    button_text: String,
    sheet_init: Object,
})

const current_sheet = ref(sheet_init ? { ...sheet_init } : { title: "", group_name: "", difficulty: "", instruments: "", done: "No", id_creator: curuser.value.id, imageData: "" })

function submit() {
    emit('response', current_sheet.value)
    router.push('/sheets')
}

watch(sheet_init,()=>{
    current_sheet.value = { ...sheet_init }
    
},{deep:true})


const base64Image = ref('');
const convertImageToBase64 = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            base64Image.value = e.target.result;
            current_sheet.value.imageData = base64Image.value;
        };
        reader.readAsDataURL(file);
    }
};

</script>

<template>
    <section>
        <form @submit.prevent="submit">
            <fieldset>
                <label for="sheet-title">Title: </label>
                <input type="text" id="sheet-title" name="sheet-title" v-model="current_sheet.title"
                    placeholder="Sheet title">
            </fieldset>
            <fieldset>
                <label for="sheet-group">Group: </label>
                <input type="text" id="sheet-group" name="sheet-group" v-model="current_sheet.group_name"
                    placeholder="sheet group">
            </fieldset>
            <fieldset>
                <label for="instru">Instrument: </label>
                <select id="sheet-instrument" name="sheet-instrument" v-model="current_sheet.instruments">
                    <option value="Saxophone">Saxophone</option>
                    <option value="Piano">Piano</option>
                    <option value="Guitar">Guitar</option>
                    <option value="Drums">Drums</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="sheet-difficulty">Difficulty: </label>
                <select id="sheet-difficulty" name="sheet-difficulty" v-model="current_sheet.difficulty">
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Professional">Professional</option>
                </select>
            </fieldset>
            <section id="sct">
                <input type="file" @change="convertImageToBase64" />
                <button>{{ button_text || 'No button text passed yet' }}</button>
            </section>
        </form>
    </section>
</template>

<style scoped>
#sct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

input::file-upload-button {
    background-color: var(--color-link);
    border: 1px solid var(--color-link);
    border-radius: 15px;
    padding: 1%;
    margin: 1%;
    font-weight: bold;
    color: var(--color-black);
}


fieldset {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    border: none;
}

input {
    width: fit-content;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    margin: 0 auto;
}

select {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 5px;
    margin: 0 auto;
}

button {
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
    margin-bottom: 2rem;
}

button:hover {
    background-color: var(--color-link);
    color: var(--color-black);
}

button span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
}</style>