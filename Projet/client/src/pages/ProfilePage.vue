<script setup>
import { onMounted, ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import AccountForm from "@/components/AccountForm.vue";
import SheetItem from '../components/SheetItem.vue';
import accountService from '../services/account-service.js';
import sheetService from '../services/sheet-service.js';
import {useRoute} from 'vue-router';
import {watch} from 'vue';
import useAuthenticationService from "../services/authentication-service.js";
import router from '../router/index.js';

const user = useAuthenticationService().user;
let route = useRoute();
let sheets = ref([]);
const currentuser = ref([]);
let filteredList = ref([]);



onMounted(async () => {

  //We get the current user
  let response = await sheetService.findSheets();
  sheets.value = response.sheets;  
  if(user){
    currentuser.value= await accountService.findAccountByUsername(user.value.username);
  }

  filterList();
});

watch([sheets,currentuser], () => {
  filterList();
});

function modifyAccount(modifyuser){
//Not the best way to do it but we were obliged to do it like this because of the time
//The user can enter just one of the values to modify his account
  
      if(modifyuser.username.trim()===""){
        modifyuser.username=currentuser.username;
      }
      if(modifyuser.email.trim()===""){
        modifyuser.email=currentuser.email;
      }
      if(modifyuser.password.trim()===""){
        modifyuser.password=currentuser.password;
      }
      if(modifyuser.gender.trim()===""){
        modifyuser.gender=currentuser.gender;
      }
    
    accountService.updateAccount(currentuser.value.id,modifyuser.username,modifyuser.email,modifyuser.password,modifyuser.gender)
    window.alert('Account modified');
    router.push('/');
  }

//We filter the list of sheets to get only the sheets that the current user created
async function filterList(){
  filteredList.value=sheets.value.filter((sheet) =>
    sheet.id_creator === currentuser.value.id
  );
  
  return filteredList;
} 
</script>

<template>
  <section v-if="user">
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
        <li v-for="sheet in filteredList" :key="sheet.id" id="ligne">
          <SheetItem :id="sheet.id" id="sheetitem">
            <template #info>
              {{ "Name : " + sheet.title + " | Group : " + sheet.group_name + " | Instrument : " + sheet.instruments + " | Difficulty :  " + sheet.difficulty + " | Done : " + sheet.done}}
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
  background-color: var(--color-LI-h1-bg);
  color: var(--color-PF-white);
  margin: 2%;
  padding: 1%;
  border: 1px solid var(--color-PF-white);
  border-radius: 15px;
  width: 40%;
}
a{
  color:var(--color-link);
  text-decoration: none;
}

.details {
  background-color: var(--color-PF-nolog-bg);
  
  color: var(--color-PF-white);
  margin: 2%;
  padding: 1%;
  border: 1px solid var(--color-PF-white);
  border-radius: 15px;
  width: 40%; 
}

#details{
  background-color:  var(--color-PF-nolog-bg);
  color: var(--color-PF-white);
  margin: 2%;
  padding: 1%;
  border: 1px solid var(--color-PF-white);
  border-radius: 15px;
  
  width: 40%; 
}

#ligne{
  border-bottom: var(--color-PF-white) 1px solid;
}

#nologged {
  background-color: var(--color-PF-nolog-bg);
  color: var(--color-PF-nolog-txt);
  margin: 2%;
  padding: 1%;
  border: 1px solid var(--color-PF-white);
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
    color:var(--color-link);
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
