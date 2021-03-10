
export default {
  methods: {
    redirectHome () {
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/');
      }
    }
  }
};
