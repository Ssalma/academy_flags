export default {
  data: () => ({
    regions: [],
  }),
  methods: {
    filterRegions() {
      const val = this.countries.map((c) => c.region);
      console.log(val);
      const regionsArray = [...new Set(val)];
      this.regions = regionsArray;
    },
  },
};
