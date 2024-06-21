<template>
  <v-dialog v-model="openModal" width="500">
    <v-card>
      <PokemonAttributes
        :name="getPokemonDetails.name"
        :image="getPokemonDetails.image"
        :weight="getPokemonDetails.weight"
        :height="getPokemonDetails.height"
        :types="getPokemonDetails.types"
      />
      <v-card-actions>
        <v-row>
          <v-col class="d-flex justify-start">
            <GenericShortButton
              text="Share to my friends"
              @click="copyPokemonDetailsToClipboard"
            />
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              icon="mdi-star"
              variant="tonal"
              :color="
                isButtonSelected(getPokemonDetails.name) ? 'success' : '#BFBFBF'
              "
            />
          </v-col>
        </v-row>
      </v-card-actions>
      <v-snackbar v-model="copiedToClipboard" color="success" :timeout="3000">
        <span class="font-weight-bold">Copied to the clipboard!</span>
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import GenericShortButton from "../buttons/GenericShortButton.vue";
import PokemonAttributes from "./PokemonAttributes.vue";

export default {
  name: "PokemonDetailsModal",
  components: {
    GenericShortButton,
    PokemonAttributes,
  },
  data() {
    return {
      openModal: false,
      copiedToClipboard: false,
    };
  },
  computed: {
    getPokemonDetails() {
      return this.$store.getters.getPokemonDetails;
    },
    favorites() {
      return this.$store.getters.favorites;
    },
  },
  methods: {
    isButtonSelected(name) {
      return this.favorites.some((favorite) => favorite.name === name);
    },
    formatPokemonName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    copyPokemonDetailsToClipboard() {
      const { name, weight, height, types } = this.getPokemonDetails;
      const pokemonDetails = `${name}, ${weight}, ${height}, ${types}`;
      navigator.clipboard.writeText(pokemonDetails).finally(() => {
        this.copiedToClipboard = true;
        setTimeout(() => {
          this.copiedToClipboard = false;
        }, 700);
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.v-card {
  font-family: "Lato", sans-serif;
  font-weight: 500;
}
</style>
