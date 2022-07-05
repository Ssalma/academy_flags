import { createStore } from "vuex";
import { getAllCountries, getSingleCountry } from "../api/api";

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
      state.singleCountry = payload;
    },
  },
  actions: {
    async getAllCountries({ commit }) {
      try {
        const response = await getAllCountries();
        commit("SET_COUNTRIES", response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getOneSingleCountry({ commit }, countryName) {
      try {
        const response = await getSingleCountry(countryName);
        commit("SET_SINGLE_COUNTRY", response.data[0]);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
