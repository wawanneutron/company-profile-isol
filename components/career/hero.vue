<template>
  <section class="section-hero__career">
    <v-img data-aos="zoom-out" :src="isBanner" class="section-hero__career-img">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            size="82"
            indeterminate
            color="primary lighten-1"
          ></v-progress-circular>
        </v-row>
      </template>

      <div class="container section-hero__career-content white--text">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          class="h1--xxlarge weight-700"
        >
          {{ locales.career['hero-title'] }}
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          class="h1--xxlarge weight-700"
        >
          {{ locales.career['hero-subtitle'] }}
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          class="h2--xlarge weight-500 mt-4"
        >
          {{ locales.career['hero-desc'] }}
        </h2>
      </div>
    </v-img>
  </section>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang],

  data: () => ({
    bannerDesktop: '/images/career/bg-career.svg',
    bannerMobile: '/images/career/bg-hero.png'
  }),

  computed: {
    isBanner() {
      return this.$vuetify.breakpoint.xsOnly
        ? this.bannerMobile
        : this.bannerDesktop
    }
  }
}
</script>

<style lang="scss" scoped>
.section-hero__career {
  margin-top: -104px;

  &-content {
    margin-top: 22%;

    @media (max-width: 600px) {
      margin-top: 40%;
    }
  }
}
</style>
