<template>
  <v-col cols="4" class="d-flex justify-center">
    <button class="d-flex flex-grow-1 justify-center" @click="$emit('click')">
      <v-icon size="24" color="white">
        {{ icon }}
      </v-icon>
      <span class="text-white">{{ name }}</span>
    </button>
  </v-col>
</template>

<script>
export default {
  name: "GenericLargeButton",
  props: {
    icon: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid transparent;
  font-size: 14px;
  background-color: #ff0000;
  width: 131px;
  height: 44px;
  padding: 11px 20px 11px 20px;
  gap: 10px;
  border-radius: 60px;
  opacity: 0px;
}
</style>
