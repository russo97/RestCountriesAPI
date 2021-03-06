<template>
  <div class="countrieslist">
    <filter-area />

    <transition-group name="bounce" tag="div" class="countrieslist__container container">
      <country
        :name="country.name"
        :flag="country.flag"
        :region="country.region"
        :key="country.alpha3Code"
        :capital="country.capital"
        :alpha3Code="country.alpha3Code"
        :population="country.population"
        :numericCode="country.numericCode"
        v-for="country in paginateFilteredList" />
    </transition-group>

    <load-more @clicked="loadMoreCountries" v-show="sizeLimit !== countryListLength" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Country from './Country.vue';
  import LoadMore from './LoadMore.vue';
  import FilterArea from './FilterArea.vue';

  export default {
    data () {
      return {
        sizeLimit: 25,
        increaseLimit: 25
      }
    },

    components: {
      Country,
      LoadMore,
      FilterArea
    },

    methods: {
      regionFilter (region) {
        const { currentRegion } = this;

        return !currentRegion.length || currentRegion.length && currentRegion === region.toLowerCase();
      },

      inputFilter (name) {
        const { userInput } = this;

        return !userInput.length || userInput.length && name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
      },

      loadMoreCountries () {
        const { sizeLimit, countryListLength, increaseLimit } = this;

        this.sizeLimit += sizeLimit < countryListLength ? increaseLimit : 0;
      }
    },

    computed: {
      ...mapState('Countries', [
        'userInput',
        'countryList',
        'currentRegion'
      ]),

      countryListLength () {
        return this.countryList.length;
      },

      filteredCountryList () {
        const { countryList, regionFilter, currentRegion, userInput, inputFilter } = this;

        return userInput.length
          ? countryList.filter( country => inputFilter(country.name) )
          : currentRegion.length
            ? countryList.filter( country => regionFilter(country.region) )
            : countryList;
      },

      paginateFilteredList () {
        const { filteredCountryList, sizeLimit } = this;

        return filteredCountryList.slice(0, sizeLimit);
      }
    },

    watch: {
      filteredCountryList () {
        this.sizeLimit = this.increaseLimit;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .countrieslist {
    &__container {
      transition: all .4s ease-in-out;

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


  .bounce-transition {
    opacity: 0;
    display: inline-block; /* otherwise scale animation won't work */
    transition: all .6s ease-in-out;
  }

  .bounce-enter,
  .bounce-enter-active {
    animation: bounce .6s forwards;
  }

  .bounce-leave,
  .bounce-leave-active {
    animation: bounce .6s reverse forwards;
  }

  .bounce-leave-to {
    opacity: 0;
    position: absolute;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

</style>