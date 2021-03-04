<template>
  <div id="app">
    <Header />

    <router-view key="router"></router-view>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',

    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import "../src/app/scss/styles.scss";
</style>
