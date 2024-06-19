<template>
  <div class="loader">
    <img src="@/assets/images/pokedex.png" height="100px" />
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.loader img {
  animation: spin 1s infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
