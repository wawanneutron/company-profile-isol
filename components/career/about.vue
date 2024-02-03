<template>
  <section class="container section-about">
    <v-row class="justify-space-between align-center">
      <v-col cols="12" md="6">
        <v-img data-aos="zoom-in" src="/images/career/about.webp"></v-img>
      </v-col>

      <v-col cols="12" md="6">
        <h3
          data-aos="fade-left"
          data-aos-delay="300"
          class="primary--text text--lighten-2 section-about__text mb-4"
        >
          {{ locales.career['about-title'] }}
        </h3>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          class="primary--text text--lighten-2 section-about__subtext"
        >
          {{ locales.career['about-desc'] }}
        </p>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.section-about {
  margin-top: 120px;
  margin-bottom: 130px;
  &__text {
    font-size: 4rem;
  }
  &__subtext {
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 3.8rem;
  }
}
</style>
