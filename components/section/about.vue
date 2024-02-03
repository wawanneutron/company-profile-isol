<template>
  <section class="section-about">
    <v-container>
      <v-row class="justify-space-between align-center">
        <v-col cols="12" md="4">
          <h1
            data-aos="fade-up"
            class="h1--xxlarge white--text section-about_title"
          >
            {{ locales.landing['about-title'] }}
          </h1>
        </v-col>

        <v-col cols="12" md="8">
          <p data-aos="fade-up" class="white--text h3--large text-justify">
            {{ locales.landing['about-subtitle'] }}
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- card timeline -->
    <card-about />
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
  background-color: #09273b;
  padding-top: 116px;

  @media (min-width: 1904px) {
    padding-top: 216px;
    margin-bottom: 300px;
  }

  &_title {
    line-height: 10rem !important;
  }
}
</style>
