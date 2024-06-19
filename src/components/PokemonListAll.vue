<template>
  <v-container>
    <v-row class="text-center mb-3" justify="center">
      <v-col>
        <PokemonSearchBar
          :items="pokemonNames"
          @update:searchResults="onSearchResultsUpdate"
        />
      </v-col>
      <v-col cols="12" v-if="isSearchWithoutResults">
        <GoBackHomeView />
      </v-col>
      <v-col cols="12" v-if="isNoPokemonsFound">
        <WelcomeView />
      </v-col>
      <v-col cols="12" v-for="pokemon in filteredPokemons" :key="pokemon.name">
        <PokemonCardList
          :name="pokemon.name"
          @add-to-favorite="addToFavorites"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import PokemonCardList from "@/components/cards/PokemonCardList.vue";
import PokemonSearchBar from "@/components/search-bar/PokemonSearchBar.vue";
import GoBackHomeView from "@/views/GoBackHomeView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import { useStore } from "vuex";

const store = useStore();

const pokemons = ref([]);
const pokemonNames = ref([]);
const searchResults = ref([]);
const searchPerformed = ref(false);

const filteredPokemons = computed(() => {
  if (!searchPerformed.value || searchResults.value.length > 0) {
    return pokemons.value.filter((pokemon) =>
      searchResults.value.includes(pokemon.name)
    );
  }
  return [];
});

const isSearchWithoutResults = computed(
  () => searchPerformed.value && filteredPokemons.value.length === 0
);
const isNoPokemonsFound = computed(
  () => filteredPokemons.value.length === 0 && !searchPerformed.value
);

const selectedPokemon = computed(() => store.getters.getSelectedPokemon);

onMounted(() => {
  fetchPokemons();
});

function fetchPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
      pokemons.value = data.results;
      pokemonNames.value = pokemons.value.map((pokemon) => pokemon.name);
    });
}

watch(selectedPokemon, async (newValue) => {
  if (newValue) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${newValue}`
      );
      if (response.ok) {
        const data = await response.json();

        const PokemonDetails = {
          name: data.name,
          height: data.height,
          weight: data.weight,
        };
        store.commit("setPokemonDetails", PokemonDetails);
      }
    } catch (error) {
      console.error(error);
    }
  }
});

function addToFavorites(name) {
  store.commit("addFavorite", name);
}

function onSearchResultsUpdate(results, search) {
  searchResults.value = results;
  searchPerformed.value = search.length > 0;
}
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
