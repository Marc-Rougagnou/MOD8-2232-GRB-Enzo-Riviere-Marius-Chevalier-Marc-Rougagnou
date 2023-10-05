<script setup>
import { ref} from 'vue';

const { buttonText } = defineProps(['buttonText']);
const emits = defineEmits(['submit']);
const email = ref('');
const password = ref('');

const handleSubmit = () => {
  emits('submit', {
    email: email.value,
    password: password.value,
  });

  email.value = '';
  password.value = '';
}

</script>

<template>
    <form @submit.prevent="handleSubmit" id="form">
        <fieldset class="field">
            <label for="email" class="item">Email:</label>
            <input type="email" v-model="email" name="email" placeholder="Email"  class="item"/>
            <label for="password" class="item">Password:</label>
            <input type="password" v-model="password" name="password" placeholder="Password" class="item" />
        </fieldset>
        <fieldset class="field">
            <RouterLink to="/create-account" class="item">Don't have an account?</RouterLink>
        </fieldset>
        <button id="btn">{{ buttonText}}</button>
    </form>
</template>

<style scoped>
#form{
  text-align: center;
  color:white;
  border:1px solid white;
  border-radius: 30px;
  padding: 2%;
  background-color: #000000c0;
  font-weight: bold;
  border-radius:15px;
} 
.field{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border: transparent;
}
a{
  color:#FCB90C;
  text-decoration: none;
}
#btn{
  background-color: #FCB90C;
  font-weight: bold;
}
#btn:hover{
  background-color: #fcb80c67;
  color: black;
}
</style>