<template>
  <section class="section-with-us">
    <div class="container">
      <h2
        data-aos="fade-up"
        class="primary--text text--lighten-2 title text-center mb-6"
      >
        {{ locales.career['joinus-title-header'] }}
      </h2>
      <p data-aos="fade-up" class="primary--text paragraph-text text-center">
        {{ locales.career['joinus-title-header-desc'] }}
      </p>
    </div>

    <div class="section-with-us_first">
      <div class="container">
        <v-row align="center" justify="space-around">
          <v-col cols="12" md="4">
            <v-img
              data-aos="zoom-in"
              max-width="480"
              src="/images/career/sec1.svg"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div data-aos="fade-up" class="title-first">
              {{ locales.career['joinus-freshgraduate-title'] }}
            </div>
            <p data-aos="fade-up" class="primary--text paragraph-text">
              {{ locales.career['joinus-freshgraduate-desc'] }}
            </p>

            <v-btn
              @click="joinUsFreshGrade()"
              text
              class="text-capitalize paragraph-text weight-700 mt-2"
              data-aos="fade-up"
            >
              {{ locales.button['join-us'] }}
              <v-icon class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section-with-us_second mt-10">
      <div class="container">
        <v-row align="center" justify="space-around">
          <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
            <div data-aos="fade-up" class="title-first">
              {{ locales.career['joinus-professional-title'] }}
            </div>
            <p data-aos="fade-up" class="primary--text paragraph-text">
              {{ locales.career['joinus-professional-desc'] }}
            </p>

            <v-btn
              @click="joinUsProfesional()"
              text
              class="text-capitalize paragraph-text weight-700 mt-2"
              data-aos="fade-up"
            >
              {{ locales.button['join-us'] }}

              <v-icon data-aos="fade-up" class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" :order="getBreakpointTablet ? 2 : 1">
            <v-img
              max-width="480"
              contain
              src="/images/career/sec2.svg"
              data-aos="zoom-in"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section-with-us_third mt-10">
      <div class="container">
        <v-row align="center" justify="space-around">
          <v-col cols="12" md="4">
            <v-img
              data-aos="zoom-in"
              max-width="480"
              src="/images/career/sec3.svg"
            ></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <div data-aos="fade-up" class="title-first">
              {{ locales.career['joinus-internship-title'] }}
            </div>
            <p data-aos="fade-up" class="primary--text paragraph-text">
              {{ locales.career['joinus-internship-desc'] }}
            </p>

            <v-btn
              @click="joinUsIntern()"
              text
              class="text-capitalize paragraph-text weight-700 mt-2"
              data-aos="fade-up"
            >
              {{ locales.button['join-us'] }}

              <v-icon class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="container inside">
      <v-row align="center" justify="space-around">
        <v-col cols="12" md="6" :order="getBreakpointTablet ? 1 : 2">
          <h2
            data-aos="fade-up"
            class="primary--text text--lighten-2 title mb-6"
          >
            {{ locales.career['our-inside-title'] }}
          </h2>
          <div class="ml-6">
            <p data-aos="fade-up" class="primary--text paragraph-text">
              {{ locales.career['our-inside-desc'] }}
            </p>

            <v-btn
              @click="seeMore()"
              text
              class="text-capitalize paragraph-text weight-700 mt-2"
              data-aos="fade-up"
            >
              {{ locales.button['see-more'] }}

              <v-icon class="ml-2">mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4" :order="getBreakpointTablet ? 2 : 1">
          <v-img
            max-width="580"
            contain
            src="/images/career/inside.webp"
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

  methods: {
    joinUsFreshGrade() {
      window.open(
        'https://youarestellar.co.id/jobs?salary=0&salary=50000000&job_level=1&job_level=2&sort'
      )
    },

    joinUsProfesional() {
      window.open(
        'https://youarestellar.co.id/jobs?salary=0&salary=50000000&type=3&type=5&sort'
      )
    },

    joinUsIntern() {
      window.open(
        'https://youarestellar.co.id/jobs?salary=0&salary=50000000&type=1&sort'
      )
    },

    seeMore() {
      window.open('https://www.instagram.com/insideisolution/')
    }
  },
  computed: {
    getBreakpointTablet() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped>
.section-with-us {
  .title {
    font-size: 4rem !important;
    line-height: 3.6rem !important;
    font-weight: 600;
  }

  .paragraph-text {
    position: relative;
    font-size: 2.2rem;
    font-weight: 500;
    z-index: 1;
  }

  &_first {
    margin-top: 60px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 500px;
      top: -140px;
      left: 0;
      background-image: url('/images/career/shape1.svg');
    }

    .title-first {
      color: #1b70a8;
      font-size: 2.8rem !important;
      font-weight: bold;

      position: relative;
    }
  }

  &_second {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 540px;
      height: 900px;
      bottom: -100px;
      right: 0;
      background-image: url('/images/career/shape2.svg');
    }
    .title-first {
      color: #f39f4f;
      font-size: 2.8rem !important;
      font-weight: bold;

      position: relative;
    }
  }

  &_third {
    .title-first {
      color: #a7c051;
      font-size: 2.8rem !important;
      font-weight: bold;
    }
  }

  .inside {
    margin-top: 10rem;
  }
}
</style>
