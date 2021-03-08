<template>
  <div class="country">
    <div class="country__flag">

    </div>
    <div class="country__details">
      <h3 class="country__details__name">
        awesome country
      </h3>

      <p class="country__details__info">
        <span class="country__details__info__item">
          <strong>Population:</strong> 206.135.893
        </span>

        <span class="country__details__info__item">
          <strong>Region:</strong> America
        </span>

        <span class="country__details__info__item">
          <strong>Capital:</strong> Brasília
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country'
}
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .country {
    width: 100%;
    height: 480px;
    max-width: 320px;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 25px;
    background-color: $veryLightGray;

    @include flex {
      @extend %flexFD_C, %flexJC_AI_CENTER;
    }

    & > * {
      width: 100%;
      height: 50%;
    }

    &__flag {
      position: relative;
      background: gainsboro;
    }

    &__details {
      padding: 35px 30px;

      @include flex {
        @extend %flexFD_C;
        justify-content: space-evenly;
      }

      &__name {
        color: $darkBlue;
        font-size: 1.5rem;
        text-transform: capitalize;
      }

      &__info {
        margin-top: 20px;
        font-size: 1.2rem;

        @include flex {
          @extend %flexFD_C;
        }

        &__item {
          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
</style>