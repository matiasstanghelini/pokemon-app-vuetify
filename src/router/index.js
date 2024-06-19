import { createRouter, createWebHistory } from "vue-router";

import GetStartedView from "../views/GetStartedView.vue";
import PokemonListAllView from "../views/PokemonListAllView.vue";
import PokemonFavoriteView from "../views/PokemonFavoriteView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: GetStartedView,
  },
  {
    path: "/pokemons-list",
    name: "pokemonsList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PokemonListAllView,
  },
  {
    path: "/pokemons-favorites",
    name: "pokemonsFavorites",
    component: PokemonFavoriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
