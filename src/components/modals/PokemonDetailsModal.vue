<template>
  <v-dialog v-model="openModal" width="500">
    <v-card>
      <v-img height="150" src="@/assets/images/background-pokemon.png" cover>
        <v-container>
          <v-img height="100" :src="getPokemonDetails.image" />
        </v-container>
      </v-img>
      <v-card-item
        ><strong>Name:</strong> {{ getPokemonDetails.name }}
      </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item
        ><strong>Weight:</strong> {{ getPokemonDetails.weight }}
      </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item
        ><strong>Height:</strong> {{ getPokemonDetails.height }}
      </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item
        ><strong>Type:</strong> {{ getPokemonDetails.types }}
      </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item class="d-flex">
        <GenericShortButton
          text="Share to my friends"
          @click="copyPokemonDetailsToClipboard"
        />
        <v-btn class="ms-5" icon="mdi-star" variant="tonal" color="#BFBFBF" />
      </v-card-item>
      <div v-if="copiedToClipboard" class="copied-message">
        Copied to clipboard
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import GenericShortButton from "../buttons/GenericShortButton.vue";

export default {
  name: "PokemonDetailsModal",
  components: {
    GenericShortButton,
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
  },
  methods: {
    formatPokemonName(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    copyPokemonDetailsToClipboard() {
      const pokemonDetails = `${this.getPokemonDetails.name}, ${this.getPokemonDetails.weight}, ${this.getPokemonDetails.height}, ${this.getPokemonDetails.types}`;
      navigator.clipboard
        .writeText(pokemonDetails)
        .then(() => {
          this.copiedToClipboard = true;
          setTimeout(() => {
            this.copiedToClipboard = false;
          }, 700);
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
        });
    },
  },
};
</script>

<script setup>
import { ref } from "vue";
const openModal = ref(true);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
.v-card {
  font-family: "Lato", sans-serif;
  font-weight: 500;
}

.layout {
  width: 570px;
  height: 506px;
}
.copied-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  animation: fadeOut 2s ease;
}
</style>
