<template>
  <div class="notfound container">
    <img class="notfound__logo" src="../assets/images/404.svg" alt="404" />

    <button class="notfound__button" :class="{ dark: isDarkMode }" @click="redirectHome">
      <i class="fas fa-long-arrow-alt-left"></i>
      Go back home
    </button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import useful from '../utils';

  export default {
    name: 'NotFound',

    computed: {
      ...mapGetters('Countries', [
        'isDarkMode'
      ])
    },

    extends: useful
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .notfound {
    position: relative;

    @include flex {
      @extend %flexFD_C, %flexJC_SB-AI_C;
    }

    &__logo {
      width: 90%;
      margin: 0 auto;
      margin-top: 3rem;

      @include breakpoint-up (medium) {
        width: 80%;
      }

      @include breakpoint-up (desktop) {
        width: 60%;
      }
    }

    &__button {
      margin-top: 3.5rem;

      @include flex {
        @extend %flexJC_SB-AI_C;
      }

      &.dark {
        color: $white;
        background-color: $veryDarkBlue;
        box-shadow: 0 .0625rem .1875rem $darkBlue;
      }
    }
  }
</style>