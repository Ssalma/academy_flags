import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    countries: [],
    singleCountry: {},
  },
  getters: {
    getCountries: (state) => state.countries,
    getSingleCountry: (state) => state.singleCountry,
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
    SET_SINGLE_COUNTRY(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async getAllCountries({ commit }) {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        commit("SET_COUNTRIES", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getSingleCountry({ countryName }) {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName} `
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
