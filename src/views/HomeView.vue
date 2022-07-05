<template>
  <div class="home">
    <input
      type="text"
      placeholder="Search for a country..."
      v-model="searchTerm"
    />
    <div class="select-container">
      <select name="" id="" v-model="selectTerm">
        <option value="">Filter by Region</option>
        <option v-for="opt in regions" :key="opt" :value="opt">
          {{ opt }}
        </option>
      </select>
    </div>
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
    selectTerm: "",
    regions: [],
  }),
  async mounted() {
    await this.getAllCountries();
    await this.filterRegions();
  },
  computed: {
    ...mapGetters({
      countries: "getCountries",
    }),
    filteredCountries() {
      if (this.searchTerm) {
        return this.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectTerm) {
        return this.countries.filter((country) =>
          country.region.includes(this.selectTerm)
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
    filterRegions() {
      const val = this.countries.map((c) => c.region);
      const regionsArray = [...new Set(val)];
      this.regions = regionsArray;
    },
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
