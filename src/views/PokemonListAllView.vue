<template>
  <v-container class="text-center">
    <PokemonLoader v-if="showLoader" />
    <template v-else>
      <v-row no-gutters>
        <v-col cols="12" md="8" class="mx-auto">
          <PokemonListAll />
        </v-col>
      </v-row>
      <PokemonListFooter />
    </template>
  </v-container>
</template>

<script>
import PokemonListAll from "../components/PokemonListAll.vue";
import PokemonListFooter from "../components/footer/PokemonListFooter.vue";
import PokemonLoader from "../components/loaders/PokemonLoader.vue";

export default {
  name: "PokemonListAllView",
  components: {
    PokemonListAll,
    PokemonListFooter,
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
    }, 1500);
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
