<template>
  <div class="footer d-flex justify-center">
    <GenericLargeButton
      icon="mdi mdi-format-list-bulleted-square"
      name="All"
      @click="$router.push('/pokemons-list')"
      :buttonColor="isActive('/pokemons-list') ? ' #ff0000' : 'grey'"
    />
    <GenericLargeButton
      icon="mdi-star"
      name="Favorites"
      @click="$router.push('/pokemons-favorites')"
      :buttonColor="isActive('/pokemons-favorites') ? ' #ff0000' : 'grey'"
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
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    isActive(path) {
      return this.currentRoute === path;
    },
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
