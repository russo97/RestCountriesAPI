<template>
  <div class="load container" :class="darkModeClass">
    <div class="load__container">
      <button class="load__button" @click="loadMoreCountries">
        Load more
      </button>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "LoadMore",

    methods: {
      loadMoreCountries () {
        this.$emit('clicked');
      }
    },

    computed: {
      ...mapState('Countries', [
        'darkMode'
      ]),

      darkModeClass () {
        const { darkMode } = this;

        return { 'dark': darkMode }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .load {
    $this: &;

    &__container {
      @include flex {
        align-items: center;
        justify-content: center;
      }
    }

    &__button {
      color: $darkBlue;
      background-color: $white;
      box-shadow: 0 2px 4px #aaa;
    }

    &.dark {
      #{$this}__button {
        color: $white;
        background-color: $darkBlue;
        box-shadow: 0 2px 4px $veryDarkBlue;
      }
    }
  }
</style>