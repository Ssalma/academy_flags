import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function getAllCountries() {
  return apiClient.get(`/all`);
}
export function getSingleCountry(country) {
  return apiClient.get(`/name/${country}?fullText=true`);
}
