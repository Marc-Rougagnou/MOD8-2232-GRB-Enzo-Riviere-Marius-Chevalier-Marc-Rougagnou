<script setup>
  import SheetForm from "../components/SheetForm.vue";
  import { ref } from "vue";
  import { state } from "../store.js";

  let btn = ref("add");

</script>

<template>
  <h1>Log In</h1>
  <SheetForm :button_text="btn" @response = "(sheet) => state.sheets.push(sheet)"></SheetForm>
</template>

<style scoped>

</style>