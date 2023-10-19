<script setup>
  import SheetForm from "../components/SheetForm.vue";
  import { onMounted, ref } from "vue";
  import sheetService from "../services/sheet-service";
  import useAuthenticationService from "../services/authentication-service.js";
  import accountService from "../services/account-service.js";

  const user = useAuthenticationService().user;

  

  const curuser=ref([])

//We get the current user to have the id of the creator
  onMounted(async () => {
   
    if(user){
      curuser.value=await accountService.findAccountByUsername(user.value.username);
    }
    
  });

  let btn = ref("Add sheet");

</script>

<template>
  <section>
  
  <section v-if="user">
    <h1>Add a sheet</h1>
    <SheetForm :button_text="btn" @response="(current_sheet)=> sheetService.createSheet(current_sheet.title, current_sheet.group_name, current_sheet.instruments, current_sheet.difficulty,curuser.id,current_sheet.imageData)"></SheetForm>
  </section>
  <section v-else>
    <div id="nologged">
      <h1>Profile</h1>
      <p>You are not logged in</p>
      <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
      
    </div>
  </section>
</section>
</template>

<style scoped>

#nologged {
  background-color: var(--color-black-2);
  color: var(--color-red);
  padding: 1%;
  border: 1px solid var(--color-white);
  border-radius: 15px;
  width: 40%; 
  text-align: center;
  align-content: center;
  align-items: center;
  margin: 2% auto;
}
#nologged h1{
  margin:0 auto;
  margin-bottom: 2%;

}
a{
  color:var(--color-link);
  text-decoration: none;
}
h1{
  text-align: center;
}
button{
  background-color: #FCB90C;
  border: 1px solid #FCB90C;
  border-radius: 15px;
  padding: 1%;
  margin: 1%;
  font-weight: bold;
}
button:hover{
  background-color: var(--color-black-2);
  color: var(--color-white);
}
#nologged p{
  margin: 0 auto;
  margin-bottom: 2%;
}
#nologged a:hover{
  color: var(--color-black-2);
}
#nologged a{
  color: var(--color-link);
}



</style>