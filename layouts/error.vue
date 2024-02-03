<template>
  <v-app class="section-app">
    <section
      class="container section-app__content d-flex justify-center align-center white--text my-auto"
    >
      <!-- <v-img src="/images/logo/isol-logo.svg" class="logo" max-width="300" /> -->
      <div>
        <div v-if="error.statusCode === 404" class="text-center">
          <h1 class="section-app__text404">404</h1>
          <div class="section-app__err-desc">
            <h2 class="h1--xxlarge">
              {{ pageNotFound.text1 }}
            </h2>
            <h2 class="h1--xxlarge weight-300">
              {{ pageNotFound.text2 }}
            </h2>
            <v-btn
              to="/"
              large
              class="p--large primary lighten-1 text-capitalize mt-4"
              outlinedflex-column
              >Go Back</v-btn
            >
          </div>
        </div>

        <div v-else class="text-center">
          <div class="section-app__err-desc">
            <h2 class="h1--xxlarge">
              {{ otherError }}
            </h2>

            <h2 class="h1--xxlarge weight-300">please contact us thank you</h2>

            <v-btn
              to="/"
              large
              class="p--large primary lighten-1 text-capitalize mt-4"
              outlinedflex-column
              >Go Back</v-btn
            >
          </div>
        </div>
      </div>
    </section>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: {
        text1: 'WHOOPS! NOT FOUND',
        text2: 'SORRY, THERE’S NOTHING HERE'
      },
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound.text1 : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.section-app {
  height: 100vh;
  background-color: #09273b;
  position: relative;

  &__content {
    &::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 600px;
      top: 15%;
      filter: opacity(26%);
      background-image: url('/images/logo/isol-logo.svg');
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    background-image: url('/images/assets/halright.svg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 450px;
    height: 470px;
    top: 0;
    right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    display: block;
    background-image: url('/images/assets/hlleft.svg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 450px;
    height: 420px;
    bottom: 0;
    left: 0;

    @media (max-width: 600px) {
      background-image: unset;
      width: unset;
      height: unset;
    }
  }

  &__text404 {
    position: relative;
    font-size: 20rem !important;
    margin-bottom: 20px;
  }

  &__err-desc {
    h2 {
      position: relative;
    }
    margin-top: -80px;
  }

  h1 {
    font-size: 2rem;
  }

  .logo {
    z-index: 99;
  }
}
</style>
