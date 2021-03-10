<template>
  <div class="countrydetails container">
    <button v-if="countryDetails" @click="getBack">
      {{ countryDetails.name }}
    </button>

    <h1 v-if="!countryDetails">sorry, this country code isnt available</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'CountryDetails',

    methods: {
      getBack () {
        this.$router.go(-1);
      }
    },

    computed: {
      ...mapGetters('Countries', [
        'getCountryByNumericCode'
      ]),

      numericCode () {
        return this.$route.params.numericCode;
      },

      countryDetails () {
        const { numericCode, getCountryByNumericCode } = this;

        return getCountryByNumericCode(numericCode);
      }
    }
  }
</script>

<style>

</style>