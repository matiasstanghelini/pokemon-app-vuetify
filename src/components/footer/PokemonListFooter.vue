<template>
  <div class="footer d-flex justify-center">
    <GenericLargeButton
      icon="mdi mdi-format-list-bulleted-square"
      name="All"
      @click="$router.push('/pokemons-list')"
    />
    <GenericLargeButton
      icon="mdi-star"
      name="Favorites"
      @click="$router.push('/pokemons-favorites')"
    />
  </div>
</template>

<script>
import GenericLargeButton from "../buttons/GenericLargeButton.vue";

export default {
  name: "PokemonListFooter",
  components: {
    GenericLargeButton,
  },
};
</script>

<style scoped>
.footer {
  background-color: rgb(250, 250, 250);
  position: fixed;
  bottom: 0;
  border-top: 1px solid #bcbaba;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
