<template>
    <section>
        <nav id="foot">
            <RouterLink to="/" class="link">Home</RouterLink>
            <RouterLink to="/sheets" class="link">Sheets Page</RouterLink>
        </nav>
        <p id="copyright">©NotMyTemp-Corp 2023</p>
    </section>
</template>

<style scoped>

.link{
  text-decoration: none;
  margin-right: 1rem;
  margin-left: 1rem;
}

a{
    color:#FCB90C;
}

section{
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