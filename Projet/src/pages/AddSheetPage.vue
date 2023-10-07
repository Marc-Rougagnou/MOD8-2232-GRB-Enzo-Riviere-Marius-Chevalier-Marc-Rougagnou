<script setup>
  import SheetForm from "../components/SheetForm.vue";
  import { ref } from "vue";
  import { state } from "../store.js";

  let btn = ref("Add sheet");
  
  

</script>

<template>
  <section>
  <h1>Add a sheet</h1>
  <section v-if="state.current_user.id!==0">
    <SheetForm :button_text="btn" @response = "(sheet) => state.sheets.push(sheet)"></SheetForm>
  </section>
  <section v-else>
    <div id="nologged">
      <h1>Profile</h1>
      <p>You are not logged in</p>
      <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
      
    </div>
  </section>
  <input type="file" @change="convertImageToBase64" />
</section>
</template>

<style scoped>



#nologged {
  background-color: #000000c0;
  color: aliceblue;
  padding: 1%;
  border: 1px solid white;
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
  color:#FCB90C;
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
  background-color: #000000c0;
  color: aliceblue;
}
#nologged p{
  margin: 0 auto;
  margin-bottom: 2%;
}
#nologged a:hover{
  color: #000000c0;
}
#nologged a{
  color: #FCB90C;
}

</style>