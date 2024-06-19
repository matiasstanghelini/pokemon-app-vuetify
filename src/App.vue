<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

#app {
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 700;
  background-color: #f9f9f9;
}
</style>
