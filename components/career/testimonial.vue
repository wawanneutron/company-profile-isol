<template>
  <section class="section-testimonial">
    <div class="container">
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        class="primary--text text--lighten-2 h1--large text-center mb-6"
      >
        {{ locales.career['testimonial-title-header'] }}
      </h2>

      <!-- testimony -->
      <div class="section-testimonial__wrap">
        <v-row justify="space-around" align="center">
          <v-col cols="12" md="4">
            <v-img
              data-aos="zoom-in"
              max-width="350"
              src="/images/testimony/mesya.webp"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p data-aos="fade-up" class="primary--text text-desc ml-3">
              {{ locales.career['testimonial-desc'] }}
            </p>
            <p
              data-aos="fade-up"
              class="title-name primary--text text--lighten-2 mt-4"
            >
              Meysha
            </p>
            <p data-aos="fade-up" class="title-job">
              Intern - Graphic Design Intern
            </p>
          </v-col>
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.section-testimonial {
  margin: 10rem 8rem;

  @media (max-width: 600px) {
    margin: 5rem;
  }

  &__wrap {
    margin-top: 12rem;
  }

  .text-desc {
    font-size: 2.2rem;
    font-weight: 500;

    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 50px;
      height: 30px;
      background-image: url('/images/testimony/quote.svg');
      top: -50px;
      left: 0;
    }
  }

  .title {
    font-size: 4rem !important;
    font-weight: 600;
  }

  .title-name {
    font-size: 3rem;
    font-weight: 600;
  }

  .title-job {
    font-size: 2.2rem;
    font-weight: 600;
  }
}
</style>
