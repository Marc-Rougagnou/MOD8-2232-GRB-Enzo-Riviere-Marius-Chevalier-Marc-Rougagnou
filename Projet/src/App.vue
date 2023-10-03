<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section id="title">
      <img src="../img/logo.ico" />
      <h1><RouterLink to="/" class="link">Not My Tempo</RouterLink></h1>
    </section>
    <section id="nav_top">
      <div>
        <RouterLink to="/sheets" class="link">Sheets Page</RouterLink>
      </div>
      <div>
        <RouterLink to="/sign-in" class="link">Sign in</RouterLink>
        <RouterLink to="/create-account" class="link">Create account</RouterLink>
        <button class="link">Sign out</button>
      </div>
    </section>
  </header>
  
  <RouterView />
  
  <footer>
    <nav>
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/sheets" class="link">Sheets Page</RouterLink>
    </nav>
    <p id="copyright">©NotMyTemp-Corp 2023</p>
  </footer>
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
