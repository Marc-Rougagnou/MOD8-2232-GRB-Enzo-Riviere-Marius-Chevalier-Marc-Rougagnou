<script setup>
import { ref} from 'vue';
import {state, id_user,id_sheet} from '../store.js';


const { buttonText } = defineProps(['buttonText']);
const emits = defineEmits(['submit']);

const handleSubmit = () => {
  emits('submit', {
    
  });
  

};
</script>

<template>
    <form @submit.prevent>
        <fieldset>
            <label for="email">Email:</label>
            <input type="email" name="email" placeholder="Email" />
            <label for="password">Password:</label>
            <input type="password" name="password" placeholder="Password" />
        </fieldset>
        <fieldset>
            <RouterLink to="/create-account" class="link">Don't have an account?</RouterLink>
        </fieldset>
        <button @click="handleSubmit" id="btn">{{ buttonText}}</button>
    </form>
</template>

<style scoped>

</style>