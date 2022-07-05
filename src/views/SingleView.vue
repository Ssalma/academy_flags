<template>
  <div class="wrapper">
    <p>{{ "this is my single view page" }}</p>
    <button @click="$router.go(-1)">back</button>
    <div class="content">
      <div>
        <img :src="singleCountry.flags?.png" alt="" />
      </div>
      <div>
        <p>Name : {{ singleCountry.name?.common }}</p>
        <p>Region : {{ singleCountry.region }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SinglePage",
  data: () => ({}),
  created() {
    const countryName = this.$route.params.name;
    this.getOneSingleCountry(countryName);
  },
  computed: {
    ...mapGetters({
      singleCountry: "getSingleCountry",
    }),
  },
  methods: {
    ...mapActions({
      getOneSingleCountry: "getOneSingleCountry",
    }),
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}
button {
  cursor: pointer;
}
</style>