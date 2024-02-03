<template>
  <section class="galleries">
    <h1 data-aos="fade-up" class="h1--xxlarge text-center primary--text">
      {{ locales.landing['gallery-header-title'] }}
    </h1>

    <div
      data-aos="zoom-in"
      class="mt-6"
      @mouseenter="handleArrow()"
      @mouseleave="handleArrow()"
    >
      <VueSlickCarousel
        ref="carousel"
        class="fill-height mx-auto pa-0"
        v-bind="settings"
        :slidesToShow="handleSlideShow"
      >
        <v-img
          class="galleries__img full-width cover mx-3"
          v-for="(item, i) in galleries"
          :key="i"
          :src="item.src"
          max-width="365"
          height="230"
          aspect-ratio="1"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                size="48"
                indeterminate
                color="primary lighten-1"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </VueSlickCarousel>

      <div
        class="galleries__arrows hidden-xs-only"
        v-bind:class="{ 'd-none': !isShowArrow }"
      >
        <div class="galleries__prev pointer white" @click="prev()">
          <v-icon color="white">mdi-arrow-left</v-icon>
        </div>

        <div
          class="galleries__next pointer white"
          v-bind:class="{ 'galleries__next--active': isShowArrow }"
          @click="next()"
        >
          <v-icon color="white">mdi-arrow-right</v-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { GALLERIES } from '@/data/general'
import screen from '@/mixins/screen'
import lang from '@/mixins/lang'

export default {
  mixins: [screen, lang],

  components: { VueSlickCarousel },

  data: () => ({
    settings: {
      dots: false,
      infinite: true,
      initialSlide: 0,
      speed: 500,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      arrows: false
    },

    isShowArrow: false,
    galleries: GALLERIES
  }),

  computed: {
    handleSlideShow() {
      if (this.isMobile) return 1
      if (!this.isMobile) return 4
    }
  },

  methods: {
    handleArrow() {
      this.isShowArrow = !this.isShowArrow
    },

    next() {
      this.$refs.carousel.next()
    },

    prev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
.galleries {
  margin: 100px 0;

  ::v-deep .slick-list {
    padding: 0 50px;
  }

  ::v-deep .slick-slide {
    padding: 0 8px;
  }

  &__img {
    border-radius: 3rem;
    @media (max-width: 59em) {
      border-radius: 3rem;
    }
  }

  &__arrows {
    position: relative;
  }

  &__prev {
    background-color: #09273b !important;
    animation: 0.3s ease-out 0s 1 slideInFromLeft;
    position: absolute;
    left: 5px;
    top: -160px;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0px 7px 22px rgba(143, 134, 196, 0.07);
    z-index: 3;
  }
  &__next {
    background-color: #09273b !important;
    animation: 0.3s ease-out 0s 1 slideFromRight;
    position: absolute;
    right: 0;
    top: -160px;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0px 7px 22px rgba(143, 134, 196, 0.07);
    z-index: 3;
  }
}
</style>
