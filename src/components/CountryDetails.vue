<template>
  <div class="countrydetails container" :class="{ dark: isDarkMode }">
    <div class="countrydetails__leftbox" v-if="!displayError">
      <h2 class="countrydetails__title">Oops! we didn't find the requested country</h2>

      <button class="countrydetails__button onlydesktop" @click="redirectHome">
        <i class="fas fa-long-arrow-alt-left"></i>
        Go back home
      </button>
    </div>

    <div class="countrydetails__rightbox" v-if="!displayError">
      <img class="countrydetails__logo" src="../assets/images/empty.svg" alt="empty" />

      <button class="countrydetails__button onlymobile" @click="redirectHome">
        <i class="fas fa-long-arrow-alt-left"></i>
        Go back home
      </button>
    </div>

    <div class="countrydetails__container" v-if="displayError">
      <button class="countrydetails__button" @click="getBack">
        <i class="fas fa-long-arrow-alt-left"></i>
        back
      </button>

      <div class="countrydetails__container__flag">
        <img :src="countryDetails.flag" alt="country logo" />
      </div>

      <div class="countrydetails__container__details">
        <h2 class="countrydetails__container__details__title">
          {{ countryDetails.name }}
        </h2>

        <div class="countrydetails__container__details__infobox">
          <div class="countrydetails__container__details__infobox__box1">
            <span class="countrydetails__container__details__infobox__title">
              <strong>Native name:</strong> {{ countryDetails.nativeName }}
            </span>

            <span class="countrydetails__container__details__infobox__title">
              <strong>Population:</strong> {{ countryDetails.population | num }}
            </span>
          </div>
          <div class="countrydetails__container__details__infobox__box2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import useful from '../utils';
  import { mapGetters } from 'vuex';

  export default {
    name: 'CountryDetails',

    extends: useful,

    methods: {
      getBack () {
        this.$router.go(-1);
      }
    },

    computed: {
      ...mapGetters('Countries', [
        'isDarkMode',
        'getCountryByNumericCode'
      ]),

      numericCode () {
        return this.$route.params.numericCode;
      },

      hide () {
        return {
          'display': this.displayError ? 'none' : 'block'
        };
      },

      displayError () {
        const { countryDetails } = this;

        return countryDetails;
      },

      countryDetails () {
        const { numericCode, getCountryByNumericCode } = this;

        return getCountryByNumericCode(numericCode);
      }
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";
  
  .countrydetails {
    $this: &;

    color: $darkBlue;
    background-color: $white;

    @include flex {
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    &__button {
      color: $darkBlue;
      background-color: $white;
    }

    @include breakpoint-up (desktop) {
      flex-direction: row;
      justify-content: space-between;

      &__leftbox {
        flex: 1;
        order: 1;

        @include flex {
          align-items: center;
          flex-direction: column;
          justify-content: space-between;
        }

        button {
          margin-top: 2rem;
        }
      }
    }

    &__rightbox {
      flex: 1;

      @include flex {
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
      }

      button {
        margin-top: 4rem;
      }
    }

    &__title {
      color: $darkBlue;
      font-size: 2.3rem;
      text-align: center;
      max-width: 31.25rem;
      margin-bottom: 2rem;
      transition: all .1s ease-in-out;
    }

    &__logo {
      width: 90%;

      @include breakpoint-up (medium) {
        width: 75%;
      }

      @include breakpoint-up (desktop) {
        width: 100%;
      }
    }



    &.dark {
      color: $white;
      background-color: $veryDarkBlue;

      #{$this}__title {
        color: $white;
      }

      #{$this}__button {
        color: $white;
        background-color: $darkBlue;
        box-shadow: 0 .0625rem .1875rem $veryDarkBlue;
      }
    }




    &__container {
      width: 100%;

      @include flex {
        flex-direction: column;
        justify-content: space-between;
      }

      button {
        align-self: flex-start;
      }

      &__flag {
        width: 100%;
        margin-top: 3rem;

        img {
          width: 100%;
        }
      }
    }
  }

</style>