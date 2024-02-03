<template>
  <section class="container section-content">
    <div class="section-content__nro pt-10" id="contact-center">
      <h2 data-aos="fade-up" class="h1--large primary--text">
        Optical Distribution Network (ODN)
      </h2>
      <v-row
        justify="space-around"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            Customer Premise Equipment (CPE) such Set Top Box (STB), Cable
            Modem, Optical Network Terminal (ONT).
          </p>
        </v-col>
        <v-col cols="12" md="4" :order="getBreakpointTablet ? 2 : 1">
          <v-img
            src="/images/services/odn.png"
            max-width="400"
            class="rounded-xxl"
            data-aos="zoom-in"
          ></v-img>
        </v-col>
      </v-row>
    </div>

    <div class="section-content__network pt-10" id="direct-sales">
      <h2 data-aos="fade-up" class="h1--large primary--text">FTTx Poles</h2>
      <v-row
        justify="space-around"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="4">
          <v-img
            data-aos="zoom-in"
            src="/grid-example.svg"
            contain
            class="rounded-xxl"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
          <v-btn
            @click="contactUs()"
            text
            class="text-capitalize paragraph-text h5--small weight-700 mt-2"
            data-aos="fade-up"
          >
            {{ locales.button['contact-us'] }}
            <v-icon class="ml-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <div class="section-content__home pt-10" id="telesales">
      <h2 data-aos="fade-up" class="h1--large primary--text">
        Digital Product
      </h2>
      <v-row
        justify="space-around"
        align="center"
        class="py-0 pt-md-8 pb-md-16 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
          <v-btn
            @click="contactUs()"
            text
            class="text-capitalize paragraph-text h5--small weight-700 mt-2"
            data-aos="fade-up"
          >
            {{ locales.button['contact-us'] }}
            <v-icon class="ml-2">mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" :order="getBreakpointTablet ? 2 : 1">
          <v-img
            src="/images/services/digital-product.png"
            contain
            max-width="400"
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
  },

  methods: {
    contactUs() {
      this.$router.push('/contact')
    }
  }
}
</script>
