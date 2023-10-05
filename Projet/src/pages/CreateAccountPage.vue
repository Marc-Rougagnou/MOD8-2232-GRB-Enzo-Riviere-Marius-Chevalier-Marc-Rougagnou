<script setup>
import AccountForm from '../components/AccountForm.vue';
import {state, id_user} from '../store.js';

function createAccount(newuser){// security update
  id_user.value++;
  if(newuser.email==='' || newuser.password==='' || newuser.username===''||newuser.gender===''){
    window.alert('Please fill all the fields');
    return;
    }
  for(let i=0;i<state.users.length;i++){
    if(state.users[i].email===newuser.email){
      window.alert('Email already used');
      return;
    }
  }
  for(let i=0;i<state.users.length;i++){
    if(state.users[i].username===newuser.username){
      window.alert('Username already used');
      return;
    }
  }
  state.users.push({
    id_user: id_user.value,
    username: newuser.username,
    email: newuser.email,
    password: newuser.password,
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
</section>
</template>

<style scoped>
section {
  background-image: url('../../img/backcreate.jpg');
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