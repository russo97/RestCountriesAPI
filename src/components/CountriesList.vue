<template>
  <div class="countrieslist">
    <filter-area />

    <div class="countrieslist__container container">
      <country
        :key="country.name"
        :name="country.name"
        :flag="country.flag"
        :region="country.region"
        :capital="country.capital"
        :alpha3Code="country.alpha3Code"
        :population="country.population"
        :numericCode="country.numericCode"
        v-show="regionFilter(country.region)"
        v-for="country in countryList" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Country from './Country.vue';
  import FilterArea from './FilterArea.vue';

  export default {
    components: {
      Country,
      FilterArea
    },

    methods: {
      regionFilter (region) {
        const { currentRegion } = this;

        return !currentRegion.length || currentRegion.length && currentRegion === region.toLowerCase();
      }
    },

    computed: {
      ...mapState('Countries', [
        'countryList',
        'currentRegion'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .countrieslist {
    &__container {
      @include flex {
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
      }

      @include breakpoint-up (medium) {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
      }

      @include breakpoint-up (desktop) {
        justify-content: space-between;
      }
    }
  }
</style>