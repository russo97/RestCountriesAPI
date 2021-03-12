<template>
  <datalist id="countryDatalist">
    <option
      :value="country.name"
      :key="country.numericCode"
      v-for="country in countryList"
    ></option>
  </datalist>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CountriesDatalist',

    computed: {
      ...mapState('Countries', [
        'countryList'
      ])
    }
  }
</script>
