<template>
  <v-container height="100vh">
    <v-row class="text-center mb-3" justify="center">
      <v-col cols="12" class="text-center">
        <PokemonSearchBar :items="favorites" />
      </v-col>
      <template v-if="favorites.length">
        <v-col cols="12" v-for="favorite in favorites" :key="favorite">
          <PokemonCardList :name="favorite" />
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12" class="text-center">
          <p class="text-center">
            It looks like you don't have favorites yet. Start adding your
            favorite Pokémon first!
          </p>
          <p class="text-center mt-3">
            <v-icon icon="mdi-pokeball"></v-icon>
          </p>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCardList from "../components/cards/PokemonCardList.vue";
import PokemonSearchBar from "../components/search-bar/PokemonSearchBar.vue";

export default {
  name: "PokemonListFavorite",
  components: {
    PokemonCardList,
    PokemonSearchBar,
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
};
</script>

<style scoped>
.v-col {
  padding: 4px;
}
</style>
