<template>
  <v-img height="150" src="@/assets/images/background-pokemon.png" cover>
    <v-container>
      <v-img height="100" :src="image" />
    </v-container>
  </v-img>
  <v-card-item><strong>Name:</strong> {{ name }} </v-card-item>
  <v-divider />
  <v-card-item><strong>Weight:</strong> {{ weight }} </v-card-item>
  <v-divider />
  <v-card-item><strong>Height:</strong> {{ height }} </v-card-item>
  <v-divider />
  <v-card-item><strong>Type:</strong> {{ types }} </v-card-item>
  <v-divider />
</template>

<script>
export default {
  name: "PokemonAttributes",
  props: ["name", "image", "weight", "height", "types"],
};
</script>
