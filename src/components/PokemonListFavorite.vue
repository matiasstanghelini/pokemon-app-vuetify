<template>
  <v-container height="100vh">
    <v-row class="text-center mb-3" justify="center">
      <v-col cols="12" class="text-center">
        <PokemonSearchBar :items="favorites" />
      </v-col>
      <v-col cols="12" v-for="(favorite, index) in favorites" :key="index"
        ><PokemonCardList :name="favorite" />
      </v-col>
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
