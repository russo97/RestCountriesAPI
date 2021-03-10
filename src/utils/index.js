
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
    }
  }
}
