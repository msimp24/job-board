<script setup></script>

<template>
  <main>
    <div class="hero">
      <div class="container row">
        <RouterLink class="link" to="/">
          <h1>dev jobs</h1>
        </RouterLink>
      </div>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.hero {
  background-color: rgb(114, 122, 243);
  width: 100%;
  height: 125px;
  margin: none;
  border-bottom-left-radius: 150px;
  color: white;
}
.link {
  text-decoration: none;
  color: white;
}
</style>
