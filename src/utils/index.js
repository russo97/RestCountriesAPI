
import { mapGetters } from "vuex";

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

    seeCountryDetails (alpha3Code) {
      this.$router.push(
        `/country/${alpha3Code}`
      );
    }
  },

  computed: {
    ...mapGetters('Countries', [
      'isDarkMode'
    ])
  }
}
