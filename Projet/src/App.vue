<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped>
header{
  background-color: black;
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

footer{
  background-color: rgb(0, 0, 0);
  bottom:0;
  text-align: center;
  position:relative;
  width:100%;
  padding-top: 1%;
}

#copyright{
  color: white;
  padding:0.5%;
}
</style>
