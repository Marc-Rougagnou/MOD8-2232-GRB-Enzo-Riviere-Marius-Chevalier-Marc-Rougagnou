<script setup>
import {computed, ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import {state} from "../store.js";
import AccountForm from "@/components/AccountForm.vue";
import SheetItem from '../components/SheetItem.vue';
const currentuser = computed(()=>state.current_user)

function modifyAccount(modifyuser){ //security update
  for(let i=0;i<state.users.length;i++){
    if(state.users[i].id===currentuser.value.id){

      if(modifyuser.email===''){
        modifyuser.email=state.users[i].email;
      }
      else if (modifyuser.email!==state.users[i].email){
        for(let j=0;j<state.users.length;j++){
          if(state.users[j].email===modifyuser.email){
            window.alert('Email already used');
            return;
          }
        }
      }

      if(modifyuser.username===''){
        modifyuser.username=state.users[i].username;
      }
      else if (modifyuser.username!==state.users[i].username){
        for(let j=0;j<state.users.length;j++){
          if(state.users[j].username===modifyuser.username){
            window.alert('Username already used');
            return;
          }
        }
      }

      if(modifyuser.password===''){
        modifyuser.password=state.users[i].password;
      }
      if(modifyuser.gender===''){
        modifyuser.gender=state.users[i].gender;
      }
      state.users[i].username=modifyuser.username;
      state.users[i].email=modifyuser.email;
      state.users[i].password=modifyuser.password;
      state.users[i].gender=modifyuser.gender;
      window.alert('Account modified');
      return;
    }
  }
  window.alert('Wrong email or password');
}

const filterList = computed(() => {
  return state.sheets.filter((sheet) =>
    sheet.id_creator === state.current_user.id
  );
});
</script>

<template>
  <section v-if="currentuser.id!==0">
    <div class="details">
      <h1>Profile</h1>
      <p>Username: {{currentuser.username}}</p>
      <p>Email: {{currentuser.email}}</p>
      <p>Gender : {{currentuser.gender}}</p>
    </div>
    <div class="details">
      <h1>Modify my details</h1>
      <AccountForm :button-text="'Modify my Account'" @submit="modifyAccount"/>
    </div>
    <div id="details">
      <h1>Your sheets</h1>
      <ul>
        <li v-for="sheet in filterList" :key="sheet.id" id="ligne">
          <SheetItem :id="sheet.id" id="sheetitem">
            <template #info>
              {{ "Name : " + sheet.title + " | Group : " + sheet.group + " | Instrument : " + sheet.instruments + " | Difficulty :  " + sheet.difficulty + " | Done : " + sheet.done}}
            </template>
            <template #details>|See details</template>
          </SheetItem>
          <RouterLink :to="'/edit-sheet/' + sheet.id" class="link">Edit</RouterLink>
        </li>
      </ul>
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
#sheetitem{
  margin-bottom: 2%;
  padding-bottom: 3%;
}

ul{
  border:hidden;
  background-color: transparent;
}

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

.details {
  background-color: #000000c0;
  
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;
  width: 40%; 
}

#details{
  background-color: #000000c0;
  color: aliceblue;
  margin: 2%;
  padding: 1%;
  border: 1px solid white;
  border-radius: 15px;
  
  width: 40%; 
}

#ligne{
  border-bottom: aliceblue 1px solid;
}

#nologged {
  background-color: #000000c0;
  color: rgb(242, 8, 8);
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
  .details {
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
  }

  div{
    font-size:15px;
  }
  
  section {
    font-size: 16px;
  }

  h1 {
    width: 90%;
    font-size: 24px;
  }

  .details {
    width: 90%;
  }

  #nologged {
    width: 90%;
  }

  li {
    list-style-type: none;
  }
}
</style>
