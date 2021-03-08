<template>
  <div class="countrieslist">
    <filter-area />

    <div class="countrieslist__container container">
      <country
        :key="country.name"
        v-for="country in countryList" />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import Country from './Country.vue';
  import FilterArea from './FilterArea.vue';

  export default {
    components: {
      Country,
      FilterArea
    },

    mounted () {
      this.setCountryList();
    },

    computed: {
      ...mapState('Countries', [
        'countryList'
      ])
    },

    methods: {
      ...mapActions('Countries', [
        'setCountryList'
      ])
    },

    watch: {
      countryList (cur) {
        console.log('update', cur);
      }
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
    }
  }
</style>