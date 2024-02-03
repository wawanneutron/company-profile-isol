<template>
  <section>
    <section-hero-video-background />
    <section-about />
    <section-services />
    <section-map-location />
    <section-galleries />
    <section-footer-quote />
  </section>
</template>

<script>
import meta from '@/mixins/meta'

export default {
  mixins: [meta],
  data: () => ({
    meta: {
      title: 'I-Solution - We Provide Services With Value',
      description:
        'We will be very happy to help you according to your needs. With our expertise, your business can grow and scale up faster.'
    }
  }),

  mounted() {
    this.getMeta()

    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  methods: {
    getMeta() {
      this.meta.title = this.meta.title
      this.meta.description = this.meta.description.slice(0, 100)
    }
  },

  watch: {
    $route() {
      window.location.reload()
    }
  }
}
</script>
