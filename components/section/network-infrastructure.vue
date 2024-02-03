<template>
  <section class="container section-content">
    <div class="section-content__nro pt-10" id="new-roll-out">
      <h2 data-aos="fade-up" class="h1--large primary--text">New Roll Out</h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 py-md-14 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 2 : 1">
          <v-img data-aos="zoom-in" src="/images/services/nro.png"></v-img>
        </v-col>
      </v-row>
    </div>

    <div
      class="section-content__network pt-10"
      id="network-repair-and-maintenance"
    >
      <h2 data-aos="fade-up" class="h1--large primary--text">
        Network Repair & Maintenance
      </h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 py-md-14 pt-6 pb-14"
      >
        <v-col cols="12" md="6">
          <v-img data-aos="zoom-in" src="/images/services/nro.png"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
      </v-row>
    </div>

    <div class="section-content__home pt-10" id="home-connect">
      <h2 data-aos="fade-up" class="h1--large primary--text">Home Connect</h2>
      <v-row
        justify="space-between"
        align="center"
        class="py-0 py-md-14 pt-6 pb-14"
      >
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <p data-aos="fade-up" class="h2--xlarge primary--text">
            {{ locales.services['description'] }}
          </p>
        </v-col>
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 2 : 1">
          <v-img data-aos="zoom-in" src="/images/services/nro.png"></v-img>
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
