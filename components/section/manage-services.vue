<template>
  <section class="container section-content">
    <div class="section-content__nro pt-10" id="contact-center">
      <h2 data-aos="fade-up" class="h1--large primary--text">Contact Center</h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 2 : 1">
          <v-img
            data-aos="zoom-in"
            src="/images/banner/cs.webp"
            class="rounded-xxl"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div class="section-content__network pt-10" id="direct-sales">
      <h2 data-aos="fade-up" class="h1--large primary--text">Direct Sales</h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="6">
          <v-img
            src="/images/services/direct-sales.png"
            class="rounded-xxl"
            data-aos="zoom-in"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
      </v-row>
    </div>

    <div class="section-content__home pt-10" id="telesales">
      <h2 data-aos="fade-up" class="h1--large primary--text">Telesales</h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 2 : 1">
          <v-img
            src="/images/services/telesales.png"
            class="rounded-xxl"
            data-aos="zoom-in"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang],

  computed: {
    getBreakpointTablet() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>
