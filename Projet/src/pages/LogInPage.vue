<script setup>
import SignInForm from '../components/SignInForm.vue';
import {state, id_user,id_sheet} from '../store.js';



</script>

<template>
  <section>
  <h1>Log In</h1>
  <SignInForm
  />
  </section>
</template>

<style scoped>
section{
  background-image: url('../../img/backsignin.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height:80vh;
}
</style>