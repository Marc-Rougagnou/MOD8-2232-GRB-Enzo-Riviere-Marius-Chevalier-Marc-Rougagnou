<script setup>
import {computed, ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import store, {state} from "@/store";
import AccountForm from "@/components/AccountForm.vue";
const currentuser = computed(()=>state.current_user)
const router = useRouter();
function modifyAccount(modifyuser){
  for(let i=0;i<state.users.length;i++){
    if(state.users[i].id===currentuser.value.id){
      state.users[i].username=modifyuser.username;
      state.users[i].email=modifyuser.email;
      state.users[i].password=modifyuser.password;
      window.alert('Account modified');
      return;
    }
  }
  window.alert('Wrong email or password');
}


</script>

<template>
  <section v-if="currentuser.id!==0">
    <div id="details">
      <h1>Profile</h1>
      <p>Username: {{currentuser.username}}</p>
      <p>Email: {{currentuser.email}}</p>
      <p>Gender : {{currentuser.gender}}</p>
    </div>
    <div id="formulaire">
      <h1>Modify my details</h1>
      <AccountForm
          :button-text="'Modify my Account'" @submit="modifyAccount"
      />
    </div>
    </section>
  <section v-else>
    <div id="nologged">
      <h1>Profile</h1>
      <p>You are not logged in</p>
      <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
    </div>

  </section>
</template>

<style scoped>
section {
  background-image: url('../../img/backprofile.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  
}

h1 {
  text-align: center;
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;
 
  width: 40%;
}
a{
  color:#FCB90C;
  text-decoration: none;
}

#details {
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;

  width: 40%; 
}

#formulaire {
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;
  width: 40%;
}
#nologged {
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;
  width: 40%; 
  text-align: center;
  align-content: center;
  align-items: center;
}
#nologged h1{
  margin:0 auto;
  margin-bottom: 2%;
}
@media screen and (max-width: 768px) {
  section {
    font-size: 24px;
    flex-direction: column;
    align-items: center;
    text-align: center;

  }
  a{
    color:#FCB90C;
    text-decoration: none;
  }
  section h1 {
    margin: 0 auto;
    margin-bottom: 2%;
    width: 70%;
  }
  #details {
    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 4%;
    width: 70%;
  }
  #formulaire {
    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 4%;
    width: 70%;
  }
  #nologged {
    margin: 0 auto;
    margin-bottom: 2%;
    margin-top: 4%;
    width: 70%;
  }

  img {
    width: 90%;
    margin-bottom: 20px;
    margin-left: auto;
  }}
  div{
    font-size:15px;
  }

</style>
