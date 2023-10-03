<script setup>
import {computed, ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import store, {state} from "@/store";
const currentuser = computed(()=>state.current_user)
const router = useRouter();


</script>

<template>
  <section v-if="currentuser.id!=0">
    <h1>Profile</h1>
    <p>Username: {{currentuser.username}}</p>
    <p>Email: {{currentuser.email}}</p>
    <p>Password: {{currentuser.password}}</p>
    <p>Id: {{currentuser.id}}</p>
    </section>
  <section v-else>
    <h1>Profile</h1>
    <p>You are not logged in</p>
    <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
  </section>





</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

/* Style de la section profil */
section {
  background-color: white;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px orange;
}

h1 {
  font-size: 24px;
  text-align: center;
}

/* Style des informations utilisateur */
p {
  font-size: 18px;
  margin-bottom: 10px;
}

/* Style du lien de connexion */
.link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0078d4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.link:hover {
  background-color: #005ea2;
}

</style>