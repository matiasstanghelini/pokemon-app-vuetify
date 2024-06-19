<template>
  <v-container height="100vh">
    <v-row class="text-center mb-3" justify="center">
      <v-col>
        <PokemonSearchBar :items="pokemonNames" />
      </v-col>
      <v-col cols="12" v-for="pokemon in pokemons" :key="pokemon.name">
        <PokemonCardList :name="pokemon.name" @add-to-favorite="addToFavorites"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCardList from "@/components/cards/PokemonCardList.vue";
import PokemonSearchBar from "@/components/search-bar/PokemonSearchBar.vue";

export default {
  name: "PokemonListAll",
  components: {
    PokemonCardList,
    PokemonSearchBar,
  },
  data() {
    return {
      pokemons: [],
      pokemonNames: [],
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons() {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
          this.pokemons = data.results;

          this.pokemonNames = this.pokemons.map((pokemon) => {
            return pokemon.name;
          });
        });
    },
    addToFavorites(name) {
      this.$store.commit("addFavorite", name);
    },
  },
};
</script>

<style scoped>
.v-col {
  padding: 4px;
}
</style>
