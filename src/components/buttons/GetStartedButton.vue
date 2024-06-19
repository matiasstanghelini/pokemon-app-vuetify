<template>
  <button @click="$router.push('/pokemons-list')">
    <span class="text-white">Get Started</span>
  </button>
</template>

<script>
export default {
  name: "GetStartedButton",
};
</script>

<style scoped>
button {
  border: 1px solid transparent;
  font-size: 14px;
  background-color: #ff0000;
  width: Hug (131px) px;
  height: Hug (44px) px;
  top: 583px;
  left: 511px;
  padding: 11px 20px 11px 20px;
  gap: 10px;
  border-radius: 60px;
  opacity: 0px;
}
</style>
