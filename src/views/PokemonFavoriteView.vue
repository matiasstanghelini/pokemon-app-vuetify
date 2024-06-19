<template>
  <v-container class="text-center">
    <v-row no-gutters>
      <v-col cols="12" md="8" class="mx-auto">
        <PokemonListFavorite />
      </v-col>
    </v-row>
  </v-container>
  <v-container class="text-center">
    <PokemonListFooter />
  </v-container>
</template>

<script>
import PokemonListFooter from "../components/footer/PokemonListFooter.vue";
import PokemonListFavorite from "../components/PokemonListFavorite.vue";

export default {
  name: "PokemonListFavoriteView",
  components: {
    PokemonListFooter,
    PokemonListFavorite,
  },
};
</script>

<style scoped>
.v-container {
  height: 100vh;
}
.v-col {
  padding: 4px;
}
</style>
