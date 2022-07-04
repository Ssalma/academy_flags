<template>
  <div class="card" v-for="country in countries" :key="country.name.common">
      <img :src="country.flags.png" alt="" />
      <p>{{ country.name.common }}</p>
      <p class="card-text-capital" v-if="country.capital">
        Capital:
        <span v-for="(capital, index) in country.capital" :key="index">{{
          capital
        }}</span>
      </p>
      <p>{{ country.population }}</p>
      <p>{{ country.region }}</p>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    countries: {
      type: Array,
    }
  }
}
</script>

<style scoped lang="scss">

</style>
