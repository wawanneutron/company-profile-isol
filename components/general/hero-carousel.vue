<template>
  <section class="section-hero">
    <v-carousel
      cycle
      :interval="4000"
      :show-arrows="false"
      height="100vh"
      hide-delimiters
    >
      <div v-if="isManagements">
        <v-carousel-item
          v-for="(item, i) in bannerManagements"
          :key="i"
          :src="item.src"
        >
          <v-container>
            <div class="section-hero__header-text white--text">
              <h1 class="h1--xxlarge weight-700 mb-4">
                {{ title }}
              </h1>
              <p class="h2--xlarge weight-300">
                {{ subtitle }}
              </p>
              <h1 class="h1--xxlarge weight-700 mt-12">#terbaikuntukbangsa</h1>
            </div>
          </v-container>
        </v-carousel-item>
      </div>

      <div v-else>
        <v-carousel-item v-for="(item, i) in banners" :key="i" :src="item.src">
          <v-container>
            <div class="section-hero__header-text white--text">
              <h1 class="h1--xxlarge weight-700 mb-4">
                {{ title }}
              </h1>
              <p class="h2--xlarge weight-300">
                {{ subtitle }}
              </p>
              <h1 class="h1--xxlarge weight-700 mt-12">#terbaikuntukbangsa</h1>
            </div>
          </v-container>
        </v-carousel-item>
      </div>
    </v-carousel>
  </section>
</template>

<script>
import { BANNERS, BANNER_MANAGEMENT } from '@/data/general'
export default {
  props: {
    title: String,
    subtitle: String
  },

  data: () => ({
    banners: BANNERS,
    bannerManagements: BANNER_MANAGEMENT
  }),

  computed: {
    isManagements() {
      return this.$route.name === 'about-managements'
    }
  }
}
</script>

<style lang="scss" scoped>
.section-hero {
  margin-top: -106px;
  &__header-text {
    margin-top: 18%;
  }
  p {
    width: 63%;
  }
}
</style>
