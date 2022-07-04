<template>
  <div>
    <p>{{ "this is my single view page" }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleView",
  data: () => ({
    countryName: "",
  }),
  async mounted() {
    // await this.getSingleCountry();
    // this.countryName = this.$route.params.name;
    // await this.fetchSingleCountry(this.countryName);
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
    // async fetchSingleCountry(countryName) {
    //   console.log(this.countryName);
    //   await this.getSingleCountry({ countryName });
    // },
  },
};
</script>

<style>
</style>