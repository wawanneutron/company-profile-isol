<template>
  <section class="footer-quote">
    <h1
      data-aos="fade-up"
      class="white--text h1--large weight-500 text-center footer-quote__title"
    >
      {{ locales.landing['tagline-quote'] }}
    </h1>
  </section>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.footer-quote {
  background-color: #09273b;
  height: 24rem;
  border-radius: 30rem 30rem 0 0 !important;

  @media (max-width: 59em) {
    border-radius: 10rem 10rem 0 0 !important;
    &__title {
      font-size: 30px !important;
      line-height: 4.6rem !important;
      padding: 0 30px;
    }
  }

  &__title {
    padding-top: 8rem;
  }
}
</style>
