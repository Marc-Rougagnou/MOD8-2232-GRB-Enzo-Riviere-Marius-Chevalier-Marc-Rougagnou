<script setup>
import { RouterLink } from 'vue-router'
import {computed} from "vue";
import {state} from "../store.js";

const currentId = computed(()=>state.current_user.id)
function signOut(){
  if(state.current_user.id===0){
    window.alert('You are not logged in');
    return;
  }
  state.current_user.id=0;
  state.current_user.username='';
  state.current_user.email='';
  state.current_user.password='';
  state.current_user.gender='';
  window.alert('You are logged out');
}
</script>

<template>
    <section id="title">
      <img src="../../img/logo.ico" />
      <h1><RouterLink to="/" class="link">Not My Tempo</RouterLink></h1>
    </section>
    <section id="nav_top">
      <div>
        <RouterLink to="/sheets" class="link" id="sheetlink">Sheets Page</RouterLink>
      </div>
      <div>
        <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
        <RouterLink to="/create-account" class="link">Create account</RouterLink>
        <RouterLink :to="'/profile/' + currentId" class="link">Profile</RouterLink>
        <button class="link" id="btn" @click="signOut">Sign out</button>
      </div>
    </section>
</template>

<style scoped>
#btn{
  background-color: #000000;
  color: #FCB90C;
  border: 1px solid #FCB90C;
  border-radius: 5px;
  padding: 0.3rem;
  margin: 1rem;
}

section{
  background-color: #000000;
  align-items: center;
}

#title{
  padding:0.5%;
  text-align: center;
  align-items: center;
}

#nav_top{
  justify-content: space-between;
  display: flex;
}

a{
  color:#FCB90C;
}

.link{
  text-decoration: none;
  margin-right: 1rem;
  margin-left: 1rem;
}

@media screen and (max-width: 768px){
  #nav_top{
    flex-direction: column;
  }
  #nav_top div{
    margin:1rem;
  } 
}
</style>