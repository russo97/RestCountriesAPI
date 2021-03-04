<template>
  <div id="app">
    <Header />

    <transition-group name="route-change" tag="section" :id="sectionId">
      <router-view key="router"></router-view>
    </transition-group>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import Header from './components/Header';

  export default {
    name: 'App',

    computed: {
      ...mapState('Countries', [
        'sectionId'
      ])
    },

    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import "../src/app/scss/styles.scss";
</style>
