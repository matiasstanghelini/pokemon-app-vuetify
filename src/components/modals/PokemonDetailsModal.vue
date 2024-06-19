<template>
  <v-dialog v-model="openModal" persistent>
    <v-card class="layout mx-auto">
      <v-img height="150" :src="imageUrl" cover></v-img>

      <v-card-title><strong>Name:</strong> {{ name }} </v-card-title>
      <v-divider class="mb-1"></v-divider>
      <v-card-subtitle><strong>Weight:</strong> {{ weight }} </v-card-subtitle>
      <v-divider class="mb-1"></v-divider>
      <v-card-subtitle><strong>Height:</strong> {{ height }} </v-card-subtitle>
      <v-divider class="mb-1"></v-divider>
      <v-card-subtitle><strong>Type:</strong> {{ type }} </v-card-subtitle>
      <v-divider class="mb-1"></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      openModal: false,
      pokemon: "",
    };
  },

  watch: {
    openModal(newVal) {
      if (newVal) {
        console.log(newVal);
        this.fetchPokemon();
      }
    },
  },

  mounted() {
    if (this.$store.getters.getSelectedPokemon) {
      this.fetchPokemon();
    }
  },

  methods: {
    fetchPokemon() {
      const selectedPokemon = this.$store.getters.getSelectedPokemon;
      console.log(selectedPokemon);
      const url = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.pokemon = data;
        })
        .catch((error) => console.error(error));
    },

    closeDialog() {
      this.$emit("close-modal");
      this.openModal = false;
    },
  },

  computed: {
    name() {
      return this.pokemon?.name || "";
    },

    weight() {
      return this.pokemon?.weight || "";
    },

    height() {
      return this.pokemon?.height || "";
    },

    type() {
      return (
        this.pokemon?.types?.map((type) => type.type.name).join(", ") || ""
      );
    },

    imageUrl() {
      return this.pokemon?.sprites?.front_default || "";
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

.layout {
  width: 570px;
  height: 506px;
}
</style>
