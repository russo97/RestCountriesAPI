<template>
  <div class="filterarea container" :class="{ dark: darkMode }">
    <div class="filterarea__search">
      <i class="fas fa-search"></i>
      <input type="text" class="filterarea__search__input" placeholder="Search for a country..." />
    </div>

    <div class="filterarea__filter">
      <span class="filterarea__filter__label">
        Filter by Region
      </span>
      <i class="fas fa-chevron-down"></i>

      <div class="filterarea__filter__regions">
        <ul class="filterarea__filter__regions__list">
          <li
            class="filterarea__filter__regions__list__item"
            :key="region"
            v-for="region in regionList">
              {{ region }}
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "FilterArea",

    computed: {
      ...mapState('Countries', [
        'darkMode',
        'regionList'
      ])
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
      padding: 20px 15px;
      border-radius: 5px;

      @include flex {
        align-items: center;
        justify-content: space-evenly;
      }

      @include breakpoint-down (desktop) {
        align-self: flex-start;
      }

      @include breakpoint-up (desktop) {
        max-height: 52px;
      }
    }

    &__search {
      width: 100%;
      max-width: 688px;
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
        padding: 5px 10px;
        font-size: 1.2rem;
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
      max-width: 400px;
      margin-top: 50px;
      background-color: $white;

      @include breakpoint-up (desktop) {
        margin-top: 0;
        max-width: 260px;
      }

      .fas {
        color: $veryDarkBlue;
        transform: rotate(180deg);
      }

      &__label {
        width: 80%;
        font-weight: 600;
        padding: 5px 10px;
        font-size: 1.2rem;
        color: $veryDarkBlue;

        @include breakpoint-up (desktop) {
          font-size: 1rem;
        }
      }

      &__regions {
        width: 100%;
        height: auto;
        left: 0px;
        top: 100%;
        margin-top: 5px;
        position: absolute;
        background: $white;
        padding: 15px 30px;
        border-radius: inherit;

        &__list {
          @include flex {
            flex-direction: column;
          }

          &__item {
            padding: 5px 5px;
            font-weight: 600;
            font-size: 1.1rem;
            color: $veryDarkBlue;
            text-transform: capitalize;
          }
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

          &__list__item {
            color: $white;
          }
        }
      }
    }
  }
</style>