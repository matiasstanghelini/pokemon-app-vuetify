<template>
  <v-autocomplete
    :items="items"
    menu-icon=""
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    variant="solo"
    item-props
  />
</template>

<script>
export default {
  name: "PokemonSearchBar",
  props: {
    items: Array,
  },
};
</script>
