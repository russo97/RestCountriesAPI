<template>
  <header class="header">
    <div class="header__container container">
      <h3 class="header__title">Where in the world?</h3>

      <span class="header__darkswitch">
        <i class="far fa-moon"></i>
        <span class="header__darktext">Dark Mode</span>
      </span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  @import "../../src/app/scss/styles.scss";

  .header {
    $this: &;

    background-color: $white;

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-size: 1rem;
      color: $veryDarkBlue;
      font-family: 'Nunito Sans', sans-serif;
    }

    &__darkswitch {
      font-weight: 600;
      text-align: center;
      color: $veryDarkBlue;
      font-family: 'Nunito Sans', sans-serif;

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
  }
</style>
