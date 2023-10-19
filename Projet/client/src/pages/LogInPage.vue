<script setup>
import SignInForm from '../components/SignInForm.vue';
import useAuthenticationService from '../services/authentication-service.js';

//We log in using the authentication service
function signIn(tryuser){
    if(tryuser.email==='' || tryuser.password===''){
      window.alert('Please fill all the fields');
      return;
    }
    useAuthenticationService().logIn(tryuser.email, tryuser.password);
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
  background-color: var(--color-LI-h1-bg);
  color: var(--color-LI-h1-txt);
  margin: 2%;
  padding: 1%;
  border:1px solid var(--color-LI-h1-txt);
  border-radius: 15px;
}

</style>
