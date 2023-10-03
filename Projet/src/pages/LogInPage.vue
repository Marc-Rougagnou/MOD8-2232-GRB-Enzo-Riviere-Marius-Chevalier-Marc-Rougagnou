<script setup>
import SignInForm from '../components/SignInForm.vue';
import { state } from '../store.js';

function signIn(tryuser){
  for(let i=0;i<state.users.length;i++){
    if(state.users[i].email===tryuser.email && state.users[i].password===tryuser.password){
      window.alert('You are logged in');
      return;
    }
  }
  window.alert('Wrong email or password');
}
</script>

<template>
  <section>
    <h1>Log In</h1>
    <SignInForm 
      :button-text="'Log In'" @submit="signIn" 
    />
  </section>
</template>

<style scoped>
section {
  background-image: url('../../img/backsignin.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border:1px solid white;
  border-radius: 15px;
}

</style>
