import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    countries: [],
  },
  getters: {
    getCountries: (state) => state.countries
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async getAllCountries({ commit }) {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        commit('SET_COUNTRIES', response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
