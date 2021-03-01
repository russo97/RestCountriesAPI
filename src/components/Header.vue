<template>
  <header class="header">
    <div class="header__container container">
      <h3 class="header__title">Where in the world?</h3>

      <span class="header__darkswitch">
        Dark Mode
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
      font-size: 16px;
      color: $veryDarkBlue;
      font-family: 'Nunito Sans', sans-serif;
    }

    &__darkswitch {
      font-weight: 600;
      color: $veryDarkBlue;
      font-family: 'Nunito Sans', sans-serif;
    }
  }
</style>
