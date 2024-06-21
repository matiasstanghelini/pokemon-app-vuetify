<template>
  <v-col cols="4" class="d-flex justify-center">
    <button
      class="d-flex flex-grow-1 justify-center"
      :style="buttonStyle"
      @click="$emit('click')"
    >
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
    buttonColor: {
      type: String,
      default: " #ff0000",
    },
  },
  computed: {
    buttonStyle() {
      return {
        border: `1px solid transparent`,
        fontSize: `14px`,
        backgroundColor: this.buttonColor,
        width: "131px",
        height: "44px",
        padding: "11px 20px 11px 20px",
        borderRadius: "60px",
        opacity: "0px",
      };
    },
  },
};
</script>
