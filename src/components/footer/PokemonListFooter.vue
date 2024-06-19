<template>
  <div class="footer d-flex justify-center">
    <GenericButton
      icon="mdi mdi-format-list-bulleted-square"
      name="All"
      @click="$router.push('/pokemons-list')"
    />
    <GenericButton
      icon="mdi-star"
      name="Favorites"
      @click="$router.push('/pokemons-favorites')"
    />
  </div>
</template>

<script>
import GenericButton from "../buttons/GenericButton.vue";

export default {
  name: "PokemonListFooter",
  components: {
    GenericButton,
  },
};
</script>

<style scoped>
.footer {
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
