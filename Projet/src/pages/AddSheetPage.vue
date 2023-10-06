<script setup>
  import SheetForm from "../components/SheetForm.vue";
  import { ref } from "vue";
  import { state } from "../store.js";

  let btn = ref("add");
  const openFileExplorer = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.addEventListener("change", (event) => {
      const selectedFile = event.target.files[0]; 

      if (selectedFile) {
        console.log("file selected :", selectedFile.name);
      }
    });
    fileInput.click();
  };
</script>

<template>
  <h1>Add a sheet</h1>
  <section v-if="state.current_user.id!==0">
    <button @click="openFileExplorer">select</button>
    <SheetForm :button_text="btn" @response = "(sheet) => state.sheets.push(sheet)"></SheetForm>
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
a{
  color:#FCB90C;
  text-decoration: none;
}
</style>