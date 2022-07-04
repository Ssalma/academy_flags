<template>
  <div>
    <p>{{ "this is my single view page" }}</p>
    <p>{{ singleCountry.name.common }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleView",
  data: () => ({
    // countryName: "",
  }),
  async mounted() {
    const countryName = this.$route.params.name;
    await this.getSingleCountry(countryName);
  },
  computed: {
    ...mapGetters({
      singleCountry: "getSingleCountry",
    }),
  },
  methods: {
    ...mapActions({
      getSingleCountry: "getSingleCountry",
    }),
  },
};
</script>

<style>
</style>