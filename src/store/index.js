import { createStore } from "vuex";

export default createStore({
  state: () => ({
    favorites: [],
    selectedPokemon: "",
  }),
  mutations: {
    addFavorite(state, pokemonName) {
      state.favorites.push(pokemonName);
    },
    setSelectedPokemon(state, name) {
      state.selectedPokemon = name;
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
  },
});
