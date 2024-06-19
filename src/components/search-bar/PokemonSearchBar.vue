<template v-slot:text>
  <v-text-field
    v-model="search"
    :loading="loading"
    prepend-inner-icon="mdi-magnify"
    label="Search"
    variant="solo"
    hide-details
    single-line
    @click:append-inner="onClick"
    class="mt-2 mb-4"
  ></v-text-field>
</template>

<script>
export default {
  name: "PokemonSearchBar",
  props: {
    items: Array,
  },
  data() {
    return {
      loading: false,
      search: "",
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    onClick() {
      this.loading = true;
    },
    emitSearchResults() {
      this.$emit("update:searchResults", this.filteredItems, this.search);
    },
  },
  watch: {
    search() {
      this.emitSearchResults();
    },
  },
};
</script>
