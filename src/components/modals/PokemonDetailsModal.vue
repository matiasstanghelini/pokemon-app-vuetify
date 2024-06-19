<template>
  <v-dialog v-model="openModal" width="500">
    <v-card>
      <v-img height="150" src="@/assets/images/background-pokemon.png" cover>
        <v-container>
          <v-img height="100" src="@/assets/images/logo.png" />
        </v-container>
      </v-img>
      <v-card-item><strong>Name:</strong> {{ name }} </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item><strong>Weight:</strong> {{ weight }} </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item><strong>Height:</strong> {{ height }} </v-card-item>
      <v-divider class="mb-1"></v-divider>
      <v-card-item><strong>Type:</strong> {{ type }} </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      openModal: false,
    };
  },
  props: {
    name: {
      type: String,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    type: {
      type: String,
      required: false,
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
