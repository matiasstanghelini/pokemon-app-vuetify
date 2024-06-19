<template>
  <v-container class="text-center mx-auto">
    <PokemonLoader v-if="showLoader" />
    <template v-else>
      <v-row no-gutters>
        <v-col cols="12" md="8" class="mx-auto">
          <PokemonListFavorite />
        </v-col>
      </v-row>
      <PokemonListFooter />
    </template>
  </v-container>
</template>

<script>
import PokemonListFooter from "../components/footer/PokemonListFooter.vue";
import PokemonListFavorite from "../components/PokemonListFavorite.vue";
import PokemonLoader from "../components/loaders/PokemonLoader.vue";

export default {
  name: "PokemonListFavoriteView",
  components: {
    PokemonListFooter,
    PokemonListFavorite,
    PokemonLoader,
  },
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
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
