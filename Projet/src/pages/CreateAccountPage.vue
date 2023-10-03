<script setup>
import AccountForm from '../components/AccountForm.vue';
import {state, id_user,id_sheet} from '../store.js';

function createAccount(newuser){
  console.log('createAccount');
  id_user.value++;
    state.users.push({
      id_user: id_user.value,
      username: newuser.username,
      email: newuser.email,
      password: newuser.password,
      passwordConfirmation: newuser.passwordConfirmation,
      gender:newuser.gender,
    });
    window.alert('Account created');
}

</script>

<template>
  <section>
    <h1>Create account Page</h1>
    <div id="formulaire">
      <AccountForm
      :button-text="'Create Account'" @submit="createAccount" 
      />
    </div>
    <!-- <ul>
      <p>Juste pour vérif que ça s'ajoute bien</p>
    <li v-for="us in state.users" :key="us.id">
      {{ us.username }} + {{ us.email }} + {{ us.gender }}+{{ us.password }}+{{ us.passwordConfirmation }}
    </li>
  </ul> -->
</section>
</template>

<style scoped>
section{
  background-image: url('../../img/backcreate.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  text-align: center;
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  
}



ul{
  color:rgb(255, 255, 255);
  background-color: rgb(6, 6, 6);
}

</style>