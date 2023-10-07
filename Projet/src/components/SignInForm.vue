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
  color:var(--color-SI-form-txt);
  border:1px solid var(--color-SI-form-txt);
  border-radius: 30px;
  padding: 2%;
  background-color: var(--color-SI-form-bg);
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
  color:var(--color-link);
  text-decoration: none;
}
#btn{
  background-color: var(--color-link);
  font-weight: bold;
}
#btn:hover{
  background-color: var(--color-SI-btn-hover);
  color: var(--color-SI-btn-txt);
}
</style>