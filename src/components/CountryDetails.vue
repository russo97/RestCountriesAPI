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
      <button class="countrydetails__button" @click="previousPage">
        <i class="fas fa-long-arrow-alt-left"></i>
        back
      </button>

      <div class="countrydetails__container__flex">
        <div class="countrydetails__container__flag">
          <img :src="countryDetails.flag" alt="country logo" />
        </div>

        <div class="countrydetails__container__details">
          <h2 class="countrydetails__container__details__title">
            {{ countryDetails.name }}
          </h2>

          <div class="countrydetails__container__details__infobox">
            <div class="countrydetails__container__details__infobox__box1">
              <span class="countrydetails__container__details__infobox__item">
                <strong>Native name:</strong> {{ countryDetails.nativeName }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Population:</strong> {{ countryDetails.population | num }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Region:</strong> {{ countryDetails.region }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Sub region:</strong> {{ countryDetails.subregion }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Capital:</strong> {{ countryDetails.capital }}
              </span>
            </div>

            <div class="countrydetails__container__details__infobox__box2">
              <span class="countrydetails__container__details__infobox__item">
                <strong>Top level domain:</strong> {{ countryDetails.topLevelDomain.join(', ') }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Currencies:</strong> {{ countryDetails.currencies.map(currencies => currencies.name).join(', ') }}
              </span>

              <span class="countrydetails__container__details__infobox__item">
                <strong>Languages:</strong> {{ countryDetails.languages.map(langs => langs.name).join(', ') }}
              </span>
            </div>
          </div>

          <div class="countrydetails__container__details__bCountries">
            <h3 class="countrydetails__container__details__bCountries__title">Border countries</h3>

            <div class="countrydetails__container__details__bCountries__list">
              <button
                :key="borderCountry.numericCode"
                v-for="borderCountry in bordersCountries"
                @click="seeCountryDetails(borderCountry.numericCode)"
                class="countrydetails__container__details__bCountries__item">
                {{ borderCountry.name }}
              </button>

              <span v-if="countryDetails.borders.length === 0">
                There is no border countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import useful from '../utils';
  import { mapGetters, mapState } from 'vuex';

  export default {
    name: 'CountryDetails',

    extends: useful,

    computed: {
      ...mapGetters('Countries', [
        'isDarkMode',
        'getCountryByNumericCode'
      ]),

      ...mapState('Countries', [
        'countryList'
      ]),

      bordersCountries () {
        const { countryList, countryDetails } = this;

        return countryList.filter(
          country => countryDetails.borders.some( border => country.cioc === border )
        );
      },

      numericCode () {
        return this.$route.params.numericCode;
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

      &__flex {
        @include flex {
          flex-direction: column;
        }

        @include breakpoint-up (desktop) {
          margin-top: 2rem;
          flex-direction: row;
          justify-content: space-between;

          & > * {
            margin: 0;
            flex-basis: 47%;
          }
        }

        [class$="flag"] {
          @include flex {
            align-items: center;
          }
        }
      }

      &__details {
        @include flex {
          flex-direction: column;
        }

        @include breakpoint-up (medium) {
          padding: 0 50px;
        }

        @include breakpoint-up (desktop) {
          padding: 0;
        }

        &__title {
          font-size: 2rem;
          color: $darkBlue;
          margin: 1.8rem 0 1rem;
        }

        &__infobox {
          @include flex {
            flex-direction: column;
          }

          @include breakpoint-up (desktop) {
            flex-direction: row;
            justify-content: space-between;
          }

          &__box1,
          &__box2 {
            @include flex {
              padding: .5rem 0;
              flex-direction: column;
            }

            span {
              color: $darkBlue;
            }
          }

          &__item {
            font-size: 1rem;
            color: $darkBlue;
            margin: .1875rem 0;
          }
        }

        &__bCountries {
          margin: 1.5rem 0;

          &__title {
            color: $darkBlue;
            font-size: 1.2rem;
            margin-bottom: .7rem;
          }

          &__list {
            padding: .5rem 0;

            @include flex {
              flex-wrap: wrap;
              align-items: center;
              justify-content: flex-start;
            }

            button {
              margin: .4rem;
            }
          }
        }
      }
    }

    &.dark #{$this}__container {
      &__details__title {
        color: $white;
      }

      &__details__infobox {
        &__box1 span,
        &__box2 span,
        &__box1 span strong,
        &__box2 span strong {
          color: $white;
        }
      }

      &__details__bCountries {
        &__title {
          color: $white;
        }

        &__item {
          color: $white;
          background-color: $darkBlue;
          box-shadow: 0 1px 3px $veryDarkBlue;
        }

        span {
          color: $white;
        }
      }
    }
  }

</style>