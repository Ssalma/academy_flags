<template>
  <div class="home">
    <input
      type="text"
      placeholder="Search for a country..."
      v-model="searchTerm"
    />
    <!-- <div class="select-container">
      <select name="" id="" v-model="selectTerm">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div> -->
    <div class="home_content">
      <Card :countries="filteredCountries"> </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";
export default {
  name: "HomeView",
  components: {
    Card,
  },
  data: () => ({
    username: "",
    searchTerm: "",
  }),
  mounted() {
    this.getAllCountries();
  },
  computed: {
    ...mapGetters({
      countries: "getCountries",
    }),
    filteredCountries() {
      if (this.searchTerm) {
        return this.countries.filter((country) =>
          country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.countries;
      }
    },
  },
  methods: {
    ...mapActions({
      getAllCountries: "getAllCountries",
    }),
  },
};
</script>

<style lang="scss" scoped>
.home {
  &_content {
    border: 1px solid red;
  }
}
</style>
