
export default {
  filters: {
    num (value) {
      return Intl.NumberFormat('pt-BR').format(value);
    }
  },

  methods: {
    redirectHome () {
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/');
      }
    },

    previousPage () {
      this.$router.go(-1);
    },

    seeCountryDetails (numericCode) {
      this.$router.push(
        `/country/${numericCode}`
      );
    }
  }
}
