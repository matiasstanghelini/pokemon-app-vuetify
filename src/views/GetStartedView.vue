<template>
  <v-container class="text-center">
    <v-row class="full-height" align="center" justify="center">
      <v-col cols="12" class="text-center">
        <div class="logo-container">
          <img src="../assets/images/logo.png" alt="" class="logo-image" />
        </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.full-height {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-container {
  position: relative;
  background-color: #ff0000;
  border: 3px solid black;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

.logo-image {
  position: absolute;
  transform: translateX(-47%);
  width: 118%;
  height: auto;
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
