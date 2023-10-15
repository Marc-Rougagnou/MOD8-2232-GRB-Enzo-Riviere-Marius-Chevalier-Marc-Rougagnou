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
    color:var(--color-link);
}

section{
  background-color: var(--color-black);
  text-align: center;
  position:relative;
  width:100%;
  padding-top: 1%;
}

#copyright{
  color: var(--color-white);
  padding:0.5%;
}
</style>