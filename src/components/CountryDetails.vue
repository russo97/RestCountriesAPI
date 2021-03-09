<template>
  <div class="countrydetails">
    {{ $route.params.numericCode }}
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CountryDetails',

    computed: {
      ...mapState('Countries', [
        'countryList'
      ])
    }
  }
</script>

<style>

</style>