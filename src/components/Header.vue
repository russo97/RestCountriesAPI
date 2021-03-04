<template>
  <header
    class="header"
    :class="{ dark: isDarkMode }">
    <div class="header__container container">
      <h3 class="header__title">Where in the world?</h3>

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
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Header',

    methods: {
      ...mapActions('Countries', [
        'toggleDarkTheme'
      ])
    },

    computed: {
      ...mapGetters('Countries', [
        'isDarkMode'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .header {
    $this: &;

    background-color: $white;
    transition: all .3s ease-in-out;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint-up (medium) {
        max-height: 5rem;
      }
    }

    &__title {
      font-size: 1rem;
      color: $veryDarkBlue;

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
      box-shadow: 0 .3125rem .1875rem #aaa;

      #{$this}__title,
      #{$this}__darkswitch {
        color: $white;
      }
    }
  }
</style>
