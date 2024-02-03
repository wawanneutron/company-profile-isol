<template>
  <section class="programs">
    <div class="container">
      <h1 data-aos="fade-up" class="primary--text text--lighten-2 title mb-6">
        {{ locales.career['our-program-title-header'] }}
      </h1>
    </div>
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
          class="programs__img mx-3"
          v-for="(item, i) in programs"
          :key="i"
          :src="item.src"
          max-width="365"
          @click="onShowImage(item)"
        >
        </v-img>
      </VueSlickCarousel>

      <div
        class="programs__arrows hidden-xs-only"
        v-bind:class="{ 'd-none': !isShowArrow }"
      >
        <div class="programs__prev pointer white" @click="prev()">
          <v-icon color="white">mdi-arrow-left</v-icon>
        </div>

        <div
          class="programs__next pointer white"
          v-bind:class="{ 'programs__next--active': isShowArrow }"
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
import screen from '@/mixins/screen'
import lang from '@/mixins/lang'
import { PROGRAMS } from '@/data/general'

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
    programs: PROGRAMS
  }),

  computed: {
    handleSlideShow() {
      if (this.isMobile) return 2
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
    },

    onShowImage(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.programs {
  margin: 10rem 0 20rem 0;
  .title {
    font-size: 4rem !important;
    font-weight: 600;
  }

  ::v-deep .slick-list {
    padding: 0 50px;
  }

  ::v-deep .slick-slide {
    padding: 0 8px;
  }

  &__img {
    border-radius: 4.5rem;
  }

  &__arrows {
    position: relative;
  }

  &__prev {
    background-color: #09273b !important;
    animation: 0.3s ease-out 0s 1 slideInFromLeft;
    position: absolute;
    left: 5px;
    top: -140px;
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
    top: -140px;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0px 7px 22px rgba(143, 134, 196, 0.07);
    z-index: 3;
  }
}
</style>
