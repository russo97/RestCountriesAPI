<template>
  <div class="country" :class="{ 'dark': isDarkMode }" @click="seeDetails">
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

  export default {
    name: 'Country',

    methods: {
      seeDetails () {
        const { numericCode } = this;

        this.$router.push({
          path: `/country/${numericCode}`
        });
      }
    },

    computed: {
      flagURL () {
        return { '--flag': `url(${this.flag})` }
      },

      ...mapGetters('Countries', [
        'isDarkMode'
      ])
    },

    filters: {
      num (value) {
        return Intl.NumberFormat('pt-BR').format(value);
      }
    },

    props: ['name', 'population', 'region', 'capital', 'flag', 'numericCode']
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .country {
    $this: &;

    width: 100%;
    height: 450px;
    cursor: pointer;
    max-width: 320px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: $veryLightGray;
    box-shadow: 0 1px 2px $veryLightGray;

    @include flex {
      @extend %flexFD_C, %flexJC_AI_CENTER;
    }

    @include breakpoint-up (desktop) {
      height: 400px;
      width: calc(100% / 4 - 30px);
    }

    & > * {
      width: 100%;
      height: 50%;
    }

    &__flag {
      position: relative;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: var(--flag);
    }

    &__details {
      padding: 35px 30px;

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
        margin-top: 20px;
        font-size: 1.2rem;

        @include flex {
          @extend %flexFD_C;
        }

        &__item {
          color: $veryDarkBlue;

          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
    }

    &.dark {
      background-color: $darkBlue;
      box-shadow: 0 2px 4px $veryDarkBlue;

      #{$this}__details {
        &__name,
        &__info__item {
          color: $white;
        }

      }
    }
  }
</style>