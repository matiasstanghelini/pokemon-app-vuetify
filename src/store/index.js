// store/index.js

import { createStore } from "vuex";

export default createStore({
  state: () => ({
    favorites: [],
    selectedPokemon: "",
    pokemonDetails: {},
  }),
  mutations: {
    addFavorite(state, pokemonName) {
      state.favorites.push(pokemonName);
    },
    setSelectedPokemon(state, name) {
      state.selectedPokemon = name;
    },
    setPokemonDetails(state, details) {
      state.pokemonDetails = details;
    },
  },
  actions: {
    updateSelectedPokemon({ commit }, name) {
      commit("setSelectedPokemon", name);
    },
  },
  getters: {
    favorites: (state) => state.favorites,
    getSelectedPokemon: (state) => state.selectedPokemon,
    getPokemonDetails: (state) => state.pokemonDetails,
  },
});
