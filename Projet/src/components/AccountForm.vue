<script setup>
import { ref} from 'vue';

const { buttonText } = defineProps(['buttonText']);
const emits = defineEmits(['submit']);

const username = ref('');
const email = ref('');
const password = ref('');
const gender=ref('');

const handleSubmit = () => {
  emits('submit', {
    username: username.value,
    email: email.value,
    password: password.value,
    gender: gender.value,
  });
  
  username.value = '';
  email.value = '';
  password.value = '';
  gender.value='';
};
</script>

<template>
    
  <form @submit.prevent id="form">
    <fieldset class="field">
        <label for="username" class="item">Username:</label>
        <input type="text" v-model="username" placeholder="Username" id="item" class="item">
        <label for="email" class="item">Email:</label>
        <input type="email" v-model="email" placeholder="Email" class="item">
    </fieldset>
    <fieldset class="field">
        <label for="password" class="item">Password:</label>
        <input type="password" v-model="password" placeholder="Password" class="item">
    </fieldset>
    <fieldset id="radio">
        <legend>Choose your gender</legend>
        <div>
            <input type="radio" v-model="gender" id="man" name="gender" value="Man" class="item">
            <label for="man">Man</label>
        </div>
        <div>
            <input type="radio" v-model="gender" id="woman" name="gender" value="Woman" class="item">
            <label for="woman">Woman</label>
        </div>
        <div>
            <input type="radio" v-model="gender" id="other" name="gender" value="Other" class="item">
            <label for="other">Other</label>
        </div>
    </fieldset>
    <button @click="handleSubmit" id="btn">{{ buttonText}}</button>
  </form>
    
</template>


<style scoped>

#form{
  text-align: center;
  color:white;
  border:1px solid white;
  border-radius: 30px;
  padding:2%;
  background-color: #000000c0;
  font-weight: bold;
  border-radius:15px;
} 
.field{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  border: transparent;
}
.item{
  padding-left: 3%;
  padding-right:3%;
}

#radio{
  border-radius: 15px;
  margin:3%;
}

#btn{
  margin:2%;
  background-color: #FCB90C;
  font-weight: bold;
}
#btn:hover{
  background-color: #fcb80c67;
  color: black;
}
</style>

