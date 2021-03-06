<template>
  <div class="filterarea container" :class="{ dark: darkMode }">
    <div class="filterarea__search">
      <i class="fas fa-search"></i>
      <input
        type="text"
        autocomplete="off"
        :value="userInput"
        list="countryDatalist"
        id="filter__search__input"
        class="filterarea__search__input"
        @input="setUserInput($event.target.value)"
        placeholder="Search for a country..." />
    </div>

    <div class="filterarea__filter" :class="{ showRegions }" @click="showRegionsToggle">
      <span class="filterarea__filter__label">
        {{ currentRegion.toUpperCase() || 'Filter By Region' }}
      </span>

      <i class="fas fa-chevron-down"></i>

      <div class="filterarea__filter__regions">
        <ul class="filterarea__filter__regions__list">
          <li
            :key="region"
            v-for="region in regionList"
            class="filterarea__filter__regions__list__item"
            @click="setCurrentRegion(currentRegion == region ? '' : region)">
            {{ region }}
            <i v-if="regionSelected && currentRegion == region" class="fas fa-check"></i>
          </li>
        </ul>
      </div>
    </div>

    <countries-datalist v-if="false" />
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';

  import CountriesDatalist from './CountriesDatalist.vue';

  export default {
    name: "FilterArea",

    data () {
      return {
        showRegions: !1
      };
    },

    methods: {
      showRegionsToggle () {
        this.showRegions = !this.showRegions;
      },

      ...mapActions('Countries', [
        'setUserInput',
        'setCurrentRegion'
      ])
    },

    computed: {
      ...mapState('Countries', [
        'darkMode',
        'userInput',
        'regionList',
        'currentRegion'
      ]),

      ...mapGetters('Countries', [
        'regionSelected'
      ])
    },

    components: {
      CountriesDatalist
    }
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .filterarea {
    $this: &;

    @include flex {
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
    }

    @include breakpoint-up (desktop) {
      flex-direction: row;
    }

    &__search,
    &__filter {
      position: relative;
      border-radius: .3125rem;
      padding: 1.25rem .9375rem;

      @include flex {
        align-items: center;
        justify-content: space-evenly;
      }

      @include breakpoint-down (desktop) {
        align-self: flex-start;
      }

      @include breakpoint-up (desktop) {
        max-height: 3.25rem;
      }
    }

    &__search {
      width: 100%;
      max-width: 43rem;
      color: $darkGray;
      background-color: $white;
      box-shadow: 0 1.5rem 2.5rem transparent;

      @include breakpoint-up (desktop) {
        max-width: 40%;
      }

      .fas {
        color: $darkGray;
      }

      &__input {
        width: 80%;
        border: none;
        font-weight: 600;
        color: $darkGray;
        font-size: 1.2rem;
        padding: .3125rem .625rem;
        background-color: transparent;

        @include breakpoint-up (desktop) {
          font-size: 1rem;
        }

        &::placeholder {
          font-weight: 600;
          color: $darkGray;
        }
      }
    }

    &__filter {
      width: 100%;
      cursor: pointer;
      max-width: 25rem;
      margin-top: 3.125rem;
      background-color: $white;

      @include breakpoint-up (desktop) {
        margin-top: 0;
        max-width: 16.25rem;
      }

      & > .fas {
        color: $veryDarkBlue;
        transform: rotate(180deg);
      }

      &__label {
        width: 80%;
        font-weight: 600;
        font-size: 1.2rem;
        color: $veryDarkBlue;
        padding: .3125rem .625rem;

        @include breakpoint-up (desktop) {
          font-size: 1rem;
        }
      }

      &__regions {
        z-index: -1;
        width: 100%;
        height: auto;
        top: 100%;
        left: 0rem;
        @include fadeOut;
        overflow: hidden;
        position: absolute;
        background: $white;
        pointer-events: none;
        margin-top: -1.5625rem;
        border-radius: inherit;
        box-shadow: 0 .0625rem .5rem .125rem #aaa;

        &__list {
          @include flex {
            flex-direction: column;
          }

          &__item {
            @include flex {
              align-items: center;
              justify-content: space-between;
            }

            font-weight: 600;
            font-size: 1.1rem;
            color: $veryDarkBlue;
            pointer-events: all;
            text-transform: capitalize;
            cursor: pointer !important;
            padding: .625rem 1.8rem .625rem 2rem;
            background-color: $veryLightGray;
            transition: all .3s ease-in-out;

            &:not(:last-child) {
              border-bottom: solid .0625rem #ccc;
            }

            &:hover {
              background-color: #ccc;
            }
          }
        }
      }

      &.showRegions {
        .fas {
          transform: rotate(0deg);
        }

        #{$this}__filter__regions {
          z-index: 1;
          @include fadeIn;
          pointer-events: all;
          margin-top: .3125rem;
        }
      }
    }



    // dark theme colors
    &.dark {
      #{$this}__search,
      #{$this}__filter {
        color: $white;
        background-color: $darkBlue;

        .fas {
          color: $white;
        }
      }

      #{$this}__search {
        &__input {
          color: $white;

          &::placeholder {
            color: $white;
          }
        }
      }

      #{$this}__filter {
        color: $white;

        &__label {
          color: $white;
        }

        &__regions {
          background-color: $darkBlue;
          box-shadow: 0 .0625rem .5rem .125rem $veryDarkBlue;

          &__list__item {
            color: $white;
            background-color: $darkBlue;

            &:hover {
              background-color: $veryDarkBlue;
            }

            &:not(:last-child) {
              border-bottom: solid .0625rem $veryDarkBlue;
            }
          }
        }
      }
    }
  }
</style>