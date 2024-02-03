<template>
  <client-only>
    <video-background
      class="section-hero"
      src="/video/video-background-compresed.mp4"
      overlay="linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)"
      style="height: 100vh"
      :sources="[
        {
          src: '/video/video-background-compresed.mp4',
          res: 991,
          autoplay: true
        },
        {
          src: '/video/video-background-compresed.mp4',
          res: 575,
          autoplay: true
        }
      ]"
    >
      <div class="container">
        <div data-aos="fade-up" class="section-hero__header-text white--text">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            class="h1--xxlarge weight-700 mb-4"
          >
            {{ locales.landing['hero-title'] }}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            class="h2--xlarge weight-300"
          >
            {{ locales.landing['hero-subtitle'] }}
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            class="h1--large weight-700 mt-12"
          >
            #terbaikuntukbangsa
          </h1>
        </div>
      </div>
    </video-background>
  </client-only>
</template>

<script>
import lang from '@/mixins/lang'

export default {
  mixins: [lang]
}
</script>

<style lang="scss" scoped>
.section-hero {
  margin-top: -105px;

  &__header-text {
    margin-top: 18%;

    h1 {
      width: 50%;
    }

    p {
      width: 63%;
    }

    @media (max-width: 59em) {
      margin-top: 40%;

      h1 {
        width: 100%;
      }

      p {
        width: 90%;
      }
    }
  }
}
</style>
