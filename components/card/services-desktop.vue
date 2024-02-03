<template>
  <section class="section_services">
    <v-container>
      <h1
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        class="text-center h1--xxlarge"
      >
        {{ locales.landing['service-header-title'] }}
      </h1>
      <v-row class="justify-center section_services__row">
        <v-col
          md="6"
          lg="3"
          v-for="(item, index) in services"
          :key="index"
          class="section_services_col"
        >
          <v-card
            @mouseenter="onHover(item, index)"
            class="section_services_card"
            height="500"
            flat
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <v-img
              height="500"
              class="full-width contain"
              :src="item.src"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    size="52"
                    indeterminate
                    color="primary lighten-1"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-card
        @mouseleave="hover = true"
        class="section_services_card-hover"
        :class="{ hover: hover }"
        width="100%"
        height="500"
        flat
      >
        <v-img
          height="500"
          class="d-flex justify-center align-center"
          :src="cardFull.src"
          aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                size="52"
                indeterminate
                color="primary lighten-1"
              ></v-progress-circular>
            </v-row>
          </template>

          <v-row class="pa-10 align-center my-auto mx-auto">
            <v-col cols="12" md="6" class="pt-12 pt-md-0">
              <h1 class="white--text h1--xxlarge weight-700 card__title">
                {{ cardFull.title }}
              </h1>
            </v-col>
            <v-col cols="12" md="6">
              <p class="white--text h3--large weight-500 mb-6">
                {{ cardFull.title_about }}
              </p>
              <h2 v-if="other" class="white--text h2--xlarge weight-700 my-6">
                {{ locales.landing['service-focus-title'] }}
              </h2>
              <p class="white--text h3--large weight-500 pb-14 pb-md-0">
                {{ cardFull.title_desc }}
              </p>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import lang from '@/mixins/lang'
export default {
  mixins: [lang],
  props: {
    services: Array
  },

  data: () => ({
    hover: true,
    other: true,

    cardFull: {
      src: '',
      title: '',
      title_about: '',
      title_desc: ''
    }
  }),

  created() {
    for (let i = 0; i < this.services.length; i++) {
      this.services[i].title = this.locales.landing['service-title'][i]
      this.services[i].title_about = this.locales.landing['service-about'][i]
      this.services[i].title_desc = this.locales.landing['service-desc'][i]
    }
  },

  methods: {
    onHover(item, index) {
      index === 3 ? (this.other = false) : (this.other = true)

      this.cardFull.src = item.src_full
      this.cardFull.title = item.title
      this.cardFull.title_about = item.title_about
      this.cardFull.title_desc = item.title_desc

      this.hover = false
    }
  }
}
</script>

<style lang="scss" scoped>
.section_services {
  margin: 100px 0;
  color: rgba(9, 39, 59, 1);

  &__row {
    margin-top: 5rem;
  }

  &_col {
    position: relative;
  }

  &_card {
    border-radius: 4rem !important;
  }

  &_card-hover {
    border-radius: 4rem !important;
    margin-top: -512px;
  }

  .card__title {
    width: 75%;
  }

  .hover {
    display: none;
  }

  .animat {
    transition: all 0.5s ease-out !important;
  }
}
</style>
