<template>
  <div class="country" :class="{ 'dark': isDarkMode }" @click="seeCountryDetails(numericCode)">
    <div class="country__flag" :style="flagURL">
    </div>
    <div class="country__details">
      <h3 class="country__details__name">
        {{ name }}
      </h3>

      <p class="country__details__info">
        <span class="country__details__info__item">
          <strong>Population:</strong> {{ population | num }}
        </span>

        <span class="country__details__info__item">
          <strong>Region:</strong> {{ region }}
        </span>

        <span class="country__details__info__item">
          <strong>Capital:</strong> {{ capital }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import useful from '../utils';

  export default {
    name: 'Country',

    extends: useful,

    computed: {
      flagURL () {
        return { '--flag': `url(${this.flag})` }
      },

      ...mapGetters('Countries', [
        'isDarkMode'
      ])
    },

    props: ['name', 'population', 'region', 'capital', 'flag', 'numericCode']
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .country {
    $this: &;

    width: 100%;
    height: 28.125rem;
    cursor: pointer;
    max-width: 20rem;
    overflow: hidden;
    border-radius: .625rem;
    margin-bottom: 1.5625rem;
    background-color: $veryLightGray;
    box-shadow: 0 .0625rem .125rem $veryLightGray;

    @include flex {
      @extend %flexFD_C, %flexJC_AI_CENTER;
    }

    @include breakpoint-up (desktop) {
      height: 25rem;
      width: calc(100% / 4 - 1.875rem);
    }

    & > * {
      width: 100%;
      height: 50%;
    }

    &__flag {
      position: relative;
      background-size: 110% 110%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: var(--flag);
    }

    &__details {
      padding: 2.1875rem 1.875rem;

      @include flex {
        @extend %flexFD_C;
        justify-content: space-evenly;
      }

      &__name {
        font-size: 1.5rem;
        color: $veryDarkBlue;
        text-transform: capitalize;
      }

      &__info {
        margin-top: 1.25rem;
        font-size: 1.2rem;

        @include flex {
          @extend %flexFD_C;
        }

        &__item {
          color: $veryDarkBlue;

          &:not(:last-child) {
            margin-bottom: .5rem;
          }
        }
      }
    }

    &.dark {
      background-color: $darkBlue;
      box-shadow: 0 .125rem .25rem $veryDarkBlue;

      #{$this}__details {
        &__name,
        &__info__item {
          color: $white;
        }

      }
    }
  }
</style>