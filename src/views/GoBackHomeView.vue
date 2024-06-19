<template>
  <v-row class="text-center">
    <v-col cols="12">
      <h1>Uh-oh!</h1>
    </v-col>
    <v-col cols="12">
      <p>You look lost on your journey!</p>
    </v-col>
    <v-col cols="12">
      <GenericShortButton @click="$router.push('/')" text="Go Back Home" />
    </v-col>
  </v-row>
</template>

<script>
import GenericShortButton from "../components/buttons/GenericShortButton.vue";
export default {
  name: "GoBackHomeView",
  components: {
    GenericShortButton,
  },
};
</script>
