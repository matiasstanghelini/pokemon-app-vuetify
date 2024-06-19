<template>
  <v-container class="text-center">
    <v-row align="center" justify="center">
      <v-col cols="8">
        <img src="../assets/images/logo.png" alt="" />
      </v-col>
      <v-col cols="12" class="text-center">
        <h1>Welcome to Pokédex</h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <p>
          The digital encyclopedia created by Professor Oak is an invaluable
          tool to Trainers in the Pokémon world.
        </p>
      </v-col>
      <v-col cols="12" class="text-center">
        <GetStartedButton />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GetStartedButton from "../components/buttons/GetStartedButton.vue";

export default {
  name: "GetStartedButtonView",
  components: {
    GetStartedButton,
  },
};
</script>

<style scoped>
.v-container {
  height: 100vh;
}
h1 {
  font-size: 26px;
  font-weight: 700;
  line-height: 31.2px;
  color: #353535;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #5e5e5e;
}
</style>
