<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <button @click="handleButtonSelection">
          <v-card-title class="text-h5">{{
            formatPokemonName(name)
          }}</v-card-title>
        </button>
      </div>
      <div>
        <PokemonDetailsModal
          :name="name"
          v-model="dialog"
          @close-modal="closeDialog"
        />
        <v-card-actions>
          <v-btn
            class="ms-2"
            icon="mdi-star"
            variant="tonal"
            :color="isButtonSelected(name) ? '#ECA539' : '#BFBFBF'"
            @click="handleButtonSelection(name)"
          />
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import PokemonDetailsModal from "@/components/modals/PokemonDetailsModal.vue";

export default {
  name: "PokemonCardList",
  components: {
    PokemonDetailsModal,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    formatPokemonName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },

    isButtonSelected(name) {
      return this.$store.state.favorites.includes(name);
    },

    handleButtonSelection(name) {
      this.$emit("add-to-favorite", name);
    },

    handleButtonSelection() {
      this.dialog = true;
      this.$store.dispatch("updateSelectedPokemon", this.name);
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.v-card {
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 700;
}
</style>
