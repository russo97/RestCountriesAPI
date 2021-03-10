<template>
  <header
    class="header"
    :class="{ dark: isDarkMode }">
    <div class="header__container container">
      <h3 class="header__title" @click="redirectHome">Where in the world?</h3>

      <span class="header__darkswitch" @click="toggleDarkTheme">
        <i class="fa-moon" :class="[isDarkMode ? 'fas' : 'far']"></i>
        <span class="header__darktext">
          Dark Mode
        </span>
      </span>
    </div>
  </header>
</template>

<script>
  import sharedMethods from '../utils/sharedMethods';
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'Header',

    extends: sharedMethods,

    created () {
      this.setCountryList();
    },

    methods: {
      ...mapActions('Countries', [
        'setCountryList',
        'changeRouteMode',
        'toggleDarkTheme'
      ])
    },

    computed: {
      ...mapGetters('Countries', [
        'isDarkMode'
      ]),

      ...mapState('Countries', [
        'countryList'
      ])
    },

    watch: {
      $route (from, to) {
        this.changeRouteMode(from.path.length < to.path.length ? 'route-enter' : 'route-leave')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .header {
    $this: &;

    background-color: $white;
    transition: all .3s ease-in-out;
    box-shadow: 0 .3125rem .1875rem $white;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint-up (medium) {
        max-height: 5rem;
      }
    }

    &__title {
      cursor: pointer;
      font-size: 1rem;
      color: $veryDarkBlue;
      transition: all .3s ease-in-out;

      @include breakpoint-up (medium) {
        font-size: 1.5rem;
      }
      
      @include breakpoint-up (desktop) {
        font-size: 1.7rem;
      }
    }

    &__darkswitch {
      cursor: pointer;
      font-weight: 600;
      padding: .3125rem;
      text-align: center;
      color: $veryDarkBlue;
      transition: all .3s ease-in-out;

      @include flex {
        @extend %flexJC_SB-AI_C;

        @include breakpoint-down (mobile) {
          flex-direction: column;
        }
      }
    }

    &__darktext {
      @include breakpoint-up (mobile) {
        margin-left: .4375rem;
      }
    }

    // just apllied colors for the dark mode
    &.dark {
      background-color: $darkBlue;
      box-shadow: 0 1.5rem 2.5rem $veryDarkBlue;

      #{$this}__title,
      #{$this}__darkswitch {
        color: $white;
      }
    }
  }
</style>
