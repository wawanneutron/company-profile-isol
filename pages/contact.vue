<template>
  <section class="section-hero">
    <v-img
      src="/images/banner/isol1.webp"
      height="100vh"
      class="section-hero__img"
      aspect-ratio="1"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            size="82"
            indeterminate
            color="primary lighten-1"
          ></v-progress-circular>
        </v-row>
      </template>

      <v-container>
        <v-row class="pt-6">
          <v-col cols="12" md="7">
            <div class="section-hero__header white--text">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                class="h1--xxlarge weight-700 mb-4"
              >
                {{ locales.contact['hero-title'] }}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                class="h2--xlarge weight-300"
              >
                {{ locales.contact['hero-subtitle'] }}
              </p>

              <div data-aos="fade-up" data-aos-delay="300">
                <h1 class="h1--large weight-700 mt-12">#terbaikuntukbangsa</h1>
                <div class="d-flex mt-6">
                  <v-icon color="white" class="align-start mr-2"
                    >mdi-map-marker</v-icon
                  >
                  <p
                    class="text-location p--xlarge pointer"
                    @click="onOpenLocation()"
                  >
                    PT Infra Solusi Indonesia, Lippo Cyberpark, Boulevard Gajah
                    Mada No. 2062 Tangerang 15811
                  </p>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="5">
            <card-form-contact data-aos="zoom-in" />
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>

<script>
import meta from '@/mixins/meta'
import lang from '@/mixins/lang'

export default {
  mixins: [meta, lang],

  data: () => ({
    meta: {
      title: 'Contact'
    }
  }),

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer
    }
  },

  methods: {
    onOpenLocation() {
      window.open(
        'https://www.google.com/maps/dir//PT+Infra+Solusi+Indonesia+(i-Solution)+Lippo+Cyberpark+Boulevard+Gajah+Mada+No.+2160+Tangerang+15811/@-6.2308529,106.3848027,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69ff4ea2a40121:0xcdceb7e4dd7b2128!2m2!1d106.6212672!2d-6.2197895'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.section-hero {
  margin-top: -104px;
  @media (max-width: 600px) {
    &__img {
      height: 170vh !important;
    }
    p {
      width: 90% !important;
    }
  }

  @media (max-width: 400px) {
    &__img {
      height: 200vh !important;
    }
  }

  &__header,
  &__card {
    margin-top: 20%;

    h1 {
      width: 70%;
    }

    p {
      width: 90%;
    }

    .text-location {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__card {
    padding: 32px;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px;
  }
}
</style>
