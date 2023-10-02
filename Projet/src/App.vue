<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section id="title">
      <img src="../img/logo.ico" />
      <h1><RouterLink to="/" id="link">Not My Tempo</RouterLink></h1>
    </section>
    <section id="nav_top">
      <RouterLink to="/sheets" id="link" class="left">Sheets Page</RouterLink>
      <div id="right">
        <RouterLink to="/sign-in" id="link" class="right">Sign in</RouterLink>
        <RouterLink to="/create-account" id="link" class="right">Create account</RouterLink>
        <button id="btn">Sign out</button>
      </div>
    </section>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    <nav>
      <RouterLink to="/" id="link">Home</RouterLink>
      <RouterLink to="/sheets" id="link">Sheets Page</RouterLink>
    </nav>
    <p id="copyright">©NotMyTemp-Corp 2023</p>
  </footer>
</template>

<style scoped>
header{
  display:flexbox;
  background-color: black;
  align-items: center;
}
#title{
  padding:0.5%;
  text-align: center;
  align-items: center;
  
}
#copyright{
  color: white;
  padding:0.5%;
}
a{
  color:#FCB90C;
}
#nav_top{
  overflow: hidden;
}
#link{
  padding:1%;
  text-decoration: none;
}

#btn{
  text-align: center;
  align-items: center;
  width: auto;
}
#left{
  float: left;
  display: flex;
}
#right{
  float: right;
  display: flexbox;
  justify-content: space-between;
}
footer{
  background-color: rgb(0, 0, 0);
  bottom:0;
  text-align: center;
  position:fixed;
  width:100%;
  padding-top: 1%;
}

</style>
