<template>
  <Card :countries="countries"> </Card>
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
  }),
  mounted() {
    this.getCountries();
  },
  computed: {
    // getters from store is accessed in methods using mapGetters.
    ...mapGetters({
      countries: "getCountries",
    }),
  },
  methods: {
    // action from store is accessed in methods using mapActions.
    // mutations from store is accessed in methods using mapMutations.
    ...mapActions({
      getAllCountries: "getAllCountries",
    }),
    async getCountries() {
      await this.getAllCountries();
    },
  },
};
</script>

<style scoped>
</style>
