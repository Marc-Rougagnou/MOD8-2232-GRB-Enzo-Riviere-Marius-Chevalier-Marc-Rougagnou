<script setup>
import { onMounted, ref} from 'vue';
import AccountForm from '../components/AccountForm.vue';
import accountService from '../services/account-service.js';
import useAuthenticationService from '../services/authentication-service.js';


//We get the account list
const accounts = ref([]);
onMounted (async () => {
  const response = await accountService.findAccounts();
  accounts.value = response.users;
});

//We create the account and send the list ofg accounts to the service to check if the username or email is already used
function createAccount(newuser){
  accountService.createAccount_(newuser.username,newuser.email,newuser.password,newuser.gender,accounts.value);  
  useAuthenticationService().signUp(newuser.email, newuser.password, newuser.username)
 
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
  background-color: var(--color-black-2);
  color: var(--color-white);
  margin: 2%;
  padding: 1%;
  border:1px solid var(--color-white);
  border-radius: 15px;
}

@media screen and (max-width: 768px) {
  h1{
    font-size:20px;
  }
}
  

</style>