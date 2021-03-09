<template>
  <div class="countrydetails">
    {{ details.name }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'CountryDetails',

    data () {
      return {
        details: {}
      };
    },

    mounted () {
      this.details = this.getCountryByNumericCode(this.$route.params.numericCode);
    },

    computed: {
      ...mapGetters('Countries', [
        'getCountryByNumericCode'
      ])
    }
  }
</script>

<style>

</style>