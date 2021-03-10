<template>
  <div id="app" :class="{ dark: darkMode }">
    <Header />

    <transition-group :class="{ dark: darkMode }" name="route-change" tag="section" :id="sectionId">
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
        'darkMode',
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

  div#app {
    $this: &;

    background-color: $white;
    transition: all .3s ease-in-out;

    &.dark {
      background-color: $veryDarkBlue;
    }
  }
</style>
