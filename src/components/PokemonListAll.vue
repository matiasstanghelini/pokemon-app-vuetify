<template>
  <v-container>
    <v-row class="text-center mb-3" justify="center">
      <v-col>
        <PokemonSearchBar
          :items="pokemonNames"
          @update:searchResults="updateSearchResults"
        />
      </v-col>
      <v-col cols="12" v-if="searchPerformed && filteredPokemons.length === 0">
        <GoBackHomeView />
      </v-col>
      <v-col cols="12" v-if="filteredPokemons.length === 0 && !searchPerformed">
        <WelcomeView />
      </v-col>
      <v-col
        cols="12"
        v-else
        v-for="pokemon in filteredPokemons"
        :key="pokemon.name"
      >
        <PokemonCardList
          :name="pokemon.name"
          @add-to-favorite="addToFavorites"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PokemonCardList from "@/components/cards/PokemonCardList.vue";
import PokemonSearchBar from "@/components/search-bar/PokemonSearchBar.vue";
import GoBackHomeView from "@/views/GoBackHomeView.vue";
import WelcomeView from "@/views/WelcomeView.vue";

export default {
  name: "PokemonListAll",
  components: {
    PokemonCardList,
    PokemonSearchBar,
    GoBackHomeView,
    WelcomeView,
  },
  data() {
    return {
      pokemons: [],
      pokemonNames: [],
      searchResults: [],
      searchPerformed: false,
    };
  },
  computed: {
    filteredPokemons() {
      if (!this.searchPerformed || this.searchResults.length > 0) {
        return this.pokemons.filter((pokemon) =>
          this.searchResults.includes(pokemon.name)
        );
      }
      return [];
    },
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons() {
      fetch("https://pokeapi.co/api/v2/pokemon") // Limitar a los primeros 151 Pokémon
        .then((response) => response.json())
        .then((data) => {
          this.pokemons = data.results;
          this.pokemonNames = this.pokemons.map((pokemon) => pokemon.name);
        });
    },
    addToFavorites(name) {
      this.$store.commit("addFavorite", name);
    },
    updateSearchResults(results, search) {
      this.searchResults = results;
      this.searchPerformed = search.length > 0;
    },
  },
};
</script>

<style scoped>
.v-btn {
  font-family: Lato;
}
.v-container {
  height: 100vh;
}
.v-col {
  padding: 4px;
}
</style>
