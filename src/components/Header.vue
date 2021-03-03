<template>
  <header
    class="header"
    :class="{ dark: isDarkMode }">
    <div class="header__container container">
      <h3 class="header__title">Where in the world?</h3>

      <span class="header__darkswitch">
        <i
          class="fa-moon"
          :class="[isDarkMode ? 'fas' : 'far']">
        </i>
        <span
          class="header__darktext"
          @click="toggleDarkTheme">
          Dark Mode
        </span>
      </span>
    </div>
  </header>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  export default {
    name: 'Header',

    methods: {
      ...mapActions('Countries', [
        'toggleDarkTheme'
      ])
    },

    computed: {
      ...mapState('Countries', {
        darkMode: state => state.darkMode
      }),

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
    transition: background-color .2s ease-in-out;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include breakpoint-up (medium) {
        max-height: 80px;
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
      padding: 5px;
      cursor: pointer;
      font-weight: 800;
      text-align: center;
      color: $veryDarkBlue;

      &:hover {
        // background-color: $veryLightGray;
      }

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

    &.dark {
      background-color: $darkBlue;
      box-shadow: 0 5px 3px #aaa;

      #{$this}__title,
      #{$this}__darkswitch {
        color: $white;
      }
    }
  }
</style>
